import { iMovie } from '../../interfaces/imovie';
import { iUser } from '../../interfaces/iuser';
import { FavouritesService } from '../../services/favourites.service';
import { UserService } from '../../services/user.service';
import { AuthComponent } from './../../auth/auth.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(
    private userSvc: UserService,
    private favSvc: FavouritesService
  ) {}
}
