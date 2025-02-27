import { AuthService } from './../auth/auth.service';
import { iFavourite } from './../interfaces/ifavourite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { iUser } from '../interfaces/iuser';

import { iUpdateuserinfo } from '../interfaces/iupdateuserinfo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.restoreUser();
  }

  user$ = new BehaviorSubject<iUser | null>(null);

  url = environment.baseUrl + 'users';

  getAllUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.url).pipe(
      catchError((error) => {
        return throwError(() => {
          let message = '';
          if (error.status >= 400 && error.status < 500) {
            message = 'Not found';
          } else if (error.status === 500) {
            message = 'Request error';
          }
          return message;
        });
      })
    );
  }

  getUser(): Observable<iUser> {
    return this.http
      .get<iUser>(this.url + '/user')
      .pipe(tap((u) => this.user$.next(u)));
  }

  getUserById(userId: number): Observable<iUser> {
    return this.http.get<iUser>(`${this.url}/${userId}`).pipe(
      catchError((error) => {
        return throwError(() => {
          let message = '';
          if (error.status >= 400 && error.status < 500) {
            message = 'Not found';
          } else if (error.status === 500) {
            message = 'Request error';
          }
          return message;
        });
      })
    );
  }

  updateUser(user: Partial<iUpdateuserinfo>): Observable<iUser> {
    return this.http.put<iUser>(`${this.url}/${user.id}`, user).pipe(
      catchError((error) => {
        return throwError(() => {
          let message = '';
          if (error.status >= 400 && error.status < 500) {
            message = 'Not found';
          } else if (error.status === 500) {
            message = 'Request error';
          }
          return message;
        });
      })
    );
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.url}/${userId}`);
  }

  restoreUser() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.getUser().subscribe();
      }
    });
  }
}
