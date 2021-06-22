import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { statusDto } from '../dtos/statusDto';
import { watchlistDto } from '../dtos/watchlistDto';
import { EditWatchlistComponent } from '../edit-watchlist/edit-watchlist.component';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.scss'],
})
export class WatchlistPageComponent implements OnInit {
  selectedFilter: string[] = [];

  statusNumbers = new statusDto();

  shows: watchlistDto[] = [];
  selectedFilters = [];
  filteredShows = [];

  constructor(
    private dialogService: DialogService,
    private userDataService: UserDataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userDataService.getUserWatchlist().subscribe((res) => {
      this.formatResponse(res[0]);
    });
  }

  formatResponse(response) {
    let initialState = {};
    Object.keys(response).forEach((key) => {
      initialState[key] = response[key][0];
    });

    Object.keys(initialState).forEach((key) => {
      this.statusNumbers[key] = initialState[key].total;
      initialState[key].shows.forEach((show) => {
        show.isVisible = true;
        this.shows.push(show);
      });
    });
  }

  setStatus(showStatus) {
    let status = '';
    switch (showStatus) {
      case 'finished': {
        status = 'Finished';
        break;
      }
      case 'planned to watch': {
        status = 'Planned';
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
      case 'finished': {
        severity = 'info';
        break;
      }
      case 'planned to watch': {
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
      width: '50%',
      height: '70%',
      baseZIndex: 9999,
      dismissableMask: true,
    });
  }

  increaseProgress(id) {
    this.userDataService.editWatchlistProgress(id, 1).subscribe((res) => {
      this.shows.forEach((show) => {
        if (show.watchlistID === id) {
          show.episodesWatched++;
        }
      });
    });
  }

  changeRating(value, id) {
    this.userDataService.editWatchlistRating(id, value).subscribe((res) => {
      this.shows.forEach((show) => {
        if (show.watchlistID === id) {
          show.rating = value;
        }
      });
    });
  }

  filterResults(isAdded, filter) {
    if (isAdded) {
      this.selectedFilters.push(filter);
    } else {
      const index = this.selectedFilters.indexOf(filter);
      this.selectedFilters.splice(index, 1);
      this.shows.forEach((show) => {
        if (show.currentSituation === filter) {
          this.filteredShows.splice(
            this.filteredShows.indexOf(show.watchlistID)
          );
        }
      });
    }

    this.selectedFilters.forEach((filtexr) => {
      this.shows.forEach((show) => {
        if (!this.filteredShows.includes(show.watchlistID)) {
          if (show.currentSituation === filtexr) {
            show.isVisible = true;
            this.filteredShows.push(show.watchlistID);
          } else {
            show.isVisible = false;
          }
        }
      });
    });

    if (this.selectedFilters.length === 0) {
      this.shows.forEach((show) => {
        show.isVisible = true;
      });
    }
  }

  openShowPage(id, title) {
    const trimmedTitle = title.split(' ').join('');
    this.router.navigate(['/show', id, trimmedTitle]);
  }
}
