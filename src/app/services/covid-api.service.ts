import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CountryModel, HistoricalModel } from '../models/country.model';

@Injectable({providedIn: 'root'})
export class Covid19APIService {

  private urlAPI: string = 'https://corona.lmao.ninja'

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<CountryModel[]> {
    const url: string = `${this.urlAPI}/v2/countries`
    return this.http.get<CountryModel[]>(url)
  }

  public getCountry(country: string): Observable<CountryModel> {
    const url: string = `${this.urlAPI}/v2/countries/${country}`
    return this.http.get<CountryModel>(url)
  }

  public getCountryHistorical(country: string): Observable<HistoricalModel> {
    const url: string = `${this.urlAPI}/v2/historical/${country}`
    return this.http.get<HistoricalModel>(url)
  }

  public getGlobalTotals(): Observable<CountryModel> {
    const url: string = `${this.urlAPI}/all`
    return this.http.get<CountryModel>(url)
  }
}
