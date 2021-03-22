import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';

//test
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './services/guard/authentication-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'rezults',
    component: ResultsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule {}
