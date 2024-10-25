import { iFavourite } from './../interfaces/ifavourite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { iUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    this.updateUserId();
  }

  usersUrl = environment.users;

  userId$ = new BehaviorSubject<number>(0);

  updateUserId() {
    let JsonAuthData = localStorage.getItem('authData');
    if (JsonAuthData) {
      let authData = JSON.parse(JsonAuthData);
      this.userId$.next(authData.user.id);
    }
  }

  getUserById(userId: number): Observable<iUser> {
    return this.http.get<iUser>(`${this.usersUrl}/${userId}`);
  }
}
