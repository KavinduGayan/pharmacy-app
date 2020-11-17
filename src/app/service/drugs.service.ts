import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Drug } from '../drugs/Drug';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  private readonly URL = 'http://localhost:8081/api/v1/drugs/';
  getDrugs(): Observable<Drug[]> {
    console.log('Request is sent!');
    return this.http.get<Drug[]>(this.URL);
  }

  saveDrug(any) {
    console.log('Request is sent!');
    return this.http.post<Drug>(this.URL,any);
  }

  
  constructor(private http: HttpClient) { }
}
