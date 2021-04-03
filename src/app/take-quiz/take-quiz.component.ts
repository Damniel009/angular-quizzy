import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { testDto } from '../dtos/testDto';
import { testQuestion } from '../dtos/testQuestion';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css'],
})
export class TakeQuizComponent implements OnInit {
  quizId: string = this.route.snapshot.paramMap.get('id');
  quiz;
  answer = [];

  testAnswers: testQuestion[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizService.getQuiz(this.quizId).subscribe((res) => {
      this.quiz = res.questions;

      this.quiz.forEach((question) => {
        if (question.type === 'radio') {
          this.answer.push(question.answers);
        } else {
          this.answer.push();
        }
      });
    });
  }

  updateAnswers(i) {
    this.testAnswers[i] = {
      id: this.quiz[i]._id,
      answer: this.answer[i],
    };
  }

  finishQuiz(){
    let final = { questions: this.testAnswers };
  }
}
