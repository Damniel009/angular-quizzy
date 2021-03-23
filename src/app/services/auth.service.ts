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
  private tokenTimer: ReturnType<typeof setTimeout>;

  constructor(private http: HttpClient, private router: Router) {}

  signup(newUser: signupDto) {
    this.http
      .post(`${this.baseUrl}auth/signup`, newUser)
      .subscribe((res) => {});
  }

  login(user: signinDto) {
    this.http
      .post<{ token: string; expiresIn: number }>(
        `${this.baseUrl}auth/login`,
        user
      )
      .subscribe((res) => {
        const token = res.token;
        this.token = token;
        if (token) {
          const expiresIn = res.expiresIn;
          this.tokenTimer = setTimeout(() => {
            this.logout();
          }, expiresIn * 1000);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          this.setAuthTimer(expiresIn);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresIn * 1000);
          this.saveAuthData(token, expirationDate);

          this.router.navigate(['/dashboard']);
        }
      });
  }

  autoLogin() {
    const authData = this.getAuthData();
    if (!authData) {
      return;
    }
    const now = new Date();
    const expiresIn = authData.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authData.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
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
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData() {
    let token = localStorage.getItem('token');
    let expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }
}
