import {
  HttpClient,
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
  constructor(private http: HttpClient) {}

  saveQuestion(question: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}quiz/save`,
      question,
      {}
    );
  }
}
