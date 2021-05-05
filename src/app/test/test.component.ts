import { Component, OnInit } from '@angular/core';

import { Car } from '../dtos/car';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  text2: string;

  constructor(private carService: TestService) {}

  ngOnInit() {
  }

  textChangeEvent(event){
    console.log(event);
    
    console.log(event.htmlValue.length);
    
  }
}
