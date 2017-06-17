import { Component } from '@angular/core';

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
  {id: 112, firstName: 'Buffy', lastName: 'Summers', email: 'bsummers@test.com' },
  {id: 113, firstName: 'Spike', lastName: '"Just Spike"', email: 'spike@justspike.com' },
  {id: 114, firstName: 'Dawn', lastName: 'Summers', email: 'dsummers@test.com' },
  {id: 115, firstName: 'Daniel', lastName: 'Osbourne', email: 'dosborne@test.com' },
  {id: 116, firstName: 'Joe', lastName: 'Paxton', email: 'jpaxton@test.com' },
  {id: 117, firstName: 'Sue', lastName: 'Braxton', email: 'sbraxton@test.com' },
  {id: 118, firstName: 'Tom', lastName: 'Wright', email: 'twright@test.com' },
  {id: 119, firstName: 'Pam', lastName: 'Armstrong', email: 'parmstrong@test.com' },
  {id: 120, firstName: 'Mark', lastName: 'Williams', email: 'mwilliams@test.com' },
  {id: 121, firstName: 'Sarah', lastName: 'Young', email: 'syoung@test.com' },
  {id: 122, firstName: 'Phil', lastName: 'Johnson', email: 'pjohnson@test.com' },
  {id: 123, firstName: 'Rose', lastName: 'Armstrong', email: 'rarmstrong@test.com' },
  {id: 124, firstName: 'Rupert', lastName: 'Giles', email: 'rgiles@test.com' },
  {id: 125, firstName: 'Willow', lastName: 'Rosenberg', email: 'wrosenberg@test.com' },
  {id: 126, firstName: 'Xander', lastName: 'Harris', email: 'xharris@test.com' },
  {id: 127, firstName: 'Buffy', lastName: 'Summers', email: 'bsummers@test.com' },
  {id: 128, firstName: 'Spike', lastName: '"Just Spike"', email: 'spike@justspike.com' },
  {id: 129, firstName: 'Dawn', lastName: 'Summers', email: 'dsummers@test.com' },
  {id: 130, firstName: 'Daniel', lastName: 'Osbourne', email: 'dosborne@test.com' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Partner Portal';
  users = USERS;
}
