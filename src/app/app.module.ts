import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SyncInfoComponent } from './sync-info/sync-info.component';

import { HttpClientModule } from '@angular/common/http';
import {  MsalModule, MsalRedirectComponent } from '@azure/msal-angular';

@NgModule({
  declarations: [
    HomeComponent,
    SyncInfoComponent
  ],
  imports: [
    BrowserModule,
    AppComponent,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    MsalModule
  ],
  providers: [],
  bootstrap: [MsalRedirectComponent]
})
export class AppModule { }
