import { Injectable } from '@angular/core';
import { User } from './User';
import {Airport} from "./Airport";

@Injectable(

)
export class UserService {
  users = [
    // new User('Bob'),
    // new User('Jane')
  ];
  private user;
  constructor() {
  }

  getUser() {
    return this.user;
  }

  setUser(name: String) {
    for (let usr of this.users)
    {
      if ( usr.getName() === name) {
        this.user = usr;
      }
    }
  }
}
