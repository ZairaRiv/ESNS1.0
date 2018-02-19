import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

import { DataService } from './services/data.service';
import { ReportsComponent } from './components/reports/reports.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';

import {MediaMatcher} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReportsComponent,
    HeaderComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  // services
  providers: [DataService, MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
