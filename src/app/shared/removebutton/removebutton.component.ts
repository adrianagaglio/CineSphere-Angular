import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';
import { iMovie } from '../../interfaces/imovie';

@Component({
  selector: 'app-removebutton',
  templateUrl: './removebutton.component.html',
  styleUrl: './removebutton.component.scss',
})
export class RemovebuttonComponent {
  constructor(private favSvc: FavouritesService) {}

  @Input() userId!: number;
  @Input() movie!: iMovie;
  @Output() removeMovie = new EventEmitter<boolean>();
  @Output() removedMovie = new EventEmitter<iMovie>();

  remove() {
    this.favSvc.removeUserFavourite(this.userId, this.movie).subscribe();
    this.removeMovie.emit(false);
    this.removedMovie.emit(this.movie);
  }
}
