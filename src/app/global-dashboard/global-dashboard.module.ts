import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material.module";

import { GlobalDashboardComponent } from "./global-dashboard.component";
import { NavbarModule } from "../navbar/navbar.module";

@NgModule({
  declarations: [GlobalDashboardComponent],
  imports: [CommonModule, RouterModule, MaterialModule, NavbarModule],
  exports: [],
})
export class GlobalDashboardModule {}
