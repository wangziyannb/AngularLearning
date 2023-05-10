import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { DeleteInterviewComponent } from './delete-interview/delete-interview.component';
import { GetInterviewComponent } from './get-interview/get-interview.component';
import { ListInterviewComponent } from './list-interview/list-interview.component';
import { UpdateInterviewComponent } from './update-interview/update-interview.component';

const routes: Routes = [
  { path: 'add-interview', component: AddInterviewComponent },
  { path: 'delete-interview', component: DeleteInterviewComponent },
  { path: 'get-interview', component: GetInterviewComponent },
  { path: 'list-interview', component: ListInterviewComponent },
  { path: 'update-interview', component: UpdateInterviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
