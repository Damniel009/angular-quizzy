import { checkboxDto } from './checkboxDto'

export class questionDto {
  question: string;
  answers: checkboxDto[];
  textAnswer: string;
  type: string;
  collapsed: false;
}
