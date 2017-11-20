import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import {RouterModule, PreloadAllModules} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RemoteviewService} from './remoteview/shared/remoteview.service';
import {RemoteviewComponent} from './remoteview/remoteview.component';


@NgModule({
  declarations: [
    AppComponent,
    RemoteviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [RemoteviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
