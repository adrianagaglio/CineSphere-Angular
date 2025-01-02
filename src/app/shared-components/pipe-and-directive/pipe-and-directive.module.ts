import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoPipe } from './crypto.pipe';
import { TruncatePipe } from './truncate.pipe';
import { SelectStarDirective } from './select-star.directive';

@NgModule({
  declarations: [CryptoPipe, TruncatePipe, SelectStarDirective],
  imports: [CommonModule],
  exports: [CryptoPipe, TruncatePipe, SelectStarDirective],
})
export class PipeAndDirectiveModule {}
