import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperAdminComponent } from './super-admin.component';

const routes: Routes = [
  { 
    path: '', 
    component: SuperAdminComponent 
},
 { 
   path: 'adminDashboard',
  loadChildren: () => import('./admin-dashboard/admin-dashboard.module')
  .then(m => m.AdminDashboardModule)
 },
  {
     path: 'userManagement',
     loadChildren: () => import('./user-management/user-management.module')
     .then(m => m.UserManagementModule) 
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
