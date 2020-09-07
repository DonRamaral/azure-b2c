import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  displayNavigation() {
    let locationContainsAnySegment: boolean;
    const segment: string[] = [
      'login',
      'unauthorised',
      'invitation-expired',
      'forgot-password'
    ]

    segment.map((value) => {
      if (location.href.indexOf(value) > -1)
        locationContainsAnySegment = true;
    })

    return !locationContainsAnySegment;
  }
}
