import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  protected idToken: any;

  constructor(public router: Router,
    public msalService: MsalService) {
    if (msalService.getUser()) {
      this.idToken = this.msalService.getUser().idToken as any;
    }
  }

  ngOnInit() {
  }
}