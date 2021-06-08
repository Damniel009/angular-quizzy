import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { questionDto } from '../../dtos/questionDto';

// import { QuizService } from '../services/test.service';
@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.css'],
})
export class CheckboxQuestionComponent implements OnInit {
  @Input() item: questionDto;

  question: string;
  options = [{ label: 'Option1', duplicate: false, answer: false }];

  // opt = ['Option1']

  @Output() savedQuestion = new EventEmitter<Object>();

  constructor(private quizService: QuizService) {}

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

  updateAnswers(question) {
    this.item.answers[question].answer = true;
  }

  saveQuestion() {
    let final = Object.assign(new questionDto(), {
      question: this.item.question,
      answers: this.item.answers,
      type: 'checkbox',
      collapsed: true,
      selectedOption: new Set(this.item.selectedOption),
    });
    this.savedQuestion.emit(final);
  }
}
