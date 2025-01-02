import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserfavComponent } from './userfav/userfav.component';
import { FormsModule } from '@angular/forms';
import {
  bootstrapArrowCounterclockwise,
  bootstrapCheck,
  bootstrapPencil,
} from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    DashboardComponent,
    UserdetailComponent,
    SidebarComponent,
    UserfavComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    NgIconsModule.withIcons({
      bootstrapPencil,
      bootstrapCheck,
      bootstrapArrowCounterclockwise,
    }),
  ],
})
export class DashboardModule {}
