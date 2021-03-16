import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { questionDto } from '../../dtos/questionDto';

@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.css'],
})
export class CheckboxQuestionComponent implements OnInit {
  @Input() item: questionDto;

  question: string;
  options = [{ label: 'Option1', duplicate: false, answer: false }];

  @Output() savedQuestion = new EventEmitter<Object>();

  ngOnInit() {}

  addCheckbox() {
    let newQuestion = Object.assign({
      label: `Option${this.item.answers.length + 1}`,
      duplicate: false,
      answer: false,
    });
    this.item.answers.push(newQuestion);
  }

  removeCheckbox(index) {
    this.item.answers.splice(index, 1);
  }

  // checkDuplicate() {
  //   let uniq = this.options.filter(
  //     (v, i, a) => a.findIndex((t) => t.label === v.label) != i
  //   );

  //   console.log(this.options);

  //   if(uniq[0] && (this.options[this.options.length - 1] === uniq[0])){
  //     this.options[this.options.length - 1].duplicate = true;
  //   }

  //   let uniq = this.options.filter((option, index, all) => {
  //     all.findIndex((optionFromAll) => {
  //       optionFromAll.label === option.label;
  //     }) === index;
  //   });
  // }

  updateAnswers(question) {
    this.item.answers[question].answer = true;
  }

  saveQuestion() {
    let final = Object.assign(new questionDto(), {
      question: this.item.question,
      answers: this.item.answers,
      type: 'checkbox',
      collapsed: true,
      selectedOption: new Set(this.item.selectedOption)
    });
    this.savedQuestion.emit(final);
  }
}
