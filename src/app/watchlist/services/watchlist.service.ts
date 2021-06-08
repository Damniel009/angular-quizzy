import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { userDataDto } from '../dtos/userDataDto';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  baseUrl = 'http://localhost/watchlist/';

  constructor(private http: HttpClient, private router: Router) {}

  // getUserData(): Observable<userDataDto[]> {
  //   return this.http.get<userDataDto[]>(`${this.baseUrl}user/userData?userID=`);
  // }

  
}
