import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionStatusRoutingModule } from './submission-status-routing.module';
import { AddSubmissionStatusComponent } from './add-submission-status/add-submission-status.component';
import { DeleteSubmissionStatusComponent } from './delete-submission-status/delete-submission-status.component';
import { GetSubmissionStatusComponent } from './get-submission-status/get-submission-status.component';
import { ListSubmissionStatusComponent } from './list-submission-status/list-submission-status.component';
import { UpdateSubmissionStatusComponent } from './update-submission-status/update-submission-status.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';


@NgModule({
  declarations: [
    AddSubmissionStatusComponent,
    DeleteSubmissionStatusComponent,
    GetSubmissionStatusComponent,
    ListSubmissionStatusComponent,
    UpdateSubmissionStatusComponent
  ],
  imports: [
    CommonModule,
    SubmissionStatusRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SubmissionStatusService]
})
export class SubmissionStatusModule { }
