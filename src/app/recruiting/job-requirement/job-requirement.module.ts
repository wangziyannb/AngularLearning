import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRequirementRoutingModule } from './job-requirement-routing.module';
import { AddJobRequirementComponent } from './add-job-requirement/add-job-requirement.component';
import { DeleteJobRequirementComponent } from './delete-job-requirement/delete-job-requirement.component';
import { GetJobRequirementComponent } from './get-job-requirement/get-job-requirement.component';
import { ListJobRequirementComponent } from './list-job-requirement/list-job-requirement.component';
import { UpdateJobRequirementComponent } from './update-job-requirement/update-job-requirement.component';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddJobRequirementComponent,
    DeleteJobRequirementComponent,
    GetJobRequirementComponent,
    ListJobRequirementComponent,
    UpdateJobRequirementComponent
  ],
  imports: [
    CommonModule,
    JobRequirementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [JobRequirementService]
})
export class JobRequirementModule { }
