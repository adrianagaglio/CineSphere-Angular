import { Component, Input } from '@angular/core';
import { iMovie } from '../../interfaces/imovie';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() movie!: iMovie;
}
