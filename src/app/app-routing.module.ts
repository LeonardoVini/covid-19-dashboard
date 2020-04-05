import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { DashboardComponent } from './dashboard/dashboard.component';

import { CountriesResolver, CountryResolver } from "./services/countries-resolver.service";
import { HistoricalResolver } from './services/historical-resolver.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "homepage",
    component: HomepageComponent,
    resolve: { countries: CountriesResolver },
  },
  {
    path: "dashboard/:country",
    component: DashboardComponent,
    resolve: { country: CountryResolver, historical: HistoricalResolver, countries: CountriesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
