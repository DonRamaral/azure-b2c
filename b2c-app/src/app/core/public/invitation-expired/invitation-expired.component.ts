import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitation-expired',
  templateUrl: './invitation-expired.component.html',
  styleUrls: ['./invitation-expired.component.css']
})
export class InvitationExpiredComponent {

  public requestId: string;
  public authError: string;
  readonly errorItemKey: string = 'msal.error.description';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.authError = localStorage.getItem(this.errorItemKey) ? localStorage.getItem(this.errorItemKey) : null;

    if (this.authError && this.userInvitationHasExpiredError()) {
      localStorage.removeItem(this.errorItemKey);
      this.requestId = this.getCorrelationId();
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  getCorrelationId() {
    const regexp = new RegExp('(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}');
    return regexp.exec(this.authError)[0];
  }

  userInvitationHasExpiredError() {
    return this.authError && this.authError.indexOf('AADB2C90208') > -1;
  }
}
