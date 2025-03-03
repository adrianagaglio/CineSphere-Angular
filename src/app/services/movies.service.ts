import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iMovie } from '../interfaces/imovie';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { iMoviePaged } from '../interfaces/ipageable';
import { iGenre } from '../interfaces/igenre';
import { iActor } from '../interfaces/iactor';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  url = environment.baseUrl + 'movies';

  queryString$ = new BehaviorSubject<string>('');
  searchType$ = new BehaviorSubject<string>('');

  getMovies(): Observable<iMovie[]> {
    return this.http.get<iMovie[]>(this.url).pipe(
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
    return this.http.get<iMovie>(`${this.url}/${id}`).pipe(
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
      .get<iMovie[]>(this.url)
      .pipe(
        map((movies: iMovie[]) =>
          movies.filter((movie) => movie.genres.some((g) => g.name === genre))
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
    return this.http.get<iMovie>(this.url + '/latest');
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
            movie.genres.some((movieGenre) => genres.includes(movieGenre.name))
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

  getMoviesByTitle(title: string): Observable<iMovie[]> {
    return this.getMovies().pipe(
      map((movies) =>
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase())
        )
      )
    );
  }

  paged(
    page: number = 0,
    size: number = 4,
    sortBy: string[] = ['title']
  ): Observable<iMoviePaged> {
    return this.http.get<iMoviePaged>(
      this.url + `/paged?page=${page}&size=${size}&sort=${sortBy.join(',')}`
    );
  }

  addMovie(newMovie: Partial<iMovie>): Observable<iMovie> {
    return this.http.post<iMovie>(this.url, newMovie);
  }

  getAllGenres(): Observable<iGenre[]> {
    return this.http.get<iGenre[]>(this.url + '/genres');
  }

  getAllActors(): Observable<iActor[]> {
    return this.http.get<iActor[]>(this.url + '/actors');
  }
}
