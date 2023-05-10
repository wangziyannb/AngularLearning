import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { DeleteInterviewerComponent } from './delete-interviewer/delete-interviewer.component';
import { GetInterviewerComponent } from './get-interviewer/get-interviewer.component';
import { ListInterviewerComponent } from './list-interviewer/list-interviewer.component';
import { UpdateInterviewerComponent } from './update-interviewer/update-interviewer.component';

const routes: Routes = [
  { path: 'add-interviewer', component: AddInterviewerComponent },
  { path: 'delete-interviewer', component: DeleteInterviewerComponent },
  { path: 'get-interviewer', component: GetInterviewerComponent },
  { path: 'list-interviewer', component: ListInterviewerComponent },
  { path: 'update-interviewer', component: UpdateInterviewerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
