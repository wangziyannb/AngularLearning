import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { GetCandidateComponent } from './get-candidate/get-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddCandidateComponent,
    DeleteCandidateComponent,
    GetCandidateComponent,
    ListCandidateComponent,
    UpdateCandidateComponent,
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CandidateService]
})
export class CandidateModule { }
