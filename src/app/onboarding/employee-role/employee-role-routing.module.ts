import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeRoleComponent } from './add-employee-role/add-employee-role.component';
import { DeleteEmployeeRoleComponent } from './delete-employee-role/delete-employee-role.component';
import { GetEmployeeRoleComponent } from './get-employee-role/get-employee-role.component';
import { ListEmployeeRoleComponent } from './list-employee-role/list-employee-role.component';
import { UpdateEmployeeRoleComponent } from './update-employee-role/update-employee-role.component';

const routes: Routes = [
  { path: 'add-employee-role', component: AddEmployeeRoleComponent },
  { path: 'delete-employee-role', component: DeleteEmployeeRoleComponent },
  { path: 'get-employee-role', component: GetEmployeeRoleComponent },
  { path: 'list-employee-role', component: ListEmployeeRoleComponent },
  { path: 'update-employee-role', component: UpdateEmployeeRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoleRoutingModule { }
