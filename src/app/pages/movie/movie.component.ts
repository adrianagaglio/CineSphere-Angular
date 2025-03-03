import { Component } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  constructor(private movieSvc: MoviesService, private route: ActivatedRoute) {}

  movieId!: number;
  movie!: iMovie;
  relatedsByGenre!: iMovie[];
  relatedByActor: iMovie[] = [];
  byCast!: iMovie[];
  isLoading: boolean = true;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
      this.movieSvc.getMovieById(this.movieId).subscribe((movie) => {
        this.movie = movie;
        this.movieSvc
          .getRelatedsByGenre(
            this.movie.id,
            this.movie.genres.map((movie) => movie.name)
          )
          .subscribe((movies) => {
            this.relatedsByGenre = movies;
            this.isLoading = false;
          });
        this.movieSvc.getMovies().subscribe((movies) => {
          for (let actor of this.movie.actors) {
            for (let movie of movies) {
              if (movie.actors.some((a) => a.actorName === actor.actorName)) {
                this.relatedByActor.push(movie);
              }
            }
            break;
          }
          this.relatedByActor = this.relatedByActor.filter(
            (movie) => movie.id !== this.movie.id
          );
        });
      });
    });
  }

  updateList(event: any) {
    if (event.target) this.relatedByActor = [];
  }
}
