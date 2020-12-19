import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "app/common-feature/component/login/login.component";

import { LoginLayoutComponent } from "./login-layout.component";

export const LoginLayoutroutes: Routes = [
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  },
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class LoginLayoutRoutingModule { }
