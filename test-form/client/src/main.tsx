import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
// export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
// import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
// import { api } from '../app/baseApi';
// export type Maybe<T> = T | null;
// export type InputMaybe<T> = Maybe<T>;
// export type Scalars = {
//   ID: { input: string; output: string; }
//   String: { input: string; output: string; }
//   Boolean: { input: boolean; output: boolean; }
//   Int: { input: number; output: number; }
//   Float: { input: number; output: number; }
// };

// export type Answer = {
//   __typename?: 'Answer';
//   questionId: Scalars['ID']['output'];
//   values: Array<Scalars['String']['output']>;
// };

// export type AnswerInput = {
//   questionId: Scalars['ID']['input'];
//   values: Array<Scalars['String']['input']>;
// };

// export type Form = {
//   __typename?: 'Form';
//   description?: Maybe<Scalars['String']['output']>;
//   id: Scalars['ID']['output'];
//   questions: Array<Question>;
//   title: Scalars['String']['output'];
// };

// export type Mutation = {
//   __typename?: 'Mutation';
//   createForm: Form;
//   submitResponse: Response;
// };

// export type MutationCreateFormArgs = {
//   description?: InputMaybe<Scalars['String']['input']>;
//   questions?: InputMaybe<Array<QuestionInput>>;
//   title: Scalars['String']['input'];
// };

// export type MutationSubmitResponseArgs = {
//   answers?: InputMaybe<Array<AnswerInput>>;
//   formId: Scalars['ID']['input'];
// };

// export type Query = {
//   __typename?: 'Query';
//   form?: Maybe<Form>;
//   forms: Array<Form>;
//   responses: Array<Response>;
// };

// export type QueryFormArgs = {
//   id: Scalars['ID']['input'];
// };

// export type QueryResponsesArgs = {
//   formId: Scalars['ID']['input'];
// };

// export type Question = {
//   __typename?: 'Question';
//   id: Scalars['ID']['output'];
//   options?: Maybe<Array<Scalars['String']['output']>>;
//   title: Scalars['String']['output'];
//   type: QuestionType;
// };

// export type QuestionInput = {
//   options?: InputMaybe<Array<Scalars['String']['input']>>;
//   title: Scalars['String']['input'];
//   type: QuestionType;
// };

// export enum QuestionType {
//   Checkbox = 'CHECKBOX',
//   Date = 'DATE',
//   MultipleChoice = 'MULTIPLE_CHOICE',
//   Text = 'TEXT'
// }

// export type Response = {
//   __typename?: 'Response';
//   answers: Array<Answer>;
//   formId: Scalars['ID']['output'];
//   id: Scalars['ID']['output'];
// };

// export type QuestionInput = {
//   options?: Array<string> | null | undefined;
//   title: string;
//   type: QuestionType;
// };

// export type QuestionType =
//   | 'CHECKBOX'
//   | 'DATE'
//   | 'MULTIPLE_CHOICE'
//   | 'TEXT';

// export type CreateFormMutationVariables = Exact<{
//   title: string;
//   description?: string | null | undefined;
//   questions?: Array<QuestionInput> | QuestionInput | null | undefined;
// }>;

// export type CreateFormMutation = { createForm: { id: string, title: string } };

// export class TypedDocumentString<TResult, TVariables>
//   extends String
//   implements DocumentTypeDecoration<TResult, TVariables>
// {
//   __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
//   private value: string;
//   public __meta__?: Record<string, any> | undefined;

//   constructor(value: string, __meta__?: Record<string, any> | undefined) {
//     super(value);
//     this.value = value;
//     this.__meta__ = __meta__;
//   }

//   override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
//     return this.value;
//   }
// }

// export const CreateFormDocument = new TypedDocumentString(`
//     mutation CreateForm($title: String!, $description: String, $questions: [QuestionInput!]) {
//   createForm(title: $title, description: $description, questions: $questions) {
//     id
//     title
//   }
// }
//     `);

// const injectedRtkApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     CreateForm: build.mutation<CreateFormMutation, CreateFormMutationVariables>({
//       query: (variables) => ({ document: CreateFormDocument, variables })
//     }),
//   }),
// });

// export { injectedRtkApi as api };
// export const { useCreateFormMutation } = injectedRtkApi;
