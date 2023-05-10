import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewFeedbackComponent } from './add-interview-feedback/add-interview-feedback.component';
import { DeleteInterviewFeedbackComponent } from './delete-interview-feedback/delete-interview-feedback.component';
import { GetInterviewFeedbackComponent } from './get-interview-feedback/get-interview-feedback.component';
import { ListInterviewFeedbackComponent } from './list-interview-feedback/list-interview-feedback.component';
import { UpdateInterviewFeedbackComponent } from './update-interview-feedback/update-interview-feedback.component';

const routes: Routes = [
  { path: 'add-interview-feedback', component: AddInterviewFeedbackComponent },
  { path: 'delete-interview-feedback', component: DeleteInterviewFeedbackComponent },
  { path: 'get-interview-feedback', component: GetInterviewFeedbackComponent },
  { path: 'list-interview-feedback', component: ListInterviewFeedbackComponent },
  { path: 'update-interview-feedback', component: UpdateInterviewFeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewFeedbackRoutingModule { }
