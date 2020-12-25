import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';
import { DashboardstaffComponent } from './component/dashboardstaff/dashboardstaff.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [StaffManagementComponent, DashboardstaffComponent],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    MatSelectModule,
    MatButtonModule,
    HighchartsChartModule
  ]
})
export class StaffManagementModule { }
