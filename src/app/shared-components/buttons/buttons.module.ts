import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { RemovebuttonComponent } from './removebutton/removebutton.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapHeart,
  bootstrapHeartFill,
  bootstrapSearch,
  bootstrapStar,
  bootstrapStarFill,
} from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [AddbuttonComponent, RemovebuttonComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      bootstrapHeart,
      bootstrapSearch,
      bootstrapHeartFill,
      bootstrapStar,
      bootstrapStarFill,
    }),
  ],
  exports: [AddbuttonComponent, RemovebuttonComponent],
})
export class ButtonsModule {}
