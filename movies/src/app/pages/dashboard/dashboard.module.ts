import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserfavComponent } from './userfav/userfav.component';

@NgModule({
  declarations: [DashboardComponent, UserdetailComponent, SidebarComponent, UserfavComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
