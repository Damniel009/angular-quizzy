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
    return this.http.post<any>(`${this.baseUrl}lesson/`, lesson, {});
  }

  getLessonByFileName(fileName): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}lesson/file/`, fileName);
  }

  getAllLessons(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}lesson/files`);
  }

  getRecentLesson(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}lesson/recent`);
  }

  deleteLessonById(fileId): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}lesson/file/del/`, fileId);
  }

  downloadLessonById(filename): Observable<any> {
    return this.http.post<Blob>(`${this.baseUrl}lesson/download/file`, filename, {});
    
  }
}
