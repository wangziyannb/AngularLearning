import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './shared/guard/auth.guard';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'app', component: LayoutComponent, canActivate: [authGuard], children: [
      { path: 'recruiting', loadChildren: () => import('./recruiting/recruiting.module').then(m => m.RecruitingModule) },
      { path: 'onboarding', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule) },
      { path: 'interview', loadChildren: () => import('./interview/interview.module').then(m => m.InterviewModule) },

      // { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
      // { path: 'vendor', loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule) }
    ]
  },
  // {path:'**', component:AccessForbiddenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
