import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppComponent } from './app.component';
import { CheckboxQuestionComponent } from './checkbox-question/checkbox-question.component';

//primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    QuizQuestionComponent,
    QuizComponent,
    CheckboxQuestionComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    PanelModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
