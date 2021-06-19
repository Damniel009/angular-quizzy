import { Component, OnInit } from '@angular/core';
import { dashBoardDataDto } from '../dtos/dashBoardDataDto';
import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss'],
})
export class DashboardUserComponent implements OnInit {
  dashBoardData = new dashBoardDataDto();
  responsiveOptions;

  constructor(private showService: ShowService) {
    this.responsiveOptions = [
      {
        breakpoint: '1128px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '884px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '674px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.showService.getDashboardData().subscribe((res) => {
      this.formatResponse(res[0]);
    });
  }

  formatResponse(response) {
    Object.keys(response).forEach((key) => {
      this.dashBoardData[key] = response[key];
    });
  }
}
