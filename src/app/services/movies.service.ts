import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iMovie } from '../interfaces/imovie';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { iRate } from '../interfaces/irate';
import { iActor } from '../interfaces/iactor';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  movieUrl = environment.movies;

  getMovies(): Observable<iMovie[]> {
    return this.http.get<iMovie[]>(this.movieUrl).pipe(
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

  getMovieById(id: number): Observable<iMovie> {
    return this.http.get<iMovie>(`${this.movieUrl}/${id}`).pipe(
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

  getMoviesByGenre(genre: string): Observable<iMovie[]> {
    return this.http
      .get<iMovie[]>(this.movieUrl)
      .pipe(
        map((movies: iMovie[]) =>
          movies.filter((movie) => movie.genres.includes(genre))
        )
      )
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
      );
  }

  getRecentMovie(): Observable<iMovie> {
    return this.getMovies()
      .pipe(
        map((movies: iMovie[]) => movies.sort((a, b) => b.year - a.year)[0])
      )
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
      );
  }

  getOthersMovie(id: number): Observable<iMovie[]> {
    return this.getMovies()
      .pipe(
        map((movies: iMovie[]) => movies.filter((movie) => movie.id !== id))
      )
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
      );
  }

  getRelatedsByGenre(id: number, genres: string[]): Observable<iMovie[]> {
    return this.getMovies()
      .pipe(
        map((movies) =>
          movies.filter((movie) =>
            movie.genres.some((movieGenre) => genres.includes(movieGenre))
          )
        )
      )
      .pipe(map((movies) => movies.filter((movie) => movie.id !== id)))
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
      );
  }
}
