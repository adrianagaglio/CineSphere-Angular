import { Component } from '@angular/core';
import { FavouritesService } from './services/favourites.service';
import { AuthService } from './auth/auth.service';
import { RateService } from './services/rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private authSvc: AuthService, private rateSvc: RateService) {}

  userId!: number;

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.userId = this.authSvc.authData$.value!.user.id as number;
        this.rateSvc.getRatesByUser(this.userId).subscribe((rates) => {
          this.rateSvc.usersRates$.next(rates);
        });
      }
    });
  }
}
