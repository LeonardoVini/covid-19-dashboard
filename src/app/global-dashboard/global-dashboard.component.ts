import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { CountryModel } from '../models/country.model';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

@Component({
  selector: 'app-global-dashboard',
  templateUrl: './global-dashboard.component.html',
  styleUrls: ['./global-dashboard.component.scss']
})
export class GlobalDashboardComponent implements OnInit {

  public global: CountryModel[]
  public globalTotals: CountryModel

  public top50Cases: CountryModel[]
  public top50Deaths: CountryModel[]
  public top50Recovered: CountryModel[]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    registerLocaleData(localePt, 'pt')
    this.getGlobal()
  }

  private getGlobal(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.global = data['countries']
      this.globalTotals = data['global']

      this.setTopCountries()
    })
  }

  private setTopCountries(): void {
    this.top50Cases = this.global
      .sort((a, b) => a.cases < b.cases ? 1 : -1)
      .slice(0, 50)

    this.top50Deaths = this.global
      .sort((a, b) => a.deaths < b.deaths ? 1 : -1)
      .slice(0, 50)

    this.top50Recovered = this.global
      .sort((a, b) => a.recovered < b.recovered ? 1 : -1)
      .slice(0, 50)
  }
}
