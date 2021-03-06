import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CommonFeatureRoutingModule } from "./common-feature-routing.module";
import { CommonFeatureComponent } from "./common-feature.component";

import { FormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [CommonFeatureComponent],
  imports: [CommonModule, CommonFeatureRoutingModule,MatIconModule,FormsModule, NgxSpinnerModule,],
})
export class CommonFeatureModule {}
