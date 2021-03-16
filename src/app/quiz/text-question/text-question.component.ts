import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { questionDto } from '../../dtos/questionDto';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.css']
})
export class TextQuestionComponent implements OnInit {
  @Input() item: questionDto;
  @Output() savedQuestion = new EventEmitter<Object>();
  constructor() { }

  ngOnInit(): void {
  }

  saveQuestion() {
    let final = Object.assign(new questionDto(), {
      question: this.item.question,
      textAnswer: this.item.textAnswer,
      type: 'text',
      collapsed: true,
    });
    this.savedQuestion.emit(final);
  }

}
