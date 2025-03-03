import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FavouritesService } from '../../services/favourites.service';
import { MoviesService } from '../../services/movies.service';
import { combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private authSvc: AuthService,
    private userSvc: UserService,
    private favSvc: FavouritesService,
    private movieSvc: MoviesService,
    private router: Router
  ) {}

  isLoggedIn!: boolean;
  query!: string;

  isAdmin: boolean = false;

  ngOnInit() {
    combineLatest(this.authSvc.authData$, this.authSvc.isLoggedIn$).subscribe(
      ([authData, isLoggedIn]) => {
        this.isLoggedIn = isLoggedIn;
        if (authData && authData.role === 'ADMIN') {
          this.isAdmin = true;
        }
      }
    );
  }

  logout() {
    this.authSvc.logout();
    this.userSvc.user$.next(null);
    this.favSvc.favouritesByUser$.next(null);
  }

  search(query: string) {
    if (query) {
      this.movieSvc.queryString$.next(query);
      this.query = '';
      this.movieSvc.searchType$.next('title');
      setTimeout(() => {
        this.router.navigate(['/search-result']);
      }, 100);
    }
  }
}
