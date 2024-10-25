import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovie } from '../../interfaces/imovie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private movieSvc: MoviesService) {}

  recentMovie!: iMovie;

  movies!: iMovie[];

  ngOnInit() {
    this.movieSvc.getRecentMovie().subscribe((movie) => {
      this.recentMovie = movie;

      this.movieSvc
        .getOthersMovie(this.recentMovie.id)
        .subscribe((movies) => (this.movies = movies));
    });
  }
}
