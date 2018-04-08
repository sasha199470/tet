import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/User';
import {catchError} from 'rxjs/operators';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUser(): Observable<User> {
    return this.http.get<User>('./assets/user.json');
  }
}
