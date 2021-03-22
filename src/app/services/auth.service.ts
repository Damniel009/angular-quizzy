import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { signupDto } from '../dtos/signupDto';
import { signinDto } from '../dtos/signinDto';
import { map, tap } from 'rxjs/operators';
import { userDto } from '../dtos/userDto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:8080/';

  private token: string;
  private isAuthenticated: boolean = false;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  signup(newUser: signupDto) {
    this.http.post(`${this.baseUrl}auth/signup`, newUser).subscribe((res) => {
      console.log(res);
    });
  }

  login(user: signinDto) {
    this.http
      .post<{ token: string }>(`${this.baseUrl}auth/login`, user)
      .subscribe((res) => {
        const token = res.token;
        this.token = token;
        if (token) {
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
        }
        this.router.navigate(['/dashboard']);
      });
  }

  getToken() {
    return this.token;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/signup']);
  }
}
