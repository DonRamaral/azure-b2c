import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.css']
})
export class UnauthorisedComponent implements OnInit {

  constructor(public msalService: MsalService) { }

  ngOnInit() {
  }

  onBackToLoginPage() {
    this.msalService.logout();
  }
}
