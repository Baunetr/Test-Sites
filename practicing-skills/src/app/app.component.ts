import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { User } from './user';

const USERS: User[] = [
  {id: 101, firstName: 'Joe', lastName: 'Paxton', email: 'jpaxton@test.com' },
  {id: 102, firstName: 'Sue', lastName: 'Braxton', email: 'sbraxton@test.com' },
  {id: 103, firstName: 'Tom', lastName: 'Wright', email: 'twright@test.com' },
  {id: 104, firstName: 'Pam', lastName: 'Armstrong', email: 'parmstrong@test.com' },
  {id: 105, firstName: 'Mark', lastName: 'Williams', email: 'mwilliams@test.com' },
  {id: 106, firstName: 'Sarah', lastName: 'Young', email: 'syoung@test.com' },
  {id: 107, firstName: 'Phil', lastName: 'Johnson', email: 'pjohnson@test.com' },
  {id: 108, firstName: 'Rose', lastName: 'Armstrong', email: 'rarmstrong@test.com' },
  {id: 109, firstName: 'Rupert', lastName: 'Giles', email: 'rgiles@test.com' },
  {id: 110, firstName: 'Willow', lastName: 'Rosenberg', email: 'wrosenberg@test.com' },
  {id: 111, firstName: 'Xander', lastName: 'Harris', email: 'xharris@test.com' },
  {id: 112, firstName: 'Buffy', lastName: 'Summers', email: 'syoung@test.com' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`

    [class.selected]="hero === selectedHero"

    .selected {
    background-color: #CFD8DC !important;
    color: white;
    }
    .users {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 80%;
    }
    .users li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .users li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }

  `]
})

export class AppComponent {
  title = 'Partner Portal';
  users = USERS;
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
