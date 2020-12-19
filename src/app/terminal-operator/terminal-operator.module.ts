import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalOperatorRoutingModule } from './terminal-operator-routing.module';
import { TerminalOperatorComponent } from './terminal-operator.component';
import { DashboardTerminalComponent } from './component/dashboard-terminal/dashboard-terminal.component';


@NgModule({
  declarations: [TerminalOperatorComponent, DashboardTerminalComponent],
  imports: [
    CommonModule,
    TerminalOperatorRoutingModule
  ]
})
export class TerminalOperatorModule { }
