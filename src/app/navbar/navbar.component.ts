import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from '@angular/router';

import { CountryModel } from "../models/country.model";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {

  public countries: CountryModel[]

  public top_cases: CountryModel[] = [];
  public top_active: CountryModel[] = [];
  public top_recovered: CountryModel[] = [];
  public top_deaths: CountryModel[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getCountries()
  }

  private getCountries(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.countries = data['countries']
      console.log(this.countries)
      this.setCountriesIndex()
    })
  }

  private setCountriesIndex(): void {
    this.top_cases = [...this.countries.sort((a, b) => a.cases > b.cases ? -1 : 1).slice(0, 10)]
    this.top_active = [...this.countries.sort((a, b) => a.active > b.active ? -1 : 1).slice(0, 10)]
    this.top_recovered = [...this.countries.sort((a, b) => a.recovered > b.recovered ? -1 : 1).slice(0, 10)]
    this.top_deaths = [...this.countries.sort((a, b) => a.deaths > b.deaths ? -1 : 1).slice(0, 10)]
  }
}
