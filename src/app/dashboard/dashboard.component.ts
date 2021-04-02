import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  quizList = [];

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizService.getOwnQuizzes().subscribe((res) => {
      this.quizList = res.questions;
    });
  }

  deleteQuiz(quizId, index) {
    this.quizService.deleteQuiz(quizId);
    this.quizList.slice(index, 1);
  }

  takeQuiz(quizId, index) {
    this.quizService.getQuiz(quizId).subscribe((res) => {
      //dashboard/quiz/6059af77bca04f0e04dfdeeb
      //this.router.navigate(['quiz', res._id], {relativeTo: this.route})

      this.router.navigate(['quiz', res._id]);
    });
  }
}
