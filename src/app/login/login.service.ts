import { Injectable } from '@angular/core';
// import {API_BASE_URL_NEW as APINEW} from '../../shared/shared.constant';
// import {API_BASE_URL as APIOLD} from '../../shared/shared.constant';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserAccessGooritaServiceModel, LoginServiceParamGoorita} from './login.model';
// const API_BASE_URL_NEW = APINEW;
// const API_BASE_URL = APIOLD;

const API_BASE_URL = 'http://123.100.226.154:6012';
// const API_BASE_URL = 'http://192.168.99.11:6012';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) { }
  
  login(params: LoginServiceParamGoorita) {
      const options = this.createRequestOptions();
      const url = API_BASE_URL + '/api/login';
      return this.httpClient.post(url, JSON.stringify(params), {headers: options}).pipe(map(user => user));
  }

  // getUserAccess(userId: number) {
  //   // let str = API_BASE_URL_PROD + "/gis/service/access/" + userId;
  //   let str = API_BASE_URL + "/api/access/" + userId;
  //   const header = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const options = { headers: header };
  //   return this.httpClient.get<UserAccessGooritaServiceModel>(str, options).pipe(map(x => {
  //     return x;
  //   }));
  // }

  private createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }

}
