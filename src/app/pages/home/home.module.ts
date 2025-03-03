import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from '../../shared-components/card/card.module';
import { PipeAndDirectiveModule } from '../../shared-components/pipe-and-directive/pipe-and-directive.module';
import { HeroModule } from '../../shared-components/hero/hero.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipeAndDirectiveModule,
    CardModule,
    HeroModule,
  ],
})
export class HomeModule {}
