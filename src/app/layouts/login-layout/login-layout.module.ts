import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginLayoutComponent } from "./login-layout.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { LoginLayoutroutes } from "./login-layout-routing.module";
import { LoginComponent } from "app/common-feature/component/login/login.component";

@NgModule({
  declarations: [LoginLayoutComponent,LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginLayoutroutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
})
export class LoginLayoutModule {}
