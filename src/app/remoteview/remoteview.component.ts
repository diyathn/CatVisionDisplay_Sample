import {Component, OnInit} from '@angular/core';
import {RemoteviewService} from './shared/remoteview.service';

@Component({
  templateUrl: './remoteview.component.html',
  providers: [RemoteviewService]
})

export class RemoteviewComponent{
  public authToken;
  constructor(private remoteViewService: RemoteviewService) {
    this.getAccessToken();
  }

  public getAccessToken() {
    this.remoteViewService.getAuthToken().subscribe(response => {
      this.authToken = this.remoteViewService.authToken;
      console.log('Response in Component = ' + this.authToken);
    });
  }
}
