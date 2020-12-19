import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';
import { DashboardstaffComponent } from './component/dashboardstaff/dashboardstaff.component';


@NgModule({
  declarations: [StaffManagementComponent, DashboardstaffComponent],
  imports: [
    CommonModule,
    StaffManagementRoutingModule
  ]
})
export class StaffManagementModule { }
