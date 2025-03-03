import { Component, Input } from '@angular/core';
import { iMovie } from '../../../interfaces/imovie';
import { iRate } from '../../../interfaces/irate';
import { MoviesService } from '../../../services/movies.service';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { RateService } from '../../../services/rate.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-showrating',
  templateUrl: './showrating.component.html',
  styleUrl: './showrating.component.scss',
})
export class ShowratingComponent {
  constructor(
    private authSvc: AuthService,
    private userSvc: UserService,
    private rateSvc: RateService,
    private router: Router
  ) {}

  @Input() movie!: iMovie;

  rating!: number;
  movieRate!: iRate;
  userId!: number;
  message!: string;

  stars = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  ngOnInit() {
    this.userSvc.user$.subscribe((user) => {
      if (user) {
        this.userId = user.id;
      }
    });
    if (this.movie) {
      this.rateSvc.getRatesByMovie(this.movie.id).subscribe((rates) => {
        if (rates && rates.length > 0) {
          this.rating =
            rates.reduce((acc, rate) => acc + rate.vote, 0) / rates.length;
        } else {
          this.rating = 0;
          this.message = 'No ratings yet';
        }
      });
    }
  }
}
