import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminalOperatorComponent } from './terminal-operator.component';

const routes: Routes = [{ path: '', component: TerminalOperatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminalOperatorRoutingModule { }
