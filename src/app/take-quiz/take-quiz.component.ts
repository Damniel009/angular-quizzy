import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css'],
})
export class TakeQuizComponent implements OnInit {
  quizId: string = this.route.snapshot.paramMap.get('id');
  quiz;
  radios

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizService.getQuiz(this.quizId).subscribe((res) => {
      this.quiz = res.questions;
      console.log(this.quiz);
    });
  }
}
