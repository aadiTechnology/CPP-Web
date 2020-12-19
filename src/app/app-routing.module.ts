import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginLayoutComponent } from "./layouts/login-layout/login-layout.component";

const routes: Routes = [
  
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/login-layout/login-layout.module#LoginLayoutModule",
      }
    ],
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      }
    ],
  },
  {
    path: "commonFeature",
    loadChildren: () =>
      import("./common-feature/common-feature.module").then(
        (m) => m.CommonFeatureModule
      ),
  },
  {
    path: "superAdmin",
    loadChildren: () =>
      import("./super-admin/super-admin.module").then(
        (m) => m.SuperAdminModule
      ),
  },
  {
    path: "report",
    loadChildren: () =>
      import("./report/report.module").then((m) => m.ReportModule),
  },
  { 
    path: 'terminalOperator',
    loadChildren: () => import('./terminal-operator/terminal-operator.module')
    .then(m => m.TerminalOperatorModule)
  },
  
  { path: 'staffManagement', loadChildren: () => import('./staff-management/staff-management.module').then(m => m.StaffManagementModule) },
  
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
