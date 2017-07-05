import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { User } from '../users-table/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  user: User;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  getUser(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).then(user => this.user = user);
  }

  ngOnInit(): void {
    this.getUser();
  }

  goBack(): void {
    this.location.back();
  }

}
