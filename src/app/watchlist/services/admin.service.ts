import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'http://localhost/watchlist/';

  constructor(private http: HttpClient) {}

  addShow(title, id): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}admin/add/show?title=${title}&id=${id}`,
      {}
    );
  }

  deleteShow(title): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}admin/remove/show?title=${title}`,
      {}
    );
  }

  refreshPopularity(): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}admin/refresh/popularity`, {});
  }

  refreshRatings(): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}admin/refresh/ratings`, {});
  }
}
