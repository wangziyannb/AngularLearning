import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { AddRecruiterComponent } from './add-recruiter/add-recruiter.component';
import { GetRecruiterComponent } from './get-recruiter/get-recruiter.component';
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component';
import { DeleteRecruiterComponent } from './delete-recruiter/delete-recruiter.component';
import { UpdateRecruiterComponent } from './update-recruiter/update-recruiter.component';


@NgModule({
  declarations: [
    AddRecruiterComponent,
    GetRecruiterComponent,
    ListRecruiterComponent,
    DeleteRecruiterComponent,
    UpdateRecruiterComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
