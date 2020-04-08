import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Covid19APIService } from "./covid-api.service";
import { CountryModel, HistoricalModel } from "../models/country.model";

@Injectable({ providedIn: "root" })
export class CountriesResolver implements Resolve<CountryModel[]> {
  constructor(private covid19APIService: Covid19APIService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<CountryModel[]> | Promise<CountryModel[]> | CountryModel[] {
    return this.covid19APIService.getCountries();
  }
}

@Injectable({ providedIn: "root" })
export class CountryResolver implements Resolve<CountryModel> {
  constructor(private covid19APIService: Covid19APIService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<CountryModel> | Promise<CountryModel> | CountryModel {
    return this.covid19APIService.getCountry(route.params["country"]);
  }
}

@Injectable({ providedIn: "root" })
export class GlobalResolver implements Resolve<CountryModel> {
  constructor(private covid19APIService: Covid19APIService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<CountryModel> | Promise<CountryModel> | CountryModel {
    return this.covid19APIService.getGlobalTotals();
  }
}
