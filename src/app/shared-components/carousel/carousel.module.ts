import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, NgbCarouselModule, CardModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
