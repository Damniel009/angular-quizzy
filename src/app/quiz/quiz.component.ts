import { Component, OnInit } from '@angular/core';
import { questionDto } from './questionDto';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  columns;
  finalQuestions: questionDto[] = [];

  ngOnInit() {}

  // addQuestionToForm(newQuestion) {
  //   this.questions.push(newQuestion);
  //   console.log(this.questions);
  // }

  // removeQuestionFromForm(question){
  //   console.log(this.columns[question]);

  //   this.columns.splice(question, 1);
  //   console.log(this.columns);
  // }

  addColumn() {
    this.finalQuestions.push({
      question: '',
      answers: [{ label: 'Option1', duplicate: false, answer: false }],
      type: 'checkbox',
      collapsed: false,
    });
  }

  removeQuestion(columnToBeRemoved) {
    let index = this.columns.indexOf(columnToBeRemoved);
    this.columns.splice(index, 1);
    // console.log(index);

    // this.finalQuestions.filter((question) => {
    //     console.log(this.finalQuestions.indexOf(question));

    //   return index === this.columns.indexOf(question);
    // });

    //   this.finalQuestions.forEach((question) => {
    //     console.log(this.finalQuestions.indexOf(question));

    //    if(index === this.columns.indexOf(question)){

    //    }
    // });
  }

  addQuestionToForm(newQuestion: questionDto, index) {
    this.finalQuestions[index] = newQuestion
    console.log(this.finalQuestions);
  }
}
