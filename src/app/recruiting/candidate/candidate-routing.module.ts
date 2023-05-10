import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { GetCandidateComponent } from './get-candidate/get-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';

const routes: Routes = [
  { path: 'add-candidate', component: AddCandidateComponent },
  { path: 'delete-candidate', component: DeleteCandidateComponent },
  { path: 'get-candidate', component: GetCandidateComponent },
  { path: 'list-candidate', component: ListCandidateComponent },
  { path: 'update-candidate', component: UpdateCandidateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
