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

  getShowInfo(id): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}show/info/${id}`);
  }

  likeReview(id): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}show/info/like/review?reviewID=${id}`
    );
  }

  addReview(showId, rating, review): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}show/info/add/review?review=${review}&showID=${showId}&rating=${rating}`,
      {}
    );
  }

  removeReview(id): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}admin/remove/review?reviewID=${id}`
    );
  }
}
