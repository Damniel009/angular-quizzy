import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { signupDto } from '../dtos/signupDto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: signupDto = {
    email: '',
    password: '',
    name: '',
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signupUser(){
    this.authService.signup(this.newUser).subscribe(res => {
      console.log(res);
      
    },
    err => {
      console.log(err);
    })
  }
}
