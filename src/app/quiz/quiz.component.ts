import { Component, OnInit } from '@angular/core';
import { quizDto } from './quizDto'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  columns;
  questions = [];

  ngOnInit() {
    this.columns = [
      {
        questionPlaceholder: '',
        type: 'checkbox',
        collapsed: false
      }
    ];
  }

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
    this.columns.push({
      questionPlaceholder: '',
      type: 'checkbox',
      collapsed: false,
    });
  }

  finalQuestions: quizDto[] = [];

  addQuestionToForm(newQuestion: quizDto) {
    this.finalQuestions.push(newQuestion);
    let index = this.finalQuestions.indexOf(newQuestion);
    this.columns[index].collapsed = true
  }

  // removeColumn() {
  //   this.columns.splice(-1, 1);
  // }
}
