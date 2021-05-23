import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

//for services
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/interceptor/auth-interceptor';

//components
import { QuizComponent } from './quiz/quiz.component';
import { AppComponent } from './app.component';
import { CheckboxQuestionComponent } from './quiz/checkbox-question/checkbox-question.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { RadioQuestionComponent } from './quiz/radio-question/radio-question.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsComponent } from './results/results.component';
import { TextQuestionComponent } from './quiz/text-question/text-question.component';

//primeng
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { TreeTableModule } from 'primeng/treetable';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';

//Primeng services
import { MessageService } from 'primeng/api';

//Watchlist project
import { DashboardUserComponent } from './watchlist/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './watchlist/dashboard-admin/dashboard-admin.component';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { NavbarComponent } from './watchlist/navbar/navbar.component';

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
    SignupComponent,
    DashboardComponent,
    TakeQuizComponent,
    DashboardUserComponent,
    DashboardAdminComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TreeTableModule,
    OverlayPanelModule,
    InputTextModule,
    SidebarModule,
    CheckboxModule,
    RadioButtonModule,
    PanelModule,
    SlideMenuModule,
    InputTextareaModule,
    MenuModule,
    //AppRoutingModule,
    ChartModule,
    TooltipModule,
    ToastModule,
    WatchlistRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
