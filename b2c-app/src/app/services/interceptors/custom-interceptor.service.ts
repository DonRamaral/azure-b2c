import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {

  protected idToken: any;
  protected msalConfig: any;

  constructor(protected msalService: MsalService,
    protected router: Router) {
      if(msalService.getUser()){
        this.idToken = this.msalService.getUser().idToken as any;
        this.msalConfig = (this.msalService as any).config;
      }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('api/v1') > -1 && this.idToken) {
      if (this.tokenHasExpired())
        this.msalService.logout();
      else {
        if (this.refreshToken())
          this.acquireTokenSilent();

        req = req.clone({
          setHeaders: {
            "Authorization": "Bearer " + localStorage["msal.idtoken"]
          }
        });

        return next.handle(req).pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse) {
              switch (error.status) {
                case 401:
                  this.router.navigate(['unauthorised']);
                  break;
                default:
                  console.log(error);
              }
            }
            return throwError(error);
          })
        );
      }
    }
    else
      return next.handle(req);
  }

  protected tokenHasExpired(): boolean {
    let dateTimeNow = new Date().getTime() / 1000;

    if (dateTimeNow <= this.idToken.exp) {
      return false;
    }
    else {
      return true;
    }
  }

  protected refreshToken(): boolean {
    let timeToRenewToken = new Date().getTime() + this.msalConfig.renewTokenBeforeExpires;
    if (timeToRenewToken >= this.idToken.exp)
      return true;
    else
      return false;
  }

  protected acquireTokenSilent() {
    var loginHint = "login_hint=" + this.idToken.email;

    this.msalService.acquireTokenSilent([this.msalConfig.clientID],
      this.msalConfig.authority,
      this.msalService.getUser(), loginHint)
      .then(response => {
        localStorage.setItem('msal.idtoken', response);
      })
      .catch(err => {
        if (err.name === "InteractionRequiredAuthError") {
          return this.msalService.acquireTokenPopup([this.msalConfig.clientID],
            this.msalConfig.authority,
            this.msalService.getUser(), loginHint)
            .then(response => {
              localStorage.setItem('msal.idtoken', response);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
  }
}