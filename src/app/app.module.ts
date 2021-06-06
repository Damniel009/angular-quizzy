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
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { CarouselModule } from 'primeng/carousel';
import { CaptchaModule } from 'primeng/captcha';

//Primeng services
import { MessageService } from 'primeng/api';

//Watchlist project
import { DashboardUserComponent } from './watchlist/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './watchlist/dashboard-admin/dashboard-admin.component';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { NavbarComponent } from './watchlist/navbar/navbar.component';
import { UserPageComponent } from './watchlist/user-page/user-page.component';
import { WatchlistPageComponent } from './watchlist/watchlist-page/watchlist-page.component';
import { EditWatchlistComponent } from './watchlist/edit-watchlist/edit-watchlist.component';
import { CustomCardComponent } from './watchlist/user-page/custom-card/custom-card.component';
import { LoginComponent } from './watchlist/login/login.component';
import { AuthWatchlistInterceptor } from './watchlist/services/interceptor/auth-interceptor';

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
    UserPageComponent,
    WatchlistPageComponent,
    EditWatchlistComponent,
    CustomCardComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    RatingModule,
    CommonModule,
    HttpClientModule,
    DynamicDialogModule,
    MenubarModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    BadgeModule,
    CaptchaModule,
    AvatarModule,
    ButtonModule,
    TreeTableModule,
    FileUploadModule,
    OverlayPanelModule,
    InputTextModule,
    SidebarModule,
    CheckboxModule,
    RadioButtonModule,
    PanelModule,
    SlideMenuModule,
    TagModule,
    InputTextareaModule,
    MenuModule,
    //AppRoutingModule,
    ChartModule,
    TooltipModule,
    ToastModule,
    WatchlistRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthWatchlistInterceptor,
      multi: true,
    },
    MessageService,
    DialogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
