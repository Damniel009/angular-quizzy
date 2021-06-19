import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  baseUrl = 'http://localhost/watchlist/';

  constructor(private http: HttpClient, private router: Router) {}

  getDashboardData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}home`);
  }

  getMenuOptions(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}home/genres`);
  }
}
