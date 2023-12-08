import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MsalGuard } from '@azure/msal-angular';
import { SyncInfoComponent } from './sync-info/sync-info.component';


export const routes: Routes = [
  {
    path: 'sync-info',
    component: SyncInfoComponent,
    canActivate: [ MsalGuard ]
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

