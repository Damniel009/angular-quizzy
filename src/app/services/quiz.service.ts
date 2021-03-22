import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { questionDto } from '../dtos/questionDto';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  baseUrl = 'http://localhost:8080/';

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     Authorization: 'Bearer '
  //   })
  // };

  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

  saveQuestion(question: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}quiz/save`,
      question,
      {}
    );
  }
}
