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

  userId!: number;
  user!: iUser;
  movies!: iMovie[];

  ngOnInit() {
    this.userSvc.userId$.subscribe((userId) => {
      this.userId = userId;
      console.log(this.userId);
      this.userSvc
        .getUserById(this.userId)
        .subscribe((user) => (this.user = user));
      this.favSvc
        .getFavouritesByUser(this.userId)
        .subscribe((movies) => (this.movies = movies));
    });
  }
}
