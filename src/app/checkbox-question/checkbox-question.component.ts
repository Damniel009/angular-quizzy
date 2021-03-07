import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.css'],
})
export class CheckboxQuestionComponent implements OnInit {
  question: any;
  options = [{ label: 'Option1', duplicate: false }];

  ngOnInit() {}

  addCheckbox() {
    this.options.push(
      Object.assign({
        label: `Option${this.options.length + 1}`,
        duplicate: false,
      })
    );
  }

  removeCheckbox(index) {
    this.options.splice(index, 1);
  }

  checkDuplicate() {
    // console.log(this.options);
    let uniq = this.options.filter(
      (v, i, a) => a.findIndex((t) => t.label === v.label) != i
    );

    // if(uniq[0] && (this.options[this.options.length - 1] === uniq[0])){
    //   this.options[this.options.length - 1].duplicate = true;
    // }

    // let uniq = this.options.filter((option, index, all) => {
    //   all.findIndex((optionFromAll) => {
    //     optionFromAll.label === option.label;
    //   }) === index;
    // });
  }
}
