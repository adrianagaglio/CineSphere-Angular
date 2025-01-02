import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings/ratings.component';
import { ShowratingComponent } from './showrating/showrating.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapStar, bootstrapStarFill } from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [RatingsComponent, ShowratingComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ bootstrapStarFill, bootstrapStar }),
  ],
  exports: [RatingsComponent, ShowratingComponent],
})
export class RatingsModule {}
