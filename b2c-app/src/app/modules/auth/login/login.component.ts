import { Component, OnInit } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isIE = false;
  public isLoading = false;
  protected idToken: any;

  constructor(protected router: Router,
    protected authService: MsalService,
    protected broadcastService: BroadcastService,
    protected http: HttpClient) {

    if (this.authService.getUser()) {
      this.idToken = this.authService.getUser().idToken as any;
    }

    broadcastService.subscribe("msal:loginSuccess", (payload) => {
      if (localStorage.getItem('redirect')) {
        this.router.navigate(['login']);
        localStorage.clear();
      }
      else if (!this.idToken.userIsActive) {
        this.authService.logout();
        this.router.navigate(['unauthorised']);
      }
      else {
        this.router.navigate(['dashboard']);
      }
    });

    broadcastService.subscribe("msal:loginFailure", (payload) => {
      if (this.b2cForgotPassword()) {
        localStorage.setItem('redirect', 'login');
        this.router.navigate(['forgot-password']);
      }
    });

    if (this.b2cInvitationExpired())
      this.router.navigate(['invitation-expired']);

    if (this.b2cForgotPasswordCanceled())
      localStorage.removeItem('redirect');
  }

  ngOnInit() {
  }

  login() {
    this.authService.loginRedirect();
  }

  b2cInvitationExpired() {
    const authError: string = localStorage.getItem('msal.error.description') ? localStorage.getItem('msal.error.description') : null;
    return authError && authError.indexOf('AADB2C90208') > -1;
  }

  b2cForgotPassword() {
    const authError: string = localStorage.getItem('msal.login.error') ? localStorage.getItem('msal.login.error') : null;
    return authError && authError.indexOf('AADB2C90118') > -1;
  }

  b2cForgotPasswordCanceled() {
    const authError: string = localStorage.getItem('msal.login.error') ? localStorage.getItem('msal.login.error') : null;
    return authError && authError.indexOf('AADB2C90091') > -1;
  }
}