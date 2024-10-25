import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iUser } from '../interfaces/iuser';
import { iAuth } from '../interfaces/iauth';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelp = new JwtHelperService();

  registerUrl = environment.register;
  loginUrl = environment.login;

  authData$ = new BehaviorSubject<iAuth | null>(null);

  isLoggedIn$ = this.authData$.pipe(map((accessData) => !!accessData));

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  register(newUser: Partial<iUser>) {
    return this.http
      .post<iAuth>(this.registerUrl, newUser)
      .pipe(
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
      )
      .pipe(
        tap((iAuthdata) => {
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 1000);
        })
      );
  }

  login(auth: iAuth) {
    return this.http
      .post<iAuth>(this.loginUrl, auth)
      .pipe(
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
      )
      .pipe(
        tap((accessData) => {
          this.authData$.next(accessData);
          localStorage.setItem('authData', JSON.stringify(accessData));
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 500);
          const expDate = this.jwtHelp.getTokenExpirationDate(
            accessData.accessToken
          );

          if (!expDate) return;

          this.autoLogout(expDate);
        })
      );
  }

  logout() {
    this.authData$.next(null);
    localStorage.removeItem('authData');
  }

  autoLogout(expDate: Date) {
    // clearTimeout(this.autoLogoutTimer)
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(() => {
      this.logout();
    }, expMs);
  }

  restoreUser() {
    const userJson: string | null = localStorage.getItem('authData');
    if (!userJson) return;

    const accessData: iAuth = JSON.parse(userJson);

    if (this.jwtHelp.isTokenExpired(accessData.accessToken)) {
      localStorage.removeItem('authData');
      return;
    }

    this.authData$.next(accessData);
  }
}
