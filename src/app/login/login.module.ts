import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [],
})
export class LoginModule { }
