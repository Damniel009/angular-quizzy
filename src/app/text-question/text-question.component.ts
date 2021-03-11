import { Component, OnInit, Input } from '@angular/core';
import { questionDto } from '../quiz/questionDto';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.css']
})
export class TextQuestionComponent implements OnInit {
  // @Input() item: questionDto;
  constructor() { }

  ngOnInit(): void {
  }

}
