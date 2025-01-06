import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserfavComponent } from './userfav/userfav.component';
import { AdminGuard } from '../../guards/admin.guard';
import { UserGuard } from '../../guards/user.guard';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'userdetail',
    component: UserdetailComponent,
  },
  {
    path: 'userfav',
    component: UserfavComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'manage-movies',
    component: ManageMoviesComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
