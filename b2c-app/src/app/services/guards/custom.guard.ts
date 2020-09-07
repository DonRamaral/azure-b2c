import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class CustomGuard implements CanActivate {

  protected idToken: any;

  constructor(protected msalService: MsalService, protected router: Router) {
    if (this.msalService.getUser()) {
      this.idToken = this.msalService.getUser().idToken as any;
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.idToken) {
      return true;
    }
    else {
      return this.router.parseUrl('/login');
    }
  }

}
