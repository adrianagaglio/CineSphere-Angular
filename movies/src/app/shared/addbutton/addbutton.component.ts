import { UserdetailComponent } from './../../pages/dashboard/userdetail/userdetail.component';
import { Component, Input } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';
import { iUser } from '../../interfaces/iuser';
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

  ngOnInit() {}

  add() {
    this.favSvc.addFavourite(this.movie, this.userId).subscribe();
  }
}
