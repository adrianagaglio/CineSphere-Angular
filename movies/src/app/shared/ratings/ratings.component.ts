import { Component, ElementRef, Input } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';
import { AuthService } from '../../auth/auth.service';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { iRate } from '../../interfaces/irate';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  constructor(
    private authSvc: AuthService,
    private movieSvc: MoviesService,
    private router: Router
  ) {}

  @Input() movie!: iMovie;

  rating: number = 0;
  movieRate!: iRate;
  userId!: number;
  alreadyVoted!: boolean;
  message!: string;

  stars = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.userId = this.authSvc.authData$.value!.user.id as number;

        if (this.movie) {
          this.movieSvc
            .checkIfRated(this.movie.id, this.userId)
            .subscribe((rated) => {
              this.alreadyVoted = rated;
              this.message = 'You already rated this movie!';
            });
        }
      }
    });
  }

  rate(star: number) {
    this.rating = star;
    this.movieSvc
      .rateMovie(this.movie.id, this.rating, this.userId)
      .subscribe();
    setTimeout(() => {
      this.alreadyVoted = true;
      this.message = 'Thanks for rating!';
    }, 500);
  }
}
