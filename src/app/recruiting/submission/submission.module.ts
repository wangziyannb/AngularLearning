import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionRoutingModule } from './submission-routing.module';
import { AddSubmissionComponent } from './add-submission/add-submission.component';
import { DeleteSubmissionComponent } from './delete-submission/delete-submission.component';
import { GetSubmissionComponent } from './get-submission/get-submission.component';
import { ListSubmissionComponent } from './list-submission/list-submission.component';
import { UpdateSubmissionComponent } from './update-submission/update-submission.component';


@NgModule({
  declarations: [
    AddSubmissionComponent,
    DeleteSubmissionComponent,
    GetSubmissionComponent,
    ListSubmissionComponent,
    UpdateSubmissionComponent
  ],
  imports: [
    CommonModule,
    SubmissionRoutingModule
  ]
})
export class SubmissionModule { }
