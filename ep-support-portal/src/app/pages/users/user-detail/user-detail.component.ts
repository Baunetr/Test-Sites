import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit() {
     // this.route.params
      // (+) converts string 'id to a number'
      // .switchMap((params: Params) => this.service.getUser(+params['id']))
      // .subscribe((user: User) => this.user = user);
  // }

}
