import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class RefreshtokenInterceptor implements HttpInterceptor {
  constructor(private authSvc: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          const newToken = res.headers.get('Authorization');
          if (newToken) {
            localStorage.setItem('token', newToken);
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.warn('Token scaduto');
          this.authSvc.logout();
          this.router.navigate(['/']);
        }
        return throwError(() => error);
      })
    );
  }
}
