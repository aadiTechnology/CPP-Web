import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CommonFeatureComponent } from "./common-feature.component";

const routes: Routes = [{ path: "", component: CommonFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonFeatureRoutingModule {}
