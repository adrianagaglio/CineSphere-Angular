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

  movies!: iMovie[];
  message!: string | null;
  isLoading: boolean = true;

  ngOnInit() {
    this.favSvc.getFavouritesLoggedUser();
    this.favSvc.favouritesByUser$.subscribe((movies) => {
      if (movies && movies.length > 0) {
        this.movies = movies;
        this.message = null;
        this.isLoading = false;
      } else if (!movies || movies.length === 0) {
        this.message = 'Favourites not found, please add some movies first';
        this.isLoading = false;
      }
    });
  }

  removeMovie(removedMovie: iMovie) {
    this.movies = this.movies.filter((movie) => movie.id !== removedMovie.id);
    if (this.movies.length === 0) {
      this.message = 'Favourites not found, please add some movies first';
    }
  }
}
