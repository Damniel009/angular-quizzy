import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
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

  responsiveOptions;
  products;

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
      // console.log(res)
    });

    this.userDataService.getUserPicture().subscribe(
      (res) => {},
      (err) => {
        this.image = err.error.text;
      }
    );

    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        title: 'Bamboo Watch',
        description: 'Product Description',
        poster:
          'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        year: '2001',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'nvklal433',
        title: 'Black Watch',
        description: 'Product Description',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        year: '2001',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        title: 'Blue Band',
        description: 'Product Description',
        poster:
          'https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        year: '2001',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
      },
      {
        id: '1003',
        code: '244wgerg2',
        title: 'Blue T-Shirt',
        description: 'Product Description',
        poster:
          'https://m.media-amazon.com/images/M/MV5BOGU0OWQyMjItYzA4Zi00MDFiLThiZWQtZmEyNWRiODAzYzNmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        year: '2001',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1004',
        code: 'h456wer53',
        title: 'Bracelet',
        description: 'Product Description',
        poster:
          '"https://m.media-amazon.com/images/M/MV5BZjEyMmUyYmYtNTAwYi00OWUwLWJlNzEtMDM2N2QxNzIwMTdjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        year: '2001',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
    ];
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
