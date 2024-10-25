import { Component } from '@angular/core';
import { iUser } from '../../../interfaces/iuser';
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

  userId!: number;
  movies!: iMovie[];
  message!: any;

  ngOnInit() {
    let jsonAuthData = localStorage.getItem('authData');
    if (jsonAuthData) {
      this.userId = JSON.parse(jsonAuthData).user.id;
      this.favSvc.favouritesByUser$.subscribe((movies) => {
        if (movies) {
          this.movies = movies;
        } else {
          this.favSvc.getFavouritesByUser(this.userId).subscribe((movies) => {
            if (movies) this.movies = movies;
          });
        }
      });
    }
  }
}
