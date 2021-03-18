import { questionDto } from './questionDto';

export class quizDto {
  id: string;
  creator: string;
  quizName: string;
  questions: questionDto[];  
}
