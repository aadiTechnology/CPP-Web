import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../shared/user-profile/user-profile.component";
import { AdminLayoutComponent } from "./admin-layout.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path:"terminal", component:AdminLayoutComponent},
  { path: "user-profile", component: UserProfileComponent },
];
