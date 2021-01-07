import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';
import { DashboardstaffComponent } from './component/dashboardstaff/dashboardstaff.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HighchartsChartModule } from 'highcharts-angular';
import { VehicleEntryExitComponent } from './component/vehicle-entry-exit/vehicle-entry-exit.component';
import { VehiclePrakingComponent } from './component/vehicle-praking/vehicle-praking.component';
import { WaitingContainerComponent } from './component/waiting-container/waiting-container.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [StaffManagementComponent, DashboardstaffComponent, VehicleEntryExitComponent, VehiclePrakingComponent, WaitingContainerComponent],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    MatSelectModule,
    MatButtonModule,
    HighchartsChartModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule
    
  ]
})
export class StaffManagementModule { }
