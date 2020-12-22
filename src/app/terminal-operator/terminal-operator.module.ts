import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalOperatorRoutingModule } from './terminal-operator-routing.module';
import { TerminalOperatorComponent } from './terminal-operator.component';
import { DashboardTerminalComponent } from './component/dashboard-terminal/dashboard-terminal.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [TerminalOperatorComponent, DashboardTerminalComponent],
  imports: [
    CommonModule,
    TerminalOperatorRoutingModule,
    MatSelectModule,
    MatButtonModule

  ]
})
export class TerminalOperatorModule { }
