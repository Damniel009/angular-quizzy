import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule,InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
