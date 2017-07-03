import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


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
  // SelectedUser = User[5];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.route.paramMap
      // .switchMap((params: paramMap) => this.userService.getUser(+params.get('id')))
      // .subscribe(user => this.user = user);
    const id: number = +this.route.snapshot.paramMap.get('id');

    // getUser(id: any) {
      // return Promise.resolve(USERS);
      //   .then(users => users.find(user => user.id === id))
    // }
    // window.alert(id);
    // this.SelectedUser(user: User) = { return User.id === (id), }
  }



}
