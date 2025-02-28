import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserfavComponent } from './userfav/userfav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  bootstrapArrowCounterclockwise,
  bootstrapCheck,
  bootstrapPencil,
} from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';
import { CardModule } from '../../shared-components/card/card.module';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';
import { AddMovieComponent } from './manage-movies/add-movie/add-movie.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    UserdetailComponent,
    SidebarComponent,
    UserfavComponent,
    ManageMoviesComponent,
    AddMovieComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({
      bootstrapPencil,
      bootstrapCheck,
      bootstrapArrowCounterclockwise,
    }),
    CardModule,
    NgbModalModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
