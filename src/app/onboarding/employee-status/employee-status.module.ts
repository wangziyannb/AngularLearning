import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeStatusRoutingModule } from './employee-status-routing.module';
import { AddEmployeeStatusComponent } from './add-employee-status/add-employee-status.component';
import { GetEmployeeStatusComponent } from './get-employee-status/get-employee-status.component';
import { ListEmployeeStatusComponent } from './list-employee-status/list-employee-status.component';
import { DeleteEmployeeStatusComponent } from './delete-employee-status/delete-employee-status.component';
import { UpdateEmployeeStatusComponent } from './update-employee-status/update-employee-status.component';
import { EmployeeStatusService } from 'src/app/shared/services/onboarding/employee-status.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeStatusComponent,
    GetEmployeeStatusComponent,
    ListEmployeeStatusComponent,
    DeleteEmployeeStatusComponent,
    UpdateEmployeeStatusComponent
  ],
  imports: [
    CommonModule,
    EmployeeStatusRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [EmployeeStatusService]
})
export class EmployeeStatusModule { }
