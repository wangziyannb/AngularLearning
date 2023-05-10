import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'delete-employee', component: DeleteEmployeeComponent },
  { path: 'get-employee', component: GetEmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'update-employee', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
