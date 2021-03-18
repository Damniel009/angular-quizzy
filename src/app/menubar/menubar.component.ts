import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Create',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['/quiz']
      },
      {
        label: 'Results',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/rezults']
      },{
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
      },
      {
        label: 'TEST',
        icon: 'pi pi-fw pi-sign-out',
        routerLink: ['/test']
      },
    ];
  }
}
