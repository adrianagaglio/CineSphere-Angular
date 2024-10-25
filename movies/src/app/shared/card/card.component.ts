import { Component, Input } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';
import { AuthService } from '../../auth/auth.service';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() movie!: iMovie;
  isLoggedIn!: boolean;
  userId!: number;

  constructor(
    private authSvc: AuthService,
    private favSvc: FavouritesService
  ) {}

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    let jsonAuthData = localStorage.getItem('authData');
    if (jsonAuthData) {
      let authData = JSON.parse(jsonAuthData);
      this.userId = authData.user.id;
    }
  }

  add() {
    this.favSvc.addFavourite(this.movie, this.userId).subscribe();
  }
}
