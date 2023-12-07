import { NgModule } from '@angular/core';

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
    HttpClientModule,
    MsalModule
  ],
  providers: [],
  bootstrap: [MsalRedirectComponent]
})
export class AppModule { }
