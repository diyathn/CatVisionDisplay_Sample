import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const bodys = {secret_api_key: '552c28fd3c357dec3b0934f4bd87b4d3e2bf4e5ab0b0f81dcd4b568d4c76df55'};

@Injectable()
export class RemoteviewService {
  public authToken: string;

  constructor(private http: Http) {
  }


  public getAuthToken(): Observable<any> {

    const body = {
      secret_api_key: '552c28fd3c357dec3b0934f4bd87b4d3e2bf4e5ab0b0f81dcd4b568d4c76df55'
  }
    const headers = new Headers({ 'Content_Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const requestUrl = 'https://app.catvision.io/api/authorization-token';
    return this.http.post(requestUrl, body, options)
      .map((response: Response) => {
        const token = response.json().authorization_token;
        if (token) {
          this.authToken = token;
          return true;
        } else {
          return false;
        }
      });
  }
}
