import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SearchService } from '../search-result/search-service.service';
import { ShowService } from '../services/show.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private authListenerSubs: Subscription;
  isUserAuthenticated: boolean = false;
  role;

  visibleSidebar;

  searchType = null;
  searchKeyword = '';

  items: MenuItem[];
  options;

  constructor(
    private router: Router,
    private userService: UserService,
    private showService: ShowService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.showService.getMenuOptions().subscribe((res) => {
      this.options = res;
    });
    this.isUserAuthenticated = this.userService.getIsAuthenticated();
    this.role = this.userService.getRole();
    this.authListenerSubs = this.userService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.isUserAuthenticated = isAuth;
        this.role = this.userService.getRole();
        this.updateMenuVisibility();
      });
    this.items = [
      {
        label: 'Watchlist',
        icon: 'pi pi-fw pi-book',
        visible: this.isUserAuthenticated,
        routerLink: ['/watchlist'],
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        visible: this.isUserAuthenticated,
        routerLink: ['/user/self'],
      },
      {
        icon: 'pi pi-fw pi-sign-out',
        visible: this.isUserAuthenticated,
        command: (event) => {
          this.userService.logout();
        },
      },
      {
        label: 'Login',
        icon: 'pi pi-plus',
        routerLink: ['/login'],
        visible: !this.isUserAuthenticated,
      },
    ];
  }

  redirectToHome() {
    this.visibleSidebar = false;
    this.router.navigate(['home']);
  }

  updateMenuVisibility() {
    this.items = [
      {
        label: 'Watchlist',
        icon: 'pi pi-fw pi-book',
        visible: this.isUserAuthenticated,
        routerLink: ['/watchlist'],
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        visible: this.isUserAuthenticated,
        routerLink: ['/user/self'],
      },
      {
        icon: 'pi pi-fw pi-sign-out',
        visible: this.isUserAuthenticated,
        command: (event) => {
          this.userService.logout();
        },
      },
      {
        label: 'Login',
        icon: 'pi pi-plus',
        routerLink: ['/login'],
        visible: !this.isUserAuthenticated,
      },
    ];
  }

  redirectGenre(genre) {
    this.router.navigate(['search/result', 'genre', genre]);
    this.searchService.onNewSearch('genre', genre);
  }

  search() {
    this.router.navigate([
      'search/result',
      this.searchType,
      this.searchKeyword,
    ]);
    this.searchService.onNewSearch(this.searchType, this.searchKeyword);
  }
}
