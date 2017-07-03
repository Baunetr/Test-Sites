import { Injectable } from '@angular/core';

import { User } from './users-table/user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

}
