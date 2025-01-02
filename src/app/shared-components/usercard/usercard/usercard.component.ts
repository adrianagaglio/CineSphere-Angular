import { Component, Input } from '@angular/core';
import { iUser } from '../../../interfaces/iuser';
import { FavouritesService } from '../../../services/favourites.service';
import { iMovie } from '../../../interfaces/imovie';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss',
})
export class UsercardComponent {
  constructor(private favSvc: FavouritesService) {}

  @Input() user!: iUser;

  movies!: iMovie[];

  message!: string;

  ngOnInit() {
    this.favSvc.getFavouritesByUser(this.user.id).subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (err) => {
        this.message = err;
      },
    });
  }
}
