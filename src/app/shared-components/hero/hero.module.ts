import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapSearch,
  bootstrapHeart,
  bootstrapHeartFill,
  bootstrapStar,
  bootstrapStarFill,
} from '@ng-icons/bootstrap-icons';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({
      bootstrapHeart,
      bootstrapSearch,
      bootstrapHeartFill,
      bootstrapStar,
      bootstrapStarFill,
    }),
  ],
  exports: [HeroComponent],
})
export class HeroModule {}
