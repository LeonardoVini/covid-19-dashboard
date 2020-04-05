import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './homepage.component';
import { MaterialModule } from '../material.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    NavbarModule
  ],
  exports: [],
})
export class HomepageModule { }
