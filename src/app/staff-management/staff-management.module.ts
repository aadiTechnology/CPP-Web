import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';


@NgModule({
  declarations: [StaffManagementComponent],
  imports: [
    CommonModule,
    StaffManagementRoutingModule
  ]
})
export class StaffManagementModule { }
