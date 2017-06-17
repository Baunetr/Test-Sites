import { Component, Input } from '@angular/core';

import { User } from './user';
@Component({
  selector: 'user-detail',
  template: `
    <div class="" *ngIf="user">
      <h2>{{user.firstName}}'s details!</h2>
      <div class="">
        <label for="">ID:</label>{{user.id}}
      </div>
      <div class="">
        <label for="">First Name:</label>
        <input [(ngModel)]="user.firstName" placeholder="Change User Name">
      </div>
      <div class="">
        <label for="">Last Name:</label>
        <input [(ngModel)]="user.lastName" placeholder="Change User Name">
      </div>
      <div class="">
        <label for="">Email:</label> {{user.email}}
      </div>
    </div>
  `
})
export class UserDetailComponent {
  @Input() user: User;
}
