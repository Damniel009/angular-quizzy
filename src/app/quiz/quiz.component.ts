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

  items = [
    {
      label: 'Checkbox',
      icon: 'pi pi-fw pi-check-square',
      command: () => {
        this.addCheckbox();
      }
    },
    {
      label: 'Radiobutton',
      icon: 'pi pi-fw pi-check-circle',
      command: () => {
        this.addRadiobutton();
      }
    },
    {
      label: 'Textarea',
      icon: 'pi pi-fw pi-check-square',
      command: () => {
        this.addTextarea();
      }
    }
  ];

  ngOnInit() {}

  addCheckbox() {
    this.finalQuestions.push({
      question: '',
      answers: [{ label: 'Option1', duplicate: false, answer: false }],
      textAnswer: undefined,
      type: 'checkbox',
      collapsed: false,
    });
  }

  addRadiobutton() {
    this.finalQuestions.push({
      question: '',
      answers: [{ label: 'Option1', duplicate: false, answer: false }],
      textAnswer: undefined,
      type: 'radio',
      collapsed: false,
    });
  }

  addTextarea(){
    this.finalQuestions.push({
      question: '',
      answers: undefined,
      textAnswer: '',
      type: 'text',
      collapsed: false,
    });
  }

  removeQuestion(columnToBeRemoved) {
    let index = this.finalQuestions.indexOf(columnToBeRemoved);
    this.finalQuestions.splice(index, 1);
    console.log(this.finalQuestions);
  }

  addQuestionToForm(newQuestion: questionDto, index) {
    this.finalQuestions[index] = newQuestion;
    console.log(this.finalQuestions);
  }

  finishQuiz(){
    
  }
}
