import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search = new BehaviorSubject(null);
  data = this.search.asObservable();

  onNewSearch(type, keyword) {
    this.search.next({
      type: type,
      keyword: keyword,
    });
  }
  constructor() {}
}
