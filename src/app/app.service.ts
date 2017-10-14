import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable(

)
export class AppService {
  user = new User('bobby');

  constructor() {}

  getUser() {
    return this.user;
  }
}
