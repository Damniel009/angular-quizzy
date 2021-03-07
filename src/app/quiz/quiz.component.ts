import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  columns: number[];

  ngOnInit() {
    this.columns = [0];
  }

  addColumn() {
    this.columns.push(this.columns.length);
  }

  removeColumn() {
    this.columns.splice(-1, 1);
  }
}
