import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpContext} from '@angular/common/http';
import {Observable, catchError, throwError} from 'rxjs';

import {environment} from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class HttpService {

  private http = inject(HttpClient);

  baseUrl: string = environment.api.apiBaseUrl;
  httpOptions: HttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe: 'body',
    reportProgress: true,
    responseType: 'json',
    withCredentials: false
  };

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  getUrl(uri: string): string {
    return this.baseUrl + uri;
  }

  getRequest(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path).pipe(
      catchError((err) => {

        console.error(err);

        return throwError(() => "HIBA");
      })
    );
  }

  postRequest(path: string, dataToPost?: any): Observable<any> {
    return this.http.post(this.baseUrl + path, dataToPost, this.httpOptions).pipe(
      catchError((err) => {

        console.error(err);

        return throwError(() => "HIBA");
      })
    );
  }

  putRequest(path: string, dataToPost?: any): Observable<any> {
    return this.http.put(this.baseUrl + path, dataToPost, this.httpOptions).pipe(
      catchError((err) => {

        console.error(err);

        return throwError(() => "HIBA");
      })
    );
  }

  deleteRequest(path: string): Observable<any> {
    return this.http.delete(this.baseUrl + path, this.httpOptions).pipe(
      catchError((err) => {

        console.error(err);

        return throwError(() => "HIBA");
      })
    );
  }

}

export interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  context?: HttpContext,
  observe?: 'body'; //'body' | 'events' | 'response'
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
  reportProgress?: boolean;
  responseType?: 'json'; // 'arraybuffer' | 'blob' | 'json' | 'text'
  withCredentials?: boolean;
}
