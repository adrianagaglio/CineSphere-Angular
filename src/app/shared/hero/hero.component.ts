import { Component, Input } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(private router: Router) {}

  @Input() movie!: iMovie;
  isHome!: boolean;

  ngOnInit() {
    console.log(this.movie);

    if (this.router.url === '/') {
      this.isHome = true;
    }
  }
}
