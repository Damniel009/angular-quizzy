import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost/watchlist/';

  private token: string;
  private isAuthenticated: boolean = false;
  private authStatusListener = new Subject<boolean>();
  private role: string;

  constructor(private http: HttpClient, private router: Router) {}

  signup(newUser) {
    this.http
      .post(`${this.baseUrl}auth/signup`, newUser)
      .subscribe((res) => {});
  }

  login(email, passw) {
    this.http
      .post<any>(
        `${this.baseUrl}auth/login?email=${email}&password=${passw}`,
        null
      )
      .subscribe((res) => {
        const token = res[0].token;
        this.token = token;
        if (token) {
          this.isAuthenticated = true;
          this.role = res[0].role;
          this.authStatusListener.next(true);
          this.saveAuthData(token, this.role);
          this.router.navigate(['/home']);
        }
      });
  }

  autoLogin() {
    const authData = this.getAuthData();
    if (!authData) {
      return;
    }
    this.token = authData.token;
    this.role = authData.role;
    this.isAuthenticated = true;
    this.authStatusListener.next(true);
  }

  getToken() {
    return this.token;
  }

  getRole() {
    return this.role;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  logout() {
    this.token = null;
    this.role = null;
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
  }

  private saveAuthData(token: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  private getAuthData() {
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');
    if (!token) {
      return;
    }
    return {
      token: token,
      role: role,
    };
  }
}
