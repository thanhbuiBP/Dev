import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:11169/api/cities';
  constructor(private http: HttpClient) {

  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  getProducts(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
      map(this.extractData));
  }
}
