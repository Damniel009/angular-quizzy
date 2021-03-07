import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizComponent } from './quiz/quiz.component';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxQuestionComponent } from './checkbox-question/checkbox-question.component';

@NgModule({
  declarations: [AppComponent, QuizQuestionComponent, QuizComponent, CheckboxQuestionComponent],
  imports: [
    FormsModule,
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
