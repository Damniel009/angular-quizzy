import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  visibleSidebar;
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
      routerLink: ['/user'],
    },
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  redirectToHome(){
    this.visibleSidebar = false;
    this.router.navigate(['home'])
  }
}
