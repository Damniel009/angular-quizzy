import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  baseUrl = 'http://localhost:8080/';
 
  constructor(private http: HttpClient) {}

  getOwnNotes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}result/self/grades`);
  }

  getStudentNotes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}result/students/grades`);
  }
  
}
