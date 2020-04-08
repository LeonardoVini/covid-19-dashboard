import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { CountryModel, HistoricalModel } from '../models/country.model';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public country: CountryModel
  public historical: HistoricalModel

  public barChartData: ChartDataSets[] = []

  public pieChartData: number[] = [];

  public lineChartData: ChartDataSets[] = []
  public lineChartLabels: Label[] = [];

  public lineChartDataCases: ChartDataSets[] = []
  public lineChartDataDeaths: ChartDataSets[] = []
  public lineChartDataRecovered: ChartDataSets[] = []

  public covid_updated_at: number
  public johns_updated_at: number

  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCountryHistorical()
  }

  private getCountryHistorical(): void {
    this.activetedRoute.data.subscribe((data: Data) => {
      this.country = data['country']
      this.historical = data['historical']

      this.resetValues()

      this.covid_updated_at = this.country.updated

      this.setBarChartData()
      this.setPieChartData()
      this.setLineChartDataAndLabel()
    })
  }

  private setLineChartDataAndLabel(): void {
    let possibilities: string[] = ['cases', 'recovered', 'deaths']

    possibilities.forEach((v, i, s) => {
      let count = Object.values(this.historical.timeline[v])

      count = count.slice(Math.max(count.length - 30, 0))

      this.lineChartData.push({ data: count, label: v })
    })

    let dates: string[] = Object.keys(this.historical.timeline.cases)

    dates = dates.slice(Math.max(dates.length - 30, 0))

    this.lineChartLabels = [...dates]

    this.lineChartDataCases = [this.lineChartData[0]]
    this.lineChartDataRecovered = [this.lineChartData[1]]
    this.lineChartDataDeaths = [this.lineChartData[2]]
  }

  private setBarChartData(): void {
    const { todayCases, todayDeaths } = this.country

    this.barChartData.push({
      data: [todayCases, todayDeaths],
      label: `Today's situation`
    })
  }

  private setPieChartData(): void {
    const { active, deaths, recovered } = this.country

    this.pieChartData.push(active, deaths, recovered)
  }

  private resetValues(): void {
    this.pieChartData = []
    this.barChartData = []

    this.lineChartData = []
    this.lineChartLabels = []
    this.lineChartDataCases = []
    this.lineChartDataRecovered = []
    this.lineChartDataDeaths = []
  }
}
