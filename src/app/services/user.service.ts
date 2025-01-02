import { iFavourite } from './../interfaces/ifavourite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { iUser } from '../interfaces/iuser';
import { AuthService } from '../auth/auth.service';
import { iUpdateuserinfo } from '../interfaces/iupdateuserinfo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  user$ = new BehaviorSubject<Partial<iUser> | null>(null);

  usersUrl = environment.users;

  getAllUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.usersUrl).pipe(
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

  getUserById(userId: number): Observable<iUser> {
    return this.http.get<iUser>(`${this.usersUrl}/${userId}`).pipe(
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

  updateUser(user: iUpdateuserinfo): Observable<iUser> {
    return this.http.put<iUser>(`${this.usersUrl}/${user.id}`, user).pipe(
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
}
