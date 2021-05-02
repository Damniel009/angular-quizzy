import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  saveLesson(lesson: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}lesson/recent`, lesson, {});
  }

  getLesson(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}lesson`);
  }
}
