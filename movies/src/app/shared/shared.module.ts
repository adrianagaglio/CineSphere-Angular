import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './hero/hero.component';
import { TruncatePipe } from './truncate.pipe';
import { CryptoPipe } from './crypto.pipe';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { RemovebuttonComponent } from './removebutton/removebutton.component';
import { UsercardComponent } from './usercard/usercard.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    HeroComponent,
    TruncatePipe,
    CryptoPipe,
    AddbuttonComponent,
    RemovebuttonComponent,
    UsercardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardComponent,
    HeroComponent,
    TruncatePipe,
    CryptoPipe,
    AddbuttonComponent,
    RemovebuttonComponent,
    UsercardComponent,
  ],
})
export class SharedModule {}
