import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardstaffComponent } from './component/dashboardstaff/dashboardstaff.component';

import { StaffManagementComponent } from './staff-management.component';

const routes: Routes = 
[
  {
     path: '',
     component: StaffManagementComponent,
     children: [
      {
        path: "",
        redirectTo: "staffDash",
        pathMatch: "full",
      },
      {
        path: "staffDash",
        component: DashboardstaffComponent,
      },
    ],
    }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
