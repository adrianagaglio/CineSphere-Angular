import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './hero/hero.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [CardComponent, HeroComponent, TruncatePipe],
  imports: [CommonModule],
  exports: [CardComponent, HeroComponent, TruncatePipe],
})
export class SharedModule {}
