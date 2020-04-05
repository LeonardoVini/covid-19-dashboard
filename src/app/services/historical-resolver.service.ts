import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Covid19APIService } from './covid-api.service';
import { HistoricalModel } from '../models/country.model';

@Injectable({ providedIn: "root" })
export class HistoricalResolver implements Resolve<HistoricalModel> {
  constructor(private covid19APIService: Covid19APIService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<HistoricalModel> | Promise<HistoricalModel> | HistoricalModel {
    return this.covid19APIService.getCountryHistorical(route.params["country"]);
  }
}
