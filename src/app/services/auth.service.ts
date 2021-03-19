import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signupDto } from '../dtos/signupDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  signup(newUser: signupDto): Observable<any>{
    return this.http.post<any>(
      `${this.baseUrl}auth/signup`, newUser
    )
  }
}
