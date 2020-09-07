import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  public fname: Text;
  public lname: Text;
  public email: Text;
  public isInternalUser: boolean = false;
  public active: boolean = false;

  constructor(public userService: UserService,
  protected router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    var body = {
      "firstName": this.fname,
      "lastName": this.lname,
      "email": this.email,
      "isActive": this.active,
      "isInternalUser": this.isInternalUser
    };

    this.userService.insertUser(body)
    .subscribe(
      () => {
        this.router.navigate(['users']);
      }
    );
  }
}
