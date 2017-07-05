import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  providers: [UserService]
})
export class UsersTableComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService) { }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  gotoDetail(): void {
    this.router.navigate(['/user-detail', this.selectedUser.id]);
  }
}
