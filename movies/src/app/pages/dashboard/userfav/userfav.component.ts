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
    // Recupera i preferiti e attende la risposta
    this.favSvc.getFavouritesLoggedUser();
    this.favSvc.favouritesByUser$.subscribe((movies) => {
      this.isLoading = false; // Caricamento completato
      this.dataLoaded = true; // dati caricati
      if (movies && movies.length > 0) {
        console.log('ci sono fav', movies);
        this.movies = movies;
        this.noFavourites = false; // Nasconde il messaggio
      } else {
        console.log('non ci sono fav', movies);
        this.message = 'Favourites not found, please add some movies first';
        this.noFavourites = true; // Mostra il messaggio
      }
    });
  }
}
