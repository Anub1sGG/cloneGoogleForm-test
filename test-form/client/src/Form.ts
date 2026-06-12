import type { QuestionType } from "./graphql/generated";

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  options?: string[];
}

export interface Form {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}
