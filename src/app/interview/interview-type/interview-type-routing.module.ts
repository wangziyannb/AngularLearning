import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewTypeComponent } from './add-interview-type/add-interview-type.component';
import { DeleteInterviewTypeComponent } from './delete-interview-type/delete-interview-type.component';
import { GetInterviewTypeComponent } from './get-interview-type/get-interview-type.component';
import { ListInterviewTypeComponent } from './list-interview-type/list-interview-type.component';
import { UpdateInterviewTypeComponent } from './update-interview-type/update-interview-type.component';

const routes: Routes = [
  { path: 'add-interview-type', component: AddInterviewTypeComponent },
  { path: 'delete-interview-type', component: DeleteInterviewTypeComponent },
  { path: 'get-interview-type', component: GetInterviewTypeComponent },
  { path: 'list-interview-type', component: ListInterviewTypeComponent },
  { path: 'update-interview-type', component: UpdateInterviewTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewTypeRoutingModule { }
