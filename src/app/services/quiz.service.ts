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

  constructor(private http: HttpClient) {}

  saveQuestion(question: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}quiz/save`,
      question,
      {}
    );
  }

  getQuizzes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}quiz/quizzes`)
  }

  deleteQuiz(quizId) {
    return this.http.delete(`${this.baseUrl}quiz/delete/` + quizId).subscribe(res => {
      console.log('smt');
      
    })
  }
}
