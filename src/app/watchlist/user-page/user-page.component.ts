import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { userDataDto } from '../dtos/userDataDto';
import { userHistoryDto } from '../dtos/userHistoryDto';
import { userStatisticsDto } from '../dtos/userStatisticsDto';
import { UserDataService } from '../services/user-data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  @ViewChild('uploader') upload;
  fileToUpload: FormData = new FormData();
  image;

  userStatistics: userStatisticsDto = {
    showStatistics: {
      watching: 10,
      considering: 34,
      completed: 54,
      skipping: 36,
      total: 134,
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

  // userHistory: userHistoryDto = {
  //   showHistory: [
  //     {
  //       title: 'Game of Thrones',
  //       currentEpisode: 1,
  //       totalEpisodes: 2,
  //       id: 'string',
  //       editDate: '05.21.2021',
  //     },
  //     {
  //       title: 'Bones',
  //       currentEpisode: 1,
  //       totalEpisodes: 2,
  //       id: 'string',
  //       editDate: '05.13.2021',
  //     },
  //     {
  //       title: 'Dr. House',
  //       currentEpisode: 1,
  //       totalEpisodes: 2,
  //       id: 'string',
  //       editDate: '05.05.2021',
  //     },
  //   ],
  //   movieHistory: [
  //     {
  //       title: 'Shrek 2',
  //       currentEpisode: 1,
  //       totalEpisodes: 2,
  //       id: 'string',
  //       editDate: '05.05.2021',
  //     },
  //     {
  //       title: 'Dumb & Dumber',
  //       currentEpisode: 1,
  //       totalEpisodes: 2,
  //       id: 'string',
  //       editDate: '02.04.2021',
  //     },
  //     {
  //       title: 'Home Alone',
  //       currentEpisode: 1,
  //       totalEpisodes: 2,
  //       id: 'string',
  //       editDate: '23.03.2021',
  //     },
  //   ],
  // };

  responsiveOptions;

  userData: userDataDto;

  constructor(
    private userDataService: UserDataService,
    private messageService: MessageService
  ) {
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
    this.userDataService.getUserData().subscribe((res) => {
      let helperResponse: userDataDto = {
        userDescription: null,
        userFavorites: null,
        userHistory: null,
        userStatistics: {
          showStatistics: null,
          movieStatistics: null,
        },
      };

      res.forEach((element) => {
        Object.keys(element).forEach((key) => {
          if (key !== 'userStatistics') {
            helperResponse[key] = element[key];
          }
        });
      });

      res[2].userStatistics.forEach((element) => {
        Object.keys(element).forEach((key) => {
          helperResponse.userStatistics[key] = element[key];
        });
      });

      Object.keys(helperResponse.userStatistics).forEach((key) => {
        helperResponse.userStatistics[key].forEach((element) => {
          helperResponse.userStatistics[key] = element;
        });
      });

      this.userData = helperResponse;
      console.log(this.userData);
    });

    this.userDataService.getUserPicture().subscribe(
      (res) => {},
      (err) => {
        this.image = err.error.text;
      }
    );
  }

  onBasicUpload(event) {
    let file = event.files[0];
    this.fileToUpload.append('image', file);
    this.userDataService.editUserPicture(this.fileToUpload).subscribe((res) => {
      this.messageService.add({
        severity: 'info',
        summary: 'File Uploaded',
        detail: '',
      });
      this.userDataService.getUserPicture().subscribe(
        (res) => {},
        (err) => {
          this.image = err.error.text;
        }
      );
    });
    this.upload.clear();
  }

  calculateProgress(type, total) {
    return `${Math.ceil((type * 100) / total)}%`;
  }

  redirectToEntry(entryId) {}
}
