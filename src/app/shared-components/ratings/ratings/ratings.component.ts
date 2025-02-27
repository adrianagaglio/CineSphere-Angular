import { iRaterequest } from '../../../interfaces/iraterequest';
import { Component, ElementRef, Input } from '@angular/core';
import { iMovie } from '../../../interfaces/imovie';
import { AuthService } from '../../../auth/auth.service';
import { MoviesService } from '../../../services/movies.service';
import { Router } from '@angular/router';
import { iRate } from '../../../interfaces/irate';
import { RateService } from '../../../services/rate.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  constructor(
    private authSvc: AuthService,
    private rateSvc: RateService,
    private userSvc: UserService,
    private router: Router
  ) {}

  @Input() movie!: iMovie;

  rating: number = 0;
  movieRate!: iRate;
  userId!: number;
  alreadyVoted!: boolean;
  message!: string;
  rates: iRate[] = [];

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
        this.rateSvc.usersRates$.asObservable().subscribe((rates) => {
          if (this.movie && rates) {
            this.rates = rates;
            if (rates.find((r) => r.movieId === this.movie.id)) {
              this.alreadyVoted = true;
              // this.message = 'You already rated this movie!';
            }
          }
        });
      }
    });
  }

  rate(star: number) {
    this.rating = star;
    let rateRequest: iRaterequest = {
      userId: this.userId,
      movieId: this.movie.id,
      vote: star,
    };
    this.rateSvc.rateMovie(rateRequest).subscribe((res) => {
      this.rates.push(res);
      this.rateSvc.usersRates$.next(this.rates);
    });
    setTimeout(() => {
      this.alreadyVoted = true;
      this.message = 'Thanks for rating!';
    }, 500);
  }
}
