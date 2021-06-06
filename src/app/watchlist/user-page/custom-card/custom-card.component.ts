import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {
  @Input() cardContent;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cardContent);
    
  }

  toggleBookmark(entryId){

  }

  setPoster(img){
    return `url(${img})`
  }

}
