import { checkboxDto } from './checkboxDto'

export class questionDto {
  question: string;
  answers: checkboxDto[];
  type: string;
  collapsed: false;
}
