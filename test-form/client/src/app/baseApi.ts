import { createApi } from "@reduxjs/toolkit/query/react";
import { request, ClientError } from "graphql-request";
import type {
  CreateFormMutation,
  CreateFormMutationVariables,
} from "../graphql/generated";
import { CreateFormDocument } from "../graphql/generated";

const baseUrl = "http://localhost:4000/graphql";

interface GraphQLArgs {
  document: any;
  variables?: Record<string, any>;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: async ({ document, variables }: GraphQLArgs) => {
    try {
      const result = await request(baseUrl, document, variables);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return {
          error: { status: error.response.status, data: error.response.errors },
        };
      }
      return {
        error: {
          status: 500,
          data: error instanceof Error ? error.message : "Unknown error",
        },
      };
    }
  },
  endpoints: (build) => ({
    createForm: build.mutation<CreateFormMutation, CreateFormMutationVariables>(
      {
        query: (variables) => ({
          document: CreateFormDocument,
          variables,
        }),
      },
    ),
  }),
});

export const { useCreateFormMutation } = api;
