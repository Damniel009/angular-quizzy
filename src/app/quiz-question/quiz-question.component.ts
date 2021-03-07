import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
})
export class QuizQuestionComponent implements OnInit {
  @Input() item: string;

  public canBeEdited: Boolean;

  // @HostListener('document:click', ['$event'])
  // clickout(event) {
  //   if (this.eRef.nativeElement.contains(event.target)) {
  //     this.canBeEdited = true;
  //   } else {
  //     this.canBeEdited = false;
  //   }
  // }

  constructor(private eRef: ElementRef) {
    this.canBeEdited = false;
  }

  ngOnInit(): void {
  }
}
