import { Component, Input } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';
import { iRate } from '../../interfaces/irate';
import { MoviesService } from '../../services/movies.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showrating',
  templateUrl: './showrating.component.html',
  styleUrl: './showrating.component.scss',
})
export class ShowratingComponent {
  constructor(
    private authSvc: AuthService,
    private movieSvc: MoviesService,
    private router: Router
  ) {}

  @Input() movie!: iMovie;

  rating: number = 0;
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
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.userId = this.authSvc.authData$.value!.user.id as number;

        if (this.movie) {
          this.movieSvc.restoreRatings(this.movie.id).subscribe((rateInfo) => {
            this.rating = rateInfo.vote / rateInfo.count;
            if (!this.rating || this.rating === 0) {
              this.message = 'No ratings yet';
            }
          });
        }
      }
    });
  }
}
