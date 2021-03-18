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
  question: questionDto[];
  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  store(question: questionDto): Observable<questionDto> {
    return this.http.post<questionDto>(
      `${this.baseUrl}quiz/post`,
      question,
      {}
    );
  }
}
