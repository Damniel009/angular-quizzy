import { Component, OnInit } from '@angular/core';
// import { AuthService } from './watchlist/services/user.service';
import { UserService } from './watchlist/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'MySeriesWatchlist';

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.userService.autoLogin();
  }
}
