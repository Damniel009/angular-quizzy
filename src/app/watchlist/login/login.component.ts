import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userDto = {
    email: 'daniel.lengyel99@gmail.com',
    passw: 'Password123',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  loginUser() {
    this.userService.login(this.userDto.email, this.userDto.passw);
  }
}
