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

  newUser = {
    email: '',
    password: '',
    name: '',
  };

  isLoginPage = true;
  isCaptcha = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  loginUser() {
    this.userService.login(this.userDto.email, this.userDto.passw);
  }

  showResponse(event) {
    
    // this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
  }
}
