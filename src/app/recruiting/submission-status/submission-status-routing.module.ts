import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubmissionStatusComponent } from './add-submission-status/add-submission-status.component';
import { DeleteSubmissionStatusComponent } from './delete-submission-status/delete-submission-status.component';
import { GetSubmissionStatusComponent } from './get-submission-status/get-submission-status.component';
import { ListSubmissionStatusComponent } from './list-submission-status/list-submission-status.component';
import { UpdateSubmissionStatusComponent } from './update-submission-status/update-submission-status.component';

const routes: Routes = [
  { path: 'add-submission-status', component: AddSubmissionStatusComponent },
  { path: 'delete-submission-status', component: DeleteSubmissionStatusComponent },
  { path: 'get-submission-status', component: GetSubmissionStatusComponent },
  { path: 'list-submission-status', component: ListSubmissionStatusComponent },
  { path: 'update-submission-status', component: UpdateSubmissionStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionStatusRoutingModule { }
