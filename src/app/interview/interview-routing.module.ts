import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'interview', loadChildren: () => import('./interview/interview.module').then(m => m.InterviewModule) },
      { path: 'interviewer', loadChildren: () => import('./interviewer/interviewer.module').then(m => m.InterviewerModule) },
      { path: 'interview-type', loadChildren: () => import('./interview-type/interview-type.module').then(m => m.InterviewTypeModule) },
      { path: 'interview-feedback', loadChildren: () => import('./interview-feedback/interview-feedback.module').then(m => m.InterviewFeedbackModule) },
      { path: 'recruiter', loadChildren: () => import('./recruiter/recruiter.module').then(m => m.RecruiterModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
