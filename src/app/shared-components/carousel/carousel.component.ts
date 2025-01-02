import { Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { iMovie } from '../../interfaces/imovie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  showNavigationArrows = true;
  showNavigationIndicators = false;

  @Input() movies!: iMovie[];
  groupedMovies: iMovie[][] = [];

  ngOnInit() {
    console.log(this.movies);
    this.groupMovies(this.movies, 6); // Raggruppa i film in slide da 6
  }

  private groupMovies(movies: iMovie[], groupSize: number): void {
    for (let i = 0; i < movies.length; i += groupSize) {
      this.groupedMovies.push(movies.slice(i, i + groupSize));
    }
  }

  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
