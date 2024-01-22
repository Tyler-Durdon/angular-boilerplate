import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports:
    [SharedModule, CommonModule, EmployeeRoutingModule],
  declarations:
    [EmployeeComponent]
})
export class EmployeeModule { }
