import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeStatusComponent } from './add-employee-status/add-employee-status.component';
import { DeleteEmployeeStatusComponent } from './delete-employee-status/delete-employee-status.component';
import { GetEmployeeStatusComponent } from './get-employee-status/get-employee-status.component';
import { ListEmployeeStatusComponent } from './list-employee-status/list-employee-status.component';
import { UpdateEmployeeStatusComponent } from './update-employee-status/update-employee-status.component';

const routes: Routes = [
  { path: 'add-employee-status', component: AddEmployeeStatusComponent },
  { path: 'delete-employee-status', component: DeleteEmployeeStatusComponent },
  { path: 'get-employee-status', component: GetEmployeeStatusComponent },
  { path: 'list-employee-status', component: ListEmployeeStatusComponent },
  { path: 'update-employee-status', component: UpdateEmployeeStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeStatusRoutingModule { }
