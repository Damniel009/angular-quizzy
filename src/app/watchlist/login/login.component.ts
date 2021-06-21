import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { signupDto } from 'src/app/watchlist/dtos/signupDto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userDto = {
    email: 'daniel.lengyel99@gmail.com',
    password: 'Password123',
  };

  newUser: signupDto = {
    email: 'newuser@gmail.com',
    password: '123456',
    name: 'New User',
  };

  isLoginPage = true;
  isCaptcha = false;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  loginUser() {
    this.userService.login(this.userDto.email, this.userDto.password);
  }

  signupUser() {
    this.userService.signup(this.newUser).subscribe(
      (res) => {
        this.isLoginPage = true;
        this.messageService.add({
          severity: 'success',
          summary: `User ${this.newUser.name} was created successfully`,
          detail: '',
        });
      },
      (err) => {
        switch (err.status) {
          case 406: {
            this.messageService.add({
              severity: 'error',
              summary: 'Incorrect email format',
              detail: '',
            });
            break;
          }
          case 403: {
            this.messageService.add({
              severity: 'error',
              summary: 'Email already in use',
              detail: '',
            });
            break;
          }
          default: {
            this.messageService.add({
              severity: 'error',
              summary: 'Something went wrong',
              detail: '',
            });
            break;
          }
        }
      }
    );
  }

  verifyForm(value) {
    if (value) {
      return value ? false : true;
    } else {
      if (this.isLoginPage) {
        if (this.userDto.email && this.userDto.password) {
          return false;
        } else {
          return true;
        }
      } else {
        if (this.newUser.email && this.newUser.password && this.newUser.name) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}
