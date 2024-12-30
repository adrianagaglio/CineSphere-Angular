import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';

import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrl: './addbutton.component.scss',
})
export class AddbuttonComponent {
  constructor(private favSvc: FavouritesService) {}

  @Input() movie!: iMovie;
  @Input() userId!: number;
  @Output() addMovie = new EventEmitter<boolean>();

  ngOnInit() {}

  add() {
    // this.favSvc.addFavourite(this.movie, this.userId).subscribe();
    this.favSvc.addFav(this.userId, this.movie).subscribe((res) => {
      console.log(res);
      this.addMovie.emit(true);
    });
  }
}
