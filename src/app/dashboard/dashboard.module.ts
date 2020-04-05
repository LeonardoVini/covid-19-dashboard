import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard.component';

import { ChartsModule } from 'ng2-charts';

import { PieChartModule } from './pie-chart/pie-chart.module';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { LineChartModule } from './line-chart/line-chart.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ChartsModule,
    BarChartModule,
    PieChartModule,
    LineChartModule,
    NavbarModule
  ],
  exports: [],
})
export class DashboardModule { }
