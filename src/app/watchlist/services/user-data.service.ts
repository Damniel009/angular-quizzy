import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { userDataDto } from '../dtos/userDataDto';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  baseUrl = 'http://localhost/watchlist/';

  constructor(private http: HttpClient, private router: Router) {}

  getUserData(): Observable<userDataDto[]> {
    return this.http.get<userDataDto[]>(`${this.baseUrl}user/userData?userID=`);
  }

  editUserPicture(picture: FormData): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}user/userData/editPicture`,
      picture
    );
  }

  getUserPicture(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}user/userData/image`);
  }

  getUserWatchlist(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}user/watchlist`);
  }

  editWatchlistProgress(id, value): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}user/watchlist/change/progress?watchlistID=${id}&toAdd=${value}`,
      {}
    );
  }

  editWatchlistRating(id, value): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}user/watchlist/change/rating?watchlistID=${id}&rating=${value}`,
      {}
    );
  }

  //user/watchlist/change/progress?watchlistID=8&toAdd=50
}
