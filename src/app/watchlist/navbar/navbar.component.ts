import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  visibleSidebar5;
  searchType = null;
  items = [
    {
      label: 'Watchlist',
      icon: 'pi pi-fw pi-book',
      routerLink: ['/watchlist'],
    },
    {
      label: 'User',
      icon: 'pi pi-fw pi-user',
      routerLink: ['/dashboard'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
