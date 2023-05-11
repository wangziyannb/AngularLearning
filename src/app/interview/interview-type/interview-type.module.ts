import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewTypeRoutingModule } from './interview-type-routing.module';
import { AddInterviewTypeComponent } from './add-interview-type/add-interview-type.component';
import { GetInterviewTypeComponent } from './get-interview-type/get-interview-type.component';
import { ListInterviewTypeComponent } from './list-interview-type/list-interview-type.component';
import { DeleteInterviewTypeComponent } from './delete-interview-type/delete-interview-type.component';
import { UpdateInterviewTypeComponent } from './update-interview-type/update-interview-type.component';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddInterviewTypeComponent,
    GetInterviewTypeComponent,
    ListInterviewTypeComponent,
    DeleteInterviewTypeComponent,
    UpdateInterviewTypeComponent
  ],
  imports: [
    CommonModule,
    InterviewTypeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [InterviewTypeService]
})
export class InterviewTypeModule { }
