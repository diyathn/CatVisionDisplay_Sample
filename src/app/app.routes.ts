import { Routes } from '@angular/router';
import { RemoteviewComponent } from './remoteview/remoteview.component';
import {AppComponent} from './app.component';

export const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'remoteview', component: RemoteviewComponent }
];
