import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';





@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  providers: [UserService]
})
export class UsersTableComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
      this.getUsers();
  }
}
