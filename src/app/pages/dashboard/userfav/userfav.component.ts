import { Component } from '@angular/core';
import { iMovie } from '../../../interfaces/imovie';
import { FavouritesService } from '../../../services/favourites.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-userfav',
  templateUrl: './userfav.component.html',
  styleUrl: './userfav.component.scss',
})
export class UserfavComponent {
  constructor(
    private favSvc: FavouritesService,
    private authSvc: AuthService
  ) {}

  movies: iMovie[] = [];
  message!: string;
  isLoading: boolean = true;
  noFavourites!: boolean;
  dataLoaded: boolean = false;

  ngOnInit() {
    this.noFavourites = false;
    let authData = localStorage.getItem('authData');
    if (authData) {
      this.favSvc
        .getFavouritesByUser(JSON.parse(authData).user.id)
        .subscribe((movies) => {
          this.isLoading = false; // Caricamento completato
          this.dataLoaded = true; // dati caricati
          if (movies && movies.length > 0) {
            this.movies = movies;
            this.noFavourites = false; // Nasconde il messaggio
          } else {
            this.message = 'Favourites not found, please add some movies first';
            this.noFavourites = true; // Mostra il messaggio
          }
        });
    }
  }

  removeMovie(movie: iMovie) {
    this.movies = this.movies.filter((m) => m.id !== movie.id);
    if (this.movies.length === 0) {
      this.message = 'Favourites not found, please add some movies first';
      this.dataLoaded = true;
      this.noFavourites = true;
      this.isLoading = false;
    }
  }
}
