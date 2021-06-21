import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { iif } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-manage-entries',
  templateUrl: './manage-entries.component.html',
  styleUrls: ['./manage-entries.component.scss'],
})
export class ManageEntriesComponent implements OnInit {
  newEntryTitle = '';
  newEntryId = '';
  addOption: string = 'title';

  selectedOption = 'title';

  constructor(
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  addEntry() {
    this.adminService.addShow(this.newEntryTitle, this.newEntryId).subscribe(
      (res) => {
        this.newEntryTitle = '';
        this.newEntryId = '';
        this.messageService.add({
          severity: 'success',
          summary: 'Entry added',
          detail: '',
        });
      },
      (err) => {
        if (err.status === 501) {
          this.messageService.add({
            severity: 'error',
            summary: 'Entry is already in the database',
            detail: '',
          });
        }
      }
    );
  }

  refreshPopularity() {
    this.adminService.refreshPopularity().subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Popularity refreshed',
        detail: '',
      });
    });
  }

  refreshRatings() {
    this.adminService.refreshRatings().subscribe((res) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Ratings refreshed',
        detail: '',
      });
    });
  }
}
