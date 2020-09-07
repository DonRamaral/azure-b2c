import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { APP_CONFIG } from 'src/app/services/app-config/app-config.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService: MsalService) { }

  ngOnInit() {
    this.navigateToForgotPassword();
  }

  navigateToForgotPassword() {
    this.authService.authority = this.authService.authority.replace(APP_CONFIG.b2cAuthenticationFlow.toLowerCase(), APP_CONFIG.b2cForgotPasswordFlow.toLowerCase());
    this.authService.loginRedirect();
  }
}
