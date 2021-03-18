import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//for services
import { HttpClientModule } from '@angular/common/http';

//components
import { QuizComponent } from './quiz/quiz.component';
import { AppComponent } from './app.component';
import { CheckboxQuestionComponent } from './quiz/checkbox-question/checkbox-question.component';

//primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { RadioQuestionComponent } from './quiz/radio-question/radio-question.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { TextQuestionComponent } from './quiz/text-question/text-question.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { ChartModule } from 'primeng/chart';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CheckboxQuestionComponent,
    RadioQuestionComponent,
    MenubarComponent,
    TextQuestionComponent,
    ResultsComponent,
    TestComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    PanelModule,
    SlideMenuModule,
    InputTextareaModule,
    MenuModule,
    AppRoutingModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
