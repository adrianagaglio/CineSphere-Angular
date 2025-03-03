import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapSearch } from '@ng-icons/bootstrap-icons';
import { RouterLink, RouterModule } from '@angular/router';
import { RatingsModule } from '../ratings/ratings.module';
import { PipeAndDirectiveModule } from '../pipe-and-directive/pipe-and-directive.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    NgIconsModule.withIcons({ bootstrapSearch }),
    RouterLink,
    RatingsModule,
    PipeAndDirectiveModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
