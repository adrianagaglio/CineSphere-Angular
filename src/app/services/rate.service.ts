import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { iRate } from '../interfaces/irate';
import { iRaterequest } from '../interfaces/iraterequest';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private http: HttpClient) {}

  url: string = environment.baseUrl + 'rates';

  usersRates$ = new BehaviorSubject<iRate[]>([]);

  getRates(): Observable<iRate[]> {
    return this.http.get<iRate[]>(this.url);
  }

  getRatesByUser(userId: number): Observable<iRate[]> {
    return this.http.get<iRate[]>(`${this.url}/by-user/${userId}`);
  }

  getRatesByMovie(movieId: number): Observable<iRate[]> {
    return this.http.get<iRate[]>(`${this.url}/by-movie/${movieId}`);
  }

  rateMovie(rateRequest: iRaterequest): Observable<iRate> {
    return this.http.post<iRate>(this.url, rateRequest);
  }

  // restoreRatings(movieId: number): Observable<iRate> {
  //   return this.getMovieById(movieId)
  //     .pipe(
  //       map((movie) => {
  //         return movie.rate;
  //       })
  //     )
  //     .pipe(
  //       catchError((error) => {
  //         return throwError(() => {
  //           let message = '';
  //           if (error.status >= 400 && error.status < 500) {
  //             message = 'Not found';
  //           } else if (error.status === 500) {
  //             message = 'Request error';
  //           }
  //           return message;
  //         });
  //       })
  //     );
  // }
}
