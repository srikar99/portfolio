import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class CommonService {

  constructor(private _httpClient: HttpClient) { }

  getDetails(url: string): Promise<any> {

    return new Promise((resolve, reject) => {
      this._httpClient.get(url).toPromise().then((response: Response) => {
        console.log(response);
        return response;
      });
      
    });
  }
}
