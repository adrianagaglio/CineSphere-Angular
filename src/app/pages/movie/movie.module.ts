import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { CardModule } from '../../shared-components/card/card.module';
import { RatingsModule } from '../../shared-components/ratings/ratings.module';
import { HeroModule } from '../../shared-components/hero/hero.module';
import { CarouselModule } from '../../shared-components/carousel/carousel.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    CardModule,
    RatingsModule,
    HeroModule,
    CarouselModule,
  ],
})
export class MovieModule {}
