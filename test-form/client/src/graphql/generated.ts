/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Answer = {
  __typename?: "Answer";
  questionId: Scalars["ID"]["output"];
  values: Array<Scalars["String"]["output"]>;
};

export type AnswerInput = {
  questionId: Scalars["ID"]["input"];
  values: Array<Scalars["String"]["input"]>;
};

export type Form = {
  __typename?: "Form";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  questions: Array<Question>;
  title: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createForm: Form;
  submitResponse: Response;
};

export type MutationCreateFormArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  questions?: InputMaybe<Array<QuestionInput>>;
  title: Scalars["String"]["input"];
};

export type MutationSubmitResponseArgs = {
  answers?: InputMaybe<Array<AnswerInput>>;
  formId: Scalars["ID"]["input"];
};

export type Query = {
  __typename?: "Query";
  form?: Maybe<Form>;
  forms: Array<Form>;
  responses: Array<Response>;
};

export type QueryFormArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryResponsesArgs = {
  formId: Scalars["ID"]["input"];
};

export type Question = {
  __typename?: "Question";
  id: Scalars["ID"]["output"];
  options?: Maybe<Array<Scalars["String"]["output"]>>;
  title: Scalars["String"]["output"];
  type: QuestionType;
};

export type QuestionInput = {
  options?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title: Scalars["String"]["input"];
  type: QuestionType;
};

export type QuestionType = "CHECKBOX" | "DATE" | "MULTIPLE_CHOICE" | "TEXT";

export type Response = {
  __typename?: "Response";
  answers: Array<Answer>;
  formId: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
};

export type CreateFormMutationVariables = Exact<{
  title: string;
  description?: string | null | undefined;
  questions?: Array<QuestionInput> | QuestionInput | null | undefined;
}>;

export type CreateFormMutation = { createForm: { id: string; title: string } };

export const CreateFormDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateForm" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "questions" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "QuestionInput" },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createForm" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "title" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "title" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "description" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "description" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "questions" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "questions" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateFormMutation, CreateFormMutationVariables>;
