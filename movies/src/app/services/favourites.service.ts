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
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private http: HttpClient) {}

  favouritesUrl = environment.favourites;

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
        userFav.movies.push(movie);
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
      .pipe(map((userFav: iFavourite) => userFav.movies));
  }
}
