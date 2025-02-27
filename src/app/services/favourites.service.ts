import { Ifavrequest } from './../interfaces/ifavrequest';
import { iFavourite } from './../interfaces/ifavourite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMovie } from '../interfaces/imovie';
import { environment } from '../../environments/environment.development';
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { iUser } from '../interfaces/iuser';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private http: HttpClient, private userSvc: UserService) {}

  favUrl = environment.baseUrl + 'favourites';
  userUrl = environment.baseUrl + 'users';

  favouritesByUser$ = new BehaviorSubject<iMovie[] | null>([]);

  getFavouritesByUser(userId: number): Observable<iMovie[]> {
    return this.http.get<iMovie[]>(this.favUrl, {
      params: { id: userId },
    });
  }

  getFavouritesLoggedUser() {
    this.userSvc.user$.subscribe((user) => {
      if (user) {
        let userId = user.id;
        this.getFavouritesByUser(userId).subscribe((movies) => {
          this.favouritesByUser$.next(movies);
        });
      }
    });
  }

  updateFav(favReq: Ifavrequest): Observable<iUser> {
    return this.http.put<iUser>(this.favUrl, favReq).pipe(
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
