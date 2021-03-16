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
      },
      {
        label: 'Results',
        icon: 'pi pi-fw pi-users',
      },{
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
      },
    ];
  }
}
