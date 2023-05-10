import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewerRoutingModule } from './interviewer-routing.module';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { GetInterviewerComponent } from './get-interviewer/get-interviewer.component';
import { ListInterviewerComponent } from './list-interviewer/list-interviewer.component';
import { DeleteInterviewerComponent } from './delete-interviewer/delete-interviewer.component';
import { UpdateInterviewerComponent } from './update-interviewer/update-interviewer.component';


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
    InterviewerRoutingModule
  ]
})
export class InterviewerModule { }
