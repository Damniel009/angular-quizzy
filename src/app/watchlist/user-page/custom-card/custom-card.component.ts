import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {
  @Input() cardContent;
  @Input() isUserPage = false;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    // console.log(this.cardContent);
  }

  toggleFavorite(id) {
    
    this.userDataService.toggleFavorite(id).subscribe((res) => {
      // this.show.favorite = this.show.favorite === '1' ? '0' : '1';
    });
  }

  setPoster(img) {
    return `url(${img})`;
  }
}
