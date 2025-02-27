import { Component, Input } from '@angular/core';
import { iUser } from '../../../interfaces/iuser';
import { FavouritesService } from '../../../services/favourites.service';
import { iMovie } from '../../../interfaces/imovie';
import { AuthService } from '../../../auth/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss',
})
export class UsercardComponent {
  constructor(
    private favSvc: FavouritesService,
    private authSvc: AuthService,
    private userSvc: UserService
  ) {}

  @Input() user!: iUser;

  loggedUser!: iUser;

  movies!: iMovie[];

  message!: string;

  role!: string;

  ngOnInit() {
    this.userSvc.user$.subscribe((user) => {
      if (user) {
        this.loggedUser = user;
      }
    });

    this.authSvc.authData$.subscribe((authData) => {
      if (authData) {
        this.role = authData.role;
      }
    });

    this.favSvc.getFavouritesByUser(this.user.id).subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (err) => {
        this.message = err;
      },
    });
  }

  deleteUser() {
    this.userSvc
      .deleteUser(this.user.id)
      .subscribe((res) => console.log('User deleted successfullu'));
  }
}
