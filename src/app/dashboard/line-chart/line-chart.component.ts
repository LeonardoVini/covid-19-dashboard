import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'covid-19-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() public lineChartData: ChartDataSets[] = [];
  @Input() public lineChartLabels: Label[] = [];
  @Input() public lineChartColor: string;
  @Input() public covid_updated_at: number

  public data_type: string
  public country: string

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{ id: 'y-axis-0', position: 'left' }] }
  };

  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.lineChartColor === 'grey' ? this.data_type = 'cases' : null
    this.lineChartColor === 'green' ? this.data_type = 'recovered' : null
    this.lineChartColor === 'red' ? this.data_type = 'deaths' : null
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.country = this.activateRoute.snapshot.params['country']
    this.setLineChartColor()
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  private setLineChartColor(): void {
    if (this.lineChartColor === 'grey') {
      this.lineChartColors = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
      ]
    }

    if (this.lineChartColor === 'red') {
      this.lineChartColors = [
        { // grey
          backgroundColor: 'rgba(255,99,71,0.2)',
          borderColor: 'rgba(255,99,71,1)',
          pointBackgroundColor: 'rgba(255,99,71,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,71,0.8)'
        }
      ]
    }

    if (this.lineChartColor === 'green') {
      this.lineChartColors = [
        { // grey
          backgroundColor: 'rgba(50, 205, 50, 0.2)',
          borderColor: 'rgba(50, 205, 50, 1)',
          pointBackgroundColor: 'rgba(50, 205, 50, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(50, 205, 50, 0.8)'
        }
      ]
    }
  }
}
