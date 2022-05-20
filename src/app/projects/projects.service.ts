import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../shared/shared.constant';
import { ConsoleHelper } from '../shared/shared.helpers';

@Injectable()
export class ProjectsService {
  constructor(private httpClient: HttpClient) { }
  private createRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }

  samplePost(params: any): Observable<any> {
    const options = this.createRequestOptions();
    const url = API_BASE_URL + '/api/post';
    ConsoleHelper.log("Service:||==>> ", url)
    return this.httpClient.post(url, params, { headers: options }).pipe(
      map(res => {
        return res;
      })
    );
  }

  sampleGet(): Observable<any> {
    const url = API_BASE_URL + "sample.json";
    ConsoleHelper.log("Service:||==>> ", url)
    return this.httpClient.get(url).pipe(
      map(res => {
        return res;
      })
    );
  }

  getProjectsTitle(): Observable<any> {
    const url = API_BASE_URL + "projects-test.json";
    ConsoleHelper.log("Service:||==>> ", url)
    return this.httpClient.get(url).pipe(
      map(res => {
        return res;
      })
    );
  }

}
