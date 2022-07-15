import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Dashboard2Component,
  ],
  
  imports: [
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [],
  providers:[]

})
export class DashboardModule { }
