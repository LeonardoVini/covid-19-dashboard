import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart.component';

@NgModule({
  declarations: [LineChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [LineChartComponent],
})
export class LineChartModule { }
