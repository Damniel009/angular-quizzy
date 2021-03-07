import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizComponent } from './quiz/quiz.component';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [AppComponent, QuizQuestionComponent, QuizComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
