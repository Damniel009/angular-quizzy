import { Component, OnInit } from '@angular/core';
import { ResultService } from '../services/result.service';
import { TreeNode } from 'primeng/api';
import { resultDto } from '../dtos/resultDto';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  results: TreeNode<resultDto>[];
  quizzes: any = [];
  cols: any[];

  constructor(private resultService: ResultService) {}

  ngOnInit(): void {
    this.resultService.getStudentNotes().subscribe((res) => {
      this.results = res.result;
      this.quizzes = Array.from(this.extractQuizzes(res.result));

      this.formatData();
    });
    this.cols = [
      { field: 'quizId', header: 'Quiz ID' },
      { field: 'studentName', header: 'Student`s Name' },
      { field: 'note', header: 'Note' },
      // { field: 'date', header: 'Date' },
    ];
  }

  formatData() {
    let finalFormat = [];
    let formattedElement;
    this.quizzes.forEach((quizId) => {
      formattedElement = {
        data: {
          quizId: quizId,
          studentName: '',
          note: '',
        },
        children: [],
      };
      finalFormat.push(formattedElement);
    });
    this.results.forEach((result) => {
      let helper: any = result;
      finalFormat
        .find((element) => helper.quizId === element.data.quizId)
        .children.push({
          data: {
            quizId: '',
            studentName: helper.studentName, 
            note: Math.round(helper.note * 100) / 100,
          },
        });
    });

    this.results = finalFormat;
  }

  extractQuizzes(data) {
    let quizzes = [];
    data.forEach((result) => {
      quizzes.push(result.quizId);
    });
    return new Set(quizzes);
  }
}
