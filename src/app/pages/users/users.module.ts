import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { RouterLink } from '@angular/router';
import { UsercardModule } from '../../shared-components/usercard/usercard.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, RouterLink, UsercardModule],
})
export class UsersModule {}
