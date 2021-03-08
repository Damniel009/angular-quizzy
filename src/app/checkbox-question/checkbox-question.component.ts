import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.css'],
})
export class CheckboxQuestionComponent implements OnInit {
  question: any;
  options = [{ label: 'Option1', duplicate: false, answer: false }];

  @Output() savedQuestion = new EventEmitter<Object>();

  ngOnInit() {}

  addCheckbox() {
    this.options.push(
      Object.assign({
        label: `Option${this.options.length + 1}`,
        duplicate: false,
        answer: false
      })
    );
  }

  removeCheckbox(index) {
    this.options.splice(index, 1);
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

  updateAnswers(question){
    this.options[question].answer = true
  }

  saveQuestion(){
    let final = this.options
    this.savedQuestion.emit(final);
  }
}
