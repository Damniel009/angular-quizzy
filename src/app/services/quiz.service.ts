import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { quizDto } from '../dtos/finalQuizDto';
import { questionDto } from '../dtos/questionDto';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  saveQuestion(question: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}quiz/save`, question, {});
  }

  getOwnQuizzes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}quiz/quizzes`);
  }

  getAllQuizzes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}quiz/quizzes/all`);
  }

  getQuiz(quizId): Observable<quizDto> {
    return this.http.get<quizDto>(`${this.baseUrl}quiz/` + quizId);
  }

  deleteQuiz(quizId) {
    return this.http
      .delete(`${this.baseUrl}quiz/delete/` + quizId)
      .subscribe((res) => {});
  }
}
