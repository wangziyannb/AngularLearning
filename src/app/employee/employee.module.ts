import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../shared/services/employee.service';



@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService]
})


export class EmployeeModule { }
