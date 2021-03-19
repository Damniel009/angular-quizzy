import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';

//test
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'rezults',
    component: ResultsComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
