import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { userDto } from '../dtos/userDto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit, OnDestroy {
  private usersub: Subscription;

  items: MenuItem[];

  private authListenerSubs: Subscription;
  isUserAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isUserAuthenticated = this.authService.getIsAuthenticated();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        this.isUserAuthenticated = isAuth;
        this.updateMenuVisibility();
      });

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        visible: this.isUserAuthenticated,
        routerLink: ['/dashboard'],
      },
      {
        label: 'Create',
        icon: 'pi pi-fw pi-pencil',
        visible: this.isUserAuthenticated,
        routerLink: ['/quiz'],
      },
      {
        label: 'Results',
        icon: 'pi pi-fw pi-users',
        visible: this.isUserAuthenticated,
        routerLink: ['/rezults'],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        visible: this.isUserAuthenticated,
        command: (event) => {
          this.authService.logout();
        },
      },
      // {
      //   label: 'TEST',
      //   icon: 'pi pi-fw pi-sign-out',
      //   routerLink: ['/test']
      // },
      {
        label: 'Signup',
        icon: 'pi pi-plus',
        routerLink: ['/signup'],
        visible: !this.isUserAuthenticated,
      },
    ];
  }

  updateMenuVisibility() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        visible: this.isUserAuthenticated,
        routerLink: ['/dashboard'],
      },
      {
        label: 'Create',
        icon: 'pi pi-fw pi-pencil',
        visible: this.isUserAuthenticated,
        routerLink: ['/quiz'],
      },
      {
        label: 'Results',
        icon: 'pi pi-fw pi-users',
        visible: this.isUserAuthenticated,
        routerLink: ['/rezults'],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        visible: this.isUserAuthenticated,
        command: (event) => {
          this.authService.logout();
        },
      },
      // {
      //   label: 'TEST',
      //   icon: 'pi pi-fw pi-sign-out',
      //   routerLink: ['/test']
      // },
      {
        label: 'Signup',
        icon: 'pi pi-plus',
        routerLink: ['/signup'],
        visible: !this.isUserAuthenticated,
      },
    ];
  }

  ngOnDestroy() {
    this.usersub.unsubscribe();
  }
}
