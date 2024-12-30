import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private userSvc: UserService,
    private favSvc: FavouritesService
  ) {}

  isLoggedIn!: boolean;

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authSvc.logout();
    this.userSvc.user$.next(null);
    this.favSvc.favouritesByUser$.next(null);
  }
}
