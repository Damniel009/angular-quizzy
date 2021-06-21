import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ShowService } from '../services/show.service';
import { SearchService } from './search-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  keyword: string = this.route.snapshot.paramMap.get('keyword');
  type: string = this.route.snapshot.paramMap.get('type');

  searchResult;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchService.search.subscribe((res) => {
      if (res) {
        this.keyword = res.keyword;
        this.type = res.type;
      }
      this.showService.search(this.type, this.keyword).subscribe((res) => {
        this.searchResult = res[0].searchResults;
        console.log(this.searchResult);
      });
    });
  }

  redirectToEntry(id, title) {
    const trimmedTitle = title.split(' ').join('');
    this.router.navigate(['/show', id, trimmedTitle]);
  }
}
