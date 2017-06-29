import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './users-list';

@Injectable()
export class UserService {
  getHeroes(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<User[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getUsers()), 2000);
    });
  }
}
