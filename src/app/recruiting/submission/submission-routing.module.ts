import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubmissionComponent } from './add-submission/add-submission.component';
import { DeleteSubmissionComponent } from './delete-submission/delete-submission.component';
import { GetSubmissionComponent } from './get-submission/get-submission.component';
import { ListSubmissionComponent } from './list-submission/list-submission.component';
import { UpdateSubmissionComponent } from './update-submission/update-submission.component';

const routes: Routes = [
  { path: 'add-submission', component: AddSubmissionComponent },
  { path: 'delete-submission', component: DeleteSubmissionComponent },
  { path: 'get-submission', component: GetSubmissionComponent },
  { path: 'list-submission', component: ListSubmissionComponent },
  { path: 'update-submission', component: UpdateSubmissionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionRoutingModule { }
