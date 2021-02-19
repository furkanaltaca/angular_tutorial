import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {
  constructor() {}
  loggedIn = false;

  login(user: User): boolean {
    if (user.username == 'furkan' && user.password == '123') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.username);
      return true;
    }
    return false;
  }

  logOut() {
    this.loggedIn = false;
    localStorage.removeItem('isLogged');
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
