import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { watchlistDto } from '../dtos/watchlistDto';
import { EditWatchlistComponent } from '../edit-watchlist/edit-watchlist.component';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.scss'],
})
export class WatchlistPageComponent implements OnInit {
  selectedFilter: string[] = [];

  numberCompleted = '972';
  numberWatching = '8';
  numberConsidering = '53';
  numberSkipping = '1834';

  shows: watchlistDto[] = [
    {
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      title: 'Shrek 2',
      status: 'watching',
      totalEpisodes: null,
      currentEpisode: null,
      rating: null,
    },
    {
      poster:
        'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      title: 'Shrek',
      status: 'completed',
      totalEpisodes: null,
      currentEpisode: 1,
      rating: null,
    },
    {
      poster:
        'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      title: 'Shrek 3',
      status: 'considering',
      totalEpisodes: null,
      currentEpisode: null,
      rating: null,
    },
  ];

  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {}

  setStatus(showStatus) {
    let status = '';
    switch (showStatus) {
      case 'completed': {
        status = 'Completed';
        break;
      }
      case 'considering': {
        status = 'Considering';
        break;
      }
      case 'watching': {
        status = 'Watching';
        break;
      }
      case 'skipping': {
        status = 'Skipping';
        break;
      }
    }
    return status;
  }

  setStatusColor(showStatus) {
    let severity = '';
    switch (showStatus) {
      case 'completed': {
        severity = 'info';
        break;
      }
      case 'considering': {
        severity = 'warning';
        break;
      }
      case 'watching': {
        severity = 'success';
        break;
      }
      case 'skipping': {
        severity = 'danger';
        break;
      }
    }
    return severity;
  }

  openWatchlistElementDetail(show) {
    const ref = this.dialogService.open(EditWatchlistComponent, {
      data: {
        show: show,
      },
      header: `Edit ${show.title}`,
      width: '70%',
      dismissableMask: true
    });
  }
}
