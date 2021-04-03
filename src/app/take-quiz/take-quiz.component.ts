import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { testQuestion } from '../dtos/testQuestion';
import { QuizService } from '../services/quiz.service';
import { MessageService } from 'primeng/api';

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
    private quizService: QuizService,
    private messageService: MessageService,
    private router: Router
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
      answers: this.answer[i],
    };
  }

  finishQuiz() {
    let final = {
      quizId: this.quizId,
      quizAnswers: this.testAnswers,
    };
    this.quizService.takeQuiz(final).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Test taken successfully',
        });
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
        });
      }
    );
    this.router.navigate(['/dashboard']);
  }
}
