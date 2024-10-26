import { Component } from '@angular/core';
import { FavouritesService } from './services/favourites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private favSvc: FavouritesService) {}

  ngOnInit() {
    this.favSvc.getFavouritesLoggedUser();
  }
}
