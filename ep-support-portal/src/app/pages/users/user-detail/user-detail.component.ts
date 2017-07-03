import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { User } from '../users-table/user';

export const USERS: User[] = [
  {id: 101, firstName: 'Eddard', lastName: 'Stark', email: 'estark@test.com'},
  {id: 102, firstName: 'Catelyn', lastName: 'Stark', email: 'cstark@test.com'},
  {id: 103, firstName: 'Jamie', lastName: 'Lannister', email: 'jlannister@test.com'},
  {id: 104, firstName: 'Cersei', lastName: 'Lannister', email: 'clannister@test.com'},
  {id: 105, firstName: 'John', lastName: 'Snow', email: 'jsnow@test.com'},
  {id: 106, firstName: 'Daenerys', lastName: 'Targaryen', email: 'dtargaryen@test.com' },
  {id: 107, firstName: 'Calcifer', lastName: '"Just Calcifer"', email: 'calcifer@justcalcifer.com' },
  {id: 108, firstName: 'Chihiro', lastName: 'Ogino', email: 'cogino@test.com' },
  {id: 109, firstName: 'Rupert', lastName: 'Giles', email: 'rgiles@test.com' },
  {id: 110, firstName: 'Willow', lastName: 'Rosenberg', email: 'wrosenberg@test.com' },
  {id: 111, firstName: 'Xander', lastName: 'Harris', email: 'xharris@test.com' },
  {id: 112, firstName: 'Buffy', lastName: 'Summers', email: 'bsummers@test.com' },
  {id: 113, firstName: 'Spike', lastName: '"Just Spike"', email: 'spike@justspike.com' },
  {id: 114, firstName: 'Dawn', lastName: 'Summers', email: 'dsummers@test.com' },
  {id: 115, firstName: 'Daniel', lastName: 'Osbourne', email: 'dosborne@test.com' },
  {id: 116, firstName: 'Lord', lastName: 'Voldemort', email: 'lvoldemort@hewhomustnotbenamed.com' },
  {id: 117, firstName: 'Hermione', lastName: 'Granger', email: 'hgranger@test.com' },
  {id: 118, firstName: 'Ron', lastName: 'Weasley', email: 'rweasley@test.com' },
  {id: 119, firstName: 'Severus', lastName: 'Snape', email: 'ssnape@test.com' },
  {id: 120, firstName: 'Harry', lastName: 'Potter', email: 'hpotter@test.com' },
  {id: 121, firstName: 'Albus', lastName: 'Dumbledore', email: 'adumbledore@test.com' },
  {id: 122, firstName: 'Chim', lastName: 'Chim', email: 'chimchim@test.com' },
  {id: 123, firstName: 'Speed', lastName: 'Racer', email: 'sracer@test.com' },
  {id: 124, firstName: 'Sailor', lastName: 'Moon', email: 'smoon@test.com' },
  {id: 125, firstName: 'Sailor', lastName: 'Mercury', email: 'smercury@test.com' },
  {id: 126, firstName: 'Sailor', lastName: 'Mars', email: 'smars@test.com' },
  {id: 127, firstName: 'Sailor', lastName: 'Jupiter', email: 'sjupiter@test.com' },
  {id: 128, firstName: 'Sailor', lastName: 'Venus', email: 'svenus@test.com' },
  {id: 129, firstName: 'Sailor', lastName: 'Pluto', email: 'spluto@test.com' },
  {id: 130, firstName: 'No-Face', lastName: 'Kaonashi', email: 'nkaonashi@test.com' },
];

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  SelectedUser = User[5]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');

    // getUser(id: any) {
      // return Promise.resolve(USERS);
      //   .then(users => users.find(user => user.id === id))
    // }
    // window.alert(id);
    // this.SelectedUser(user: User) = { return User.id === (id), }
  }



}
