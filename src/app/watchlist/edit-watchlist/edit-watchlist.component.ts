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

  statuses = ['Completed', 'Watching', 'Considering', 'Skipping']

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.show = this.config.data.show;
    console.log(this.show.favorite);
  }

  changeRating(value, id) {
    this.userDataService.editWatchlistRating(id, value).subscribe((res) => {
      this.show.rating = value;
    });
  }

  increaseProgress(id, value) {
    // console.log(id);

    this.userDataService.editWatchlistProgress(id, value).subscribe((res) => {
      this.show.episodesWatched = value;
    });
  }

  toggleFavorite(id) {
    this.userDataService.toggleFavorite(id).subscribe((res) => {
      this.show.favorite == '1' ? '1' : '0';
    });
  }
}
