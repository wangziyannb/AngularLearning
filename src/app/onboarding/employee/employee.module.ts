import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/onboarding/employee.service';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GetEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
