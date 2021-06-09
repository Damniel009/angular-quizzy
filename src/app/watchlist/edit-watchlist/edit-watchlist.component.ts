import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { watchlistDto } from '../dtos/watchlistDto';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-edit-watchlist',
  templateUrl: './edit-watchlist.component.html',
  styleUrls: ['./edit-watchlist.component.scss'],
})
export class EditWatchlistComponent implements OnInit {
  show: watchlistDto;

  changesToSave = {
    // status: this.show.currentSituation,

  }

  statuses = [
    { name: 'Completed', code: 'finished' },
    { name: 'Watching', code: 'watching' },
    { name: 'Considering', code: 'planned' },
    { name: 'Skipping', code: 'skipping' },
  ];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.show = this.config.data.show;
    console.log(this.show);
    this.changesToSave = {
      status: this.show.currentSituation,
      episode: this.show.episodesWatched,
      isFavorite: this.show.favorite,
      
    }
  }

  changeRating(value, id) {
    this.userDataService.editWatchlistRating(id, value).subscribe((res) => {
      this.show.rating = value;
    });
  }

  increaseProgress(id, value) {
    this.userDataService.editWatchlistProgress(id, value).subscribe((res) => {
      this.show.episodesWatched = value;
    });
  }

  toggleFavorite(id) {
    this.userDataService.toggleFavorite(id).subscribe((res) => {
      this.show.favorite = this.show.favorite === '1' ? '0' : '1';
    });
  }

  changeStatus(watchlistId, showId, value) {
    console.log(value);
    this.userDataService.editWatchlistStatus(watchlistId, showId, value).subscribe((res) => {
      this.show.currentSituation = value;
    });
  }
}
