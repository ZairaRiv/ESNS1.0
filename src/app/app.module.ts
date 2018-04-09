import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
import { CenteredlistComponent } from './designcomponents/centeredlist/centeredlist.component';
import { GridlistComponent } from './designcomponents/gridlist/gridlist.component';
import { ShootingComponent } from './components/shooting/shooting.component';
import { RapeComponent } from './components/rape/rape.component';
import { StalkingComponent } from './components/stalking/stalking.component';
import { GtaComponent } from './components/gta/gta.component';
import { InjuryComponent } from './components/injury/injury.component';
import { FloodComponent } from './components/flood/flood.component';
import { BigboxComponent } from './designcomponents/bigbox/bigbox.component';
import { OptionsbuttonsComponent } from './designcomponents/optionsbuttons/optionsbuttons.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from "./auth.guard";
import { AdminComponent } from './components/admin/admin.component';
import { FindstudentComponent } from './components/findstudent/findstudent.component';
import { MapComponent } from './components/map/map.component';
import { SchoolComponent } from './components/school/school.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FindstudentpublicComponent } from './components/findstudentpublic/findstudentpublic.component';
import { LogoutComponent } from './components/logout/logout.component';
import { InfoboxComponent } from './designcomponents/dashboard/infobox/infobox.component';
import { GearsComponent } from './designcomponents/gears/gears.component';

const appRoutes: Routes = [
  { path: '', component:MainComponent},
  { path: 'about', component:AboutComponent},
  { path: 'report', component:ReportComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'reportType', component:ReportTypeComponent},
  { path: 'shooting', component:ShootingComponent},
  { path: 'rape', component:RapeComponent},
  { path: 'stalking', component:StalkingComponent},
  { path: 'gta', component:GtaComponent},
  { path: 'injury', component:InjuryComponent},
  { path: 'flood', component:FloodComponent},
  { path: 'login', component:LoginComponent},
  { path: 'logout', component:LogoutComponent},
  { path: 'findstudentpublic', component:FindstudentpublicComponent},
  { path: 'admin', component:AdminComponent, canActivate: [AuthGuard]},
  { path: 'map', component:MapComponent, canActivate: [AuthGuard]},
  { path: 'school', component:SchoolComponent, canActivate: [AuthGuard]},
  { path: 'findstudent', component:FindstudentComponent, canActivate: [AuthGuard]},
  { path: 'messaging', component:MessagingComponent, canActivate: [AuthGuard]}
];

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
    CenteredlistComponent,
    GridlistComponent,
    ShootingComponent,
    RapeComponent,
    StalkingComponent,
    GtaComponent,
    InjuryComponent,
    FloodComponent,
    BigboxComponent,
    OptionsbuttonsComponent,
    LoginComponent,
    AdminComponent,
    FindstudentComponent,
    MapComponent,
    SchoolComponent,
    MessagingComponent,
    FindstudentpublicComponent,
    LogoutComponent,
    InfoboxComponent,
    GearsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  // services
  providers: [DataService, MediaMatcher, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
