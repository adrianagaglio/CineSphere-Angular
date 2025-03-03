import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { CardComponent } from '../../shared-components/card/card/card.component';
import { CardModule } from '../../shared-components/card/card.module';

@NgModule({
  declarations: [SearchResultComponent],
  imports: [CommonModule, SearchResultRoutingModule, CardModule],
})
export class SearchResultModule {}
