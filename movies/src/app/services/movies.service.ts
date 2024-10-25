import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iMovie } from '../interfaces/imovie';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  movieUrl = environment.movies;

  getMovies(): Observable<iMovie[]> {
    return this.http.get<iMovie[]>(this.movieUrl);
  }

  getMovieById(id: number): Observable<iMovie> {
    return this.http.get<iMovie>(`${this.movieUrl}/${id}`);
  }

  getMoviesByGenre(genre: string): Observable<iMovie[]> {
    return this.http
      .get<iMovie[]>(this.movieUrl)
      .pipe(
        map((movies: iMovie[]) =>
          movies.filter((movie) => movie.genres.includes(genre))
        )
      );
  }

  getRecentMovie(): Observable<iMovie> {
    return this.getMovies().pipe(
      map((movies: iMovie[]) => movies.sort((a, b) => b.year - a.year)[0])
    );
  }

  getOthersMovie(id: number): Observable<iMovie[]> {
    return this.getMovies().pipe(
      map((movies: iMovie[]) => movies.filter((movie) => movie.id !== id))
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
      .pipe(map((movies) => movies.filter((movie) => movie.id !== id)));
  }
}
