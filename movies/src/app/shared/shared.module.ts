import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './hero/hero.component';
import { TruncatePipe } from './truncate.pipe';
import { CryptoPipe } from './crypto.pipe';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { RemovebuttonComponent } from './removebutton/removebutton.component';
import { UsercardComponent } from './usercard/usercard.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapSearch,
  bootstrapHeart,
  bootstrapHeartFill,
  bootstrapStar,
  bootstrapStarFill,
} from '@ng-icons/bootstrap-icons';
import { RouterModule } from '@angular/router';
import { RatingsComponent } from './ratings/ratings.component';
import { ShowratingComponent } from './showrating/showrating.component';

@NgModule({
  declarations: [
    CardComponent,
    HeroComponent,
    TruncatePipe,
    CryptoPipe,
    AddbuttonComponent,
    RemovebuttonComponent,
    UsercardComponent,
    RatingsComponent,
    ShowratingComponent,
  ],
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
  exports: [
    CardComponent,
    HeroComponent,
    TruncatePipe,
    CryptoPipe,
    AddbuttonComponent,
    RemovebuttonComponent,
    UsercardComponent,
    RatingsComponent,
    ShowratingComponent,
  ],
})
export class SharedModule {}
