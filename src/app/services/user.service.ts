import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";

import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "jd@gmail.com",
        isActive: true,
        registered: new Date("01/02/2018  08:30:00"),
        hide: true
      },
      {
        firstName: "Kevin",
        lastName: "John",
        email: "kj@gmail.com",
        isActive: false,
        registered: new Date("03/11/2018  04:30:00"),
        hide: true
      },
      {
        firstName: "Elon",
        lastName: "Musk",
        email: "em@gmail.com",
        isActive: true,
        registered: new Date("08/02/2018  18:30:00"),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
