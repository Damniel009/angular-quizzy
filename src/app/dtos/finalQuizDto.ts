import { checkboxDto } from './checkboxDto'
import { questionDto } from './questionDto'

export class quizDto {
  questions: questionDto[];
  _id: string;
}
