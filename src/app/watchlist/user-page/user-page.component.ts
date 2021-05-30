import { Component, OnInit } from '@angular/core';
import { userHistoryDto } from '../dtos/userHistoryDto';
import { userStatisticsDto } from '../dtos/userStatisticsDto';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  userStatistics: userStatisticsDto = {
    showStatistics: {
      watching: 10,
      considering: 34,
      completed: 54,
      skipping: 36,
      total: 174,
      avarageScore: 3.4,
    },
    movieStatistics: {
      watching: 12,
      considering: 3,
      completed: 121,
      skipping: 33,
      total: 169,
      avarageScore: 4.1,
    },
  };

  userHistory: userHistoryDto = {
    showHistory: [
      {
        title: 'Game of Thrones',
        currentEpisode: 1,
        totalEpisodes: 2,
        id: 'string',
        editDate: '05.21.2021',
      },
      {
        title: 'Bones',
        currentEpisode: 1,
        totalEpisodes: 2,
        id: 'string',
        editDate: '05.13.2021',
      },
      {
        title: 'Dr. House',
        currentEpisode: 1,
        totalEpisodes: 2,
        id: 'string',
        editDate: '05.05.2021',
      },
    ],
    movieHistory: [
      {
        title: 'Shrek 2',
        currentEpisode: 1,
        totalEpisodes: 2,
        id: 'string',
        editDate: '05.05.2021',
      },
      {
        title: 'Dumb & Dumber',
        currentEpisode: 1,
        totalEpisodes: 2,
        id: 'string',
        editDate: '02.04.2021',
      },
      {
        title: 'Home Alone',
        currentEpisode: 1,
        totalEpisodes: 2,
        id: 'string',
        editDate: '23.03.2021',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  onBasicUpload(event) {
    console.log(event);
  }

  calculateProgress(type, total) {
    return `${Math.ceil((type * 100) / total)}%`;
  }

  redirectToEntry(entryId){
    
  }
}
