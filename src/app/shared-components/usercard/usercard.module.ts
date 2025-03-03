import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercardComponent } from './usercard/usercard.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [UsercardComponent],
  imports: [CommonModule, RouterLink],
  exports: [UsercardComponent],
})
export class UsercardModule {}
