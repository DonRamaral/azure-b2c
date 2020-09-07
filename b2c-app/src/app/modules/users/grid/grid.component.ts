import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  limit: number = 10;
  offset: number = 0;

  public userData: any;
  public total: number;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.listUsers(this.limit, this.offset)
    .subscribe(
      (response: any) => {
        this.userData = response.callBack.users;
        this.total = response.callBack.total;
      }
    );
  }
}
