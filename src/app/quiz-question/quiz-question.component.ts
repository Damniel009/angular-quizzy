import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
})
export class QuizQuestionComponent implements OnInit {
  @Input() item: string;
  @Input() index: number;
  @Output() savedQuestion = new EventEmitter<Object>();
  @Output() removedQuestion = new EventEmitter<Object>();

  question: any;
  notSaved: boolean = true;
  canBeEdited: boolean = false;

  finalQuestions;

  constructor() {}

  ngOnInit(): void {}

  addQuestionToForm(newQuestion) {
    this.finalQuestions = newQuestion;
  }

  saveQuestion() {
    this.notSaved = false;
    this.canBeEdited = true;

    let final = Object.assign({
      question: this.item,
      options: this.finalQuestions,
    });
    this.savedQuestion.emit(final);
  }

  removeQuestion(toBeRemoved){
    console.log(toBeRemoved);
    
    this.removedQuestion.emit(toBeRemoved);
  }

  editQuestion() {}
}
