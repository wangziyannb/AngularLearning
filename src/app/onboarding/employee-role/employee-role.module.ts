import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoleRoutingModule } from './employee-role-routing.module';
import { AddEmployeeRoleComponent } from './add-employee-role/add-employee-role.component';
import { GetEmployeeRoleComponent } from './get-employee-role/get-employee-role.component';
import { ListEmployeeRoleComponent } from './list-employee-role/list-employee-role.component';
import { DeleteEmployeeRoleComponent } from './delete-employee-role/delete-employee-role.component';
import { UpdateEmployeeRoleComponent } from './update-employee-role/update-employee-role.component';
import { EmployeeRoleService } from 'src/app/shared/services/onboarding/employee-role.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeRoleComponent,
    GetEmployeeRoleComponent,
    ListEmployeeRoleComponent,
    DeleteEmployeeRoleComponent,
    UpdateEmployeeRoleComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [EmployeeRoleService]
})
export class EmployeeRoleModule { }
