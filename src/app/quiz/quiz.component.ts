import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  columns: string[];
  questions = [];

  ngOnInit() {
    this.columns = ['asd'];
  }

  addQuestionToForm(newQuestion) {
    this.questions.push(newQuestion);
    console.log(this.questions);
  }

  removeQuestionFromForm(question){
    console.log(this.columns[question]);
    
    this.columns.splice(question, 1);
    console.log(this.columns);
  }

  addColumn() {
    this.columns.push('');
    // this.columns.forEach(element => {console.log(this.columns.indexOf(element))})
      
    
  }

  // removeColumn() {
  //   this.columns.splice(-1, 1);
  // }
}
