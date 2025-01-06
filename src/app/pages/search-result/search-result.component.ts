import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { iMovie } from '../../interfaces/imovie';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
})
export class SearchResultComponent {
  constructor(private movieSvc: MoviesService) {}

  query!: string;
  movies: iMovie[] = [];
  isLoading: boolean = true;

  ngOnInit() {
    this.movieSvc.searchType$.subscribe((type) => {
      if (type) {
        this.movieSvc.queryString$.subscribe((query) => {
          this.query = query;
          if (type === 'title') {
            this.movieSvc.getMoviesByTitle(query).subscribe((movies) => {
              this.isLoading = false;
              this.movies = movies;
            });
          } else if (type === 'genre') {
            this.movieSvc.getMoviesByGenre(query).subscribe((movies) => {
              this.isLoading = false;
              this.movies = movies;
            });
          } else if (type === 'actor') {
            this.movieSvc.getMovies().subscribe((movies) => {
              for (let movie of movies) {
                if (movie.actors.some((a) => a.actorName === query)) {
                  this.isLoading = false;
                  this.movies.push(movie);
                }
              }
            });
          }
        });
      }
    });
  }
}
