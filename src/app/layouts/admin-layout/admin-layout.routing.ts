import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../shared/user-profile/user-profile.component";
import { AdminLayoutComponent } from "./admin-layout.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  

  { 
    path: 'terminalOperator',
    loadChildren: () => import('../../terminal-operator/terminal-operator.module')
    .then(m => m.TerminalOperatorModule)
  },
  
  { path: 'staffManagement',
   loadChildren: () => import('../../staff-management/staff-management.module')
   .then(m => m.StaffManagementModule) 
  },
  
];
