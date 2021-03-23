import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quizList = []

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe(res => {
      console.log(res);
      this.quizList = res.questions;
    })
  }

  deleteQuiz(quizId){
    console.log(quizId);
    
    this.quizService.deleteQuiz(quizId)
  }

}
