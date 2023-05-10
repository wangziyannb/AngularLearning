import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeCategoryComponent } from './add-employee-category/add-employee-category.component';
import { DeleteEmployeeCategoryComponent } from './delete-employee-category/delete-employee-category.component';
import { GetEmployeeCategoryComponent } from './get-employee-category/get-employee-category.component';
import { ListEmployeeCategoryComponent } from './list-employee-category/list-employee-category.component';
import { UpdateEmployeeCategoryComponent } from './update-employee-category/update-employee-category.component';

const routes: Routes = [
  { path: 'add-employee-category', component: AddEmployeeCategoryComponent },
  { path: 'delete-employee-category', component: DeleteEmployeeCategoryComponent },
  { path: 'get-employee-category', component: GetEmployeeCategoryComponent },
  { path: 'list-employee-category', component: ListEmployeeCategoryComponent },
  { path: 'update-employee-category', component: UpdateEmployeeCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeCategoryRoutingModule { }
