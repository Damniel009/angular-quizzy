import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  baseUrl = 'http://localhost/watchlist/';

  constructor(private http: HttpClient, private router: Router) {}

  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}user/userData?userID=`);
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
}
