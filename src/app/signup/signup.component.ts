import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { signinDto } from '../dtos/signinDto';
import { signupDto } from '../dtos/signupDto';
import { userDto } from '../dtos/userDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  newUser: signupDto = {
    email: '',
    password: '',
    name: '',
  };

  loginData: signinDto = {
    email: '',
    password: '',
  };

  isLoginPage = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signupUser() {
    this.authService.signup(this.newUser)
  }

  loginUser() {
    this.authService.login(this.loginData)
  }
}
