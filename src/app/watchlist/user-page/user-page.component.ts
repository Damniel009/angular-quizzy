import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selfUserId = localStorage.getItem('userId');
  userId: string =
    this.route.snapshot.paramMap.get('id') === 'self'
      ? ''
      : this.route.snapshot.paramMap.get('id') === this.selfUserId
      ? ''
      : this.route.snapshot.paramMap.get('id');

  fileToUpload: FormData = new FormData();
  image;

  responsiveOptions;

  userData: userDataDto;

  isBioEdit = false;

  constructor(
    private route: ActivatedRoute,
    private userDataService: UserDataService,
    private messageService: MessageService,
    private router: Router,
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
    this.userDataService.getUserData(this.userId).subscribe((res) => {
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
    });

    this.userDataService.getUserPicture(this.userId).subscribe(
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
      this.userDataService.getUserPicture(this.userId).subscribe(
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

  openShowPage(id, title) {
    const trimmedTitle = title.split(' ').join('');
    this.router.navigate(['/show', id, trimmedTitle]);
  }

  editBio(bio) {
    this.userDataService.editUserBio(bio).subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Bio updated',
        detail: '',
      });
      this.isBioEdit = false;
    });
  }
}
