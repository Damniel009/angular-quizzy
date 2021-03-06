import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { questionDto } from '../../dtos/questionDto';

@Component({
  selector: 'app-radio-question',
  templateUrl: './radio-question.component.html',
  styleUrls: ['./radio-question.component.css'],
})
export class RadioQuestionComponent implements OnInit {
  @Input() item: questionDto;
  @Output() savedQuestion = new EventEmitter<Object>();

  radios: any;

  constructor() {}

  ngOnInit(): void {}

  removeRadio(index) {
    this.item.answers.splice(index, 1);
  }

  updateAnswers(radioIndex) {
    this.item.answers.forEach((answer, index) => {
      if (this.item.answers[radioIndex] === answer) {
        this.item.answers[index].answer = true;
      } else {
        this.item.answers[index].answer = false;
      }
    });
  }

  addRadio() {
    let newQuestion = Object.assign({
      label: `Option${this.item.answers.length + 1}`,
      duplicate: false,
      answer: false,
    });
    this.item.answers.push(newQuestion);
    this.radios = this.item.answers;
  }

  saveQuestion() {
    let final = Object.assign(new questionDto(), {
      question: this.item.question,
      answers: this.item.answers,
      type: 'radio',
      collapsed: true,
      selectedOption: this.item.selectedOption,
    });
    this.savedQuestion.emit(final);
  }
}
