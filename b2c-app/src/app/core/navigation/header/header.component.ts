import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public DisplayName: string;
  public DisplayRole: string;

  constructor(public router: Router,
    private msalService: MsalService) { }

  ngOnInit() {
    this.displayUserName();
  }

  displayUserName() {
    if (this.msalService.getUser()) {
      this.DisplayName = this.msalService.getUser().name;
    }
  }

  onLogOut(){
    this.msalService.logout();
  }
}
