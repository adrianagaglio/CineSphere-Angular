import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserfavComponent } from './userfav/userfav.component';

const routes: Routes = [
  {
    path: '',
    component: UserdetailComponent,
  },
  {
    path: 'userdetail',
    component: UserdetailComponent,
  },
  {
    path: 'userfav',
    component: UserfavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
