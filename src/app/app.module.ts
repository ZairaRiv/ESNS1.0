import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

import { DataService } from './services/data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';

import {MediaMatcher} from '@angular/cdk/layout';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReportComponent } from './components/report/report.component';

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './designcomponents/card/card.component';
import { GeolocateComponent } from './components/geolocate/geolocate.component';
import { ReportTypeComponent } from './components/report-type/report-type.component';
import { CenteredtextComponent } from './designcomponents/centeredtext/centeredtext.component';
import { ListComponent } from './designcomponents/list/list.component';

const appRoutes: Routes = [
	{ path: '', component:MainComponent},
  { path: 'about', component:AboutComponent},
  { path: 'report', component:ReportComponent},
  { path: 'reportType', component:ReportTypeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ReportComponent,
    MainComponent,
    CardComponent,
    GeolocateComponent,
    ReportTypeComponent,
    CenteredtextComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
	MaterialModule,
	RouterModule.forRoot(appRoutes)
  ],
  // services
  providers: [DataService, MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
