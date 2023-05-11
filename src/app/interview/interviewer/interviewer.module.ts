import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewerRoutingModule } from './interviewer-routing.module';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { GetInterviewerComponent } from './get-interviewer/get-interviewer.component';
import { ListInterviewerComponent } from './list-interviewer/list-interviewer.component';
import { DeleteInterviewerComponent } from './delete-interviewer/delete-interviewer.component';
import { UpdateInterviewerComponent } from './update-interviewer/update-interviewer.component';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddInterviewerComponent,
    GetInterviewerComponent,
    ListInterviewerComponent,
    DeleteInterviewerComponent,
    UpdateInterviewerComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [InterviewerService]
})
export class InterviewerModule { }
