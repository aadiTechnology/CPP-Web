import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardTerminalComponent } from './component/dashboard-terminal/dashboard-terminal.component';

import { TerminalOperatorComponent } from './terminal-operator.component';

const routes: Routes = [
  {
     path: '',
     component: TerminalOperatorComponent,
     children: [
      {
        path: "",
        redirectTo: "terminalDash",
        pathMatch: "full",
      },
      {
        path: "terminalDash",
        component: DashboardTerminalComponent,
      },
    ],
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminalOperatorRoutingModule { }
