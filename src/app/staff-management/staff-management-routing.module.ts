import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardstaffComponent } from './component/dashboardstaff/dashboardstaff.component';
import { VehicleEntryExitComponent } from './component/vehicle-entry-exit/vehicle-entry-exit.component';
import { VehiclePrakingComponent } from './component/vehicle-praking/vehicle-praking.component';
import { WaitingContainerComponent } from './component/waiting-container/waiting-container.component';

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
      {
        path: "EntryExitCount",
        component: VehicleEntryExitComponent,
      },
      {
        path: "VehicleParking",
        component: VehiclePrakingComponent,
      },
      {
        path: "WaitingContainer",
        component: WaitingContainerComponent,
      },
    ],
    }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
