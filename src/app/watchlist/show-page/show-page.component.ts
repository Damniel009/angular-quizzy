import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { entryInfoDto } from '../dtos/entryInfoDto';
import { entryPageDto } from '../dtos/entryPageDto';
import { entryReviewDto } from '../dtos/entryReviewDto';
import { watchlistDto } from '../dtos/watchlistDto';
import { EditWatchlistComponent } from '../edit-watchlist/edit-watchlist.component';
import { ShowService } from '../services/show.service';
import { UserDataService } from '../services/user-data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss'],
})
export class ShowPageComponent implements OnInit {
  showId: string = this.route.snapshot.paramMap.get('id');
  displayAddReview = false;
  showInfo = new entryPageDto();
  status;

  newReview = {
    rating: null,
    review: null,
  };

  userId = localStorage.getItem('userId');

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private userDataService: UserDataService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.showService.getShowInfo(this.showId).subscribe((res) => {
      this.showInfo.entryInfo = this.formatInfoResponse(res[0]);
      this.formatReviewResponse(res[1]);
    });
  }

  formatInfoResponse(response): entryInfoDto {
    let initialState = new entryInfoDto();
    Object.keys(response).forEach((key) => {
      initialState[key] = response[key];
    });
    return initialState;
  }

  formatReviewResponse(response) {
    this.showInfo.entryReview = [];
    Object.keys(response).forEach((key) => {
      if (response[key].length !== 0) {
        this.showInfo.entryReview = response[key];
      }
    });

    if (this.showInfo.entryReview.length !== 0) {
      this.showInfo.entryReview.forEach((review) => {
        this.userDataService.getUserData(review.userid).subscribe((res) => {
          review.username = res[0].userDescription.fullname;
        });
      });
    }
  }

  likeRating(reviewId) {
    this.showService.likeReview(reviewId).subscribe((res) => {
      let helper = this.showInfo.entryReview.find(
        (review) => review.reviewid === reviewId
      ).likecounter;
      let helperNumber = parseInt(helper) + 1;
      this.showInfo.entryReview.find(
        (review) => review.reviewid === reviewId
      ).likecounter = `${helperNumber}`;
    });
  }

  addReview(id) {
    this.displayAddReview = false;
    const rating = this.newReview.rating;
    const review = this.newReview.review;
    this.showService.addReview(id, rating, review).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Review added',
          detail: '',
        });
        this.showInfo.entryReview.push({
          reviewid: '',
          userid: this.userId,
          username: '',
          showid: '',
          rating: `${rating}`,
          review: `${review}`,
          likecounter: '0',
          timestamp: `${new Date()}`,
        });
      },
      (err) => {
        console.log(err);
      }
    );
    this.newReview = {
      rating: null,
      review: null,
    };
  }

  removeReview(id) {
    this.showService.removeReview(id).subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Review removed',
        detail: '',
      });
    });
  }

  verifyForm(field) {
    return field ? false : true;
  }

  addToWatchlist(showId, status) {
    this.userDataService
      .editWatchlistStatus('', showId, status)
      .subscribe((res) => {});
  }
}
