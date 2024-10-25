import { iFavourite } from './../interfaces/ifavourite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMovie } from '../interfaces/imovie';
import { environment } from '../../environments/environment.development';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private http: HttpClient) {
    this.getFavouritesLoggedUser();
  }

  favouritesUrl = environment.favourites;

  favouritesByUser$ = new BehaviorSubject<iMovie[] | null>([]);

  getAllFavourites(): Observable<iFavourite[]> {
    return this.http.get<iFavourite[]>(this.favouritesUrl);
  }

  addFavourite(movie: iMovie, id: number): Observable<iFavourite> {
    // prendo tutti i preferiti
    return this.getAllFavourites().pipe(
      switchMap((favourites: iFavourite[]) => {
        // controllo se l'utente esiste già
        let userFav = favourites.find(
          (favourite: iFavourite) => favourite.id === id
        );
        // se non esiste, faccio una post con un nuovo oggetto creato al momento
        if (!userFav) {
          let newFav: iFavourite = { id: id, movies: [movie] };
          return this.http.post<iFavourite>(this.favouritesUrl, newFav);
        }
        // se esiste, aggiungo il movie all'array dell'utente e faccio una put
        let movieFound = userFav.movies.find(
          (userMovie) => userMovie.id === movie.id
        );
        if (!movieFound) {
          userFav.movies.push(movie);
        } else {
          alert('Movie already in favourites');
        }

        return this.http.put<iFavourite>(
          `${this.favouritesUrl}/${id}`,
          userFav
        );
      })
    );
  }

  getFavouritesByUser(userId: number): Observable<iMovie[]> {
    return this.http
      .get<iFavourite>(`${this.favouritesUrl}/${userId}`)
      .pipe(map((userFav: iFavourite) => userFav.movies))
      .pipe(
        catchError((error) => {
          return throwError(() => {
            let message = '';
            if (error.status > 400 && error.status < 500) {
              message = 'Favourites not found, please add some movies first';
            } else if (error.status === 500) {
              message = 'Request error';
            }
            return message;
          });
        })
      );
  }

  getFavouritesLoggedUser() {
    let jsonAuthData = localStorage.getItem('authData');
    if (jsonAuthData) {
      let userId = JSON.parse(jsonAuthData).user.id;
      this.getFavouritesByUser(userId).subscribe((movies) => {
        this.favouritesByUser$.next(movies);
      });
    }
  }

  removeUserFavourite(userId: number, movie: iMovie) {
    return this.http
      .get<iFavourite>(`${this.favouritesUrl}/${userId}`)
      .pipe(
        switchMap((userFav: iFavourite) => {
          userFav.movies = userFav.movies.filter(
            (m: iMovie) => m.id !== movie.id
          );
          return this.http.put<iFavourite>(
            `${this.favouritesUrl}/${userId}`,
            userFav
          );
        })
      )
      .pipe(tap((favourite) => this.favouritesByUser$.next(favourite.movies)));
  }
}
