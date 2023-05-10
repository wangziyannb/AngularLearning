import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecruiterComponent } from './add-recruiter/add-recruiter.component';
import { DeleteRecruiterComponent } from './delete-recruiter/delete-recruiter.component';
import { GetRecruiterComponent } from './get-recruiter/get-recruiter.component';
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component';
import { UpdateRecruiterComponent } from './update-recruiter/update-recruiter.component';

const routes: Routes = [
  { path: 'add-recruiter', component: AddRecruiterComponent },
  { path: 'delete-recruiter', component: DeleteRecruiterComponent },
  { path: 'get-recruiter', component: GetRecruiterComponent },
  { path: 'list-recruiter', component: ListRecruiterComponent },
  { path: 'update-recruiter', component: UpdateRecruiterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
