import { Component } from '@angular/core';
import { FavouritesService } from './services/favourites.service';
import { AuthService } from './auth/auth.service';
import { RateService } from './services/rate.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private userSvc: UserService, private rateSvc: RateService) {}

  userId!: number;

  ngOnInit() {
    this.userSvc.user$.subscribe((user) => {
      if (user) {
        this.userId = user.id!;
        this.rateSvc.getRatesByUser(this.userId).subscribe((rates) => {
          this.rateSvc.usersRates$.next(rates);
        });
      }
    });
  }
}
