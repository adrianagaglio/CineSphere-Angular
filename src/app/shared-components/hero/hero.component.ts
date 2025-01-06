import { Component, Input } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { iActor } from '../../interfaces/iactor';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(private router: Router, private movieSvc: MoviesService) {}

  @Input() movie!: iMovie;
  isHome!: boolean;

  ngOnInit() {
    if (this.router.url === '/') {
      this.isHome = true;
    }
  }

  searchByGenre(genre: string) {
    this.movieSvc.queryString$.next(genre);
    this.movieSvc.searchType$.next('genre');
    this.router.navigate(['/search-result']);
  }

  searchByActor(actor: iActor) {
    this.movieSvc.queryString$.next(actor.actorName);
    this.movieSvc.searchType$.next('actor');
    this.router.navigate(['/search-result']);
  }
}
