import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { join } from "path";
import crypto from "crypto";

const typeDefs = readFileSync(join(__dirname, "schema.graphql"), "utf-8");

const forms: any[] = [];
const responses: any[] = [];

const resolvers = {
  Query: {
    forms: () => forms,
    form: (_: any, { id }: { id: string }) => forms.find((f) => f.id === id),
    responses: (_: any, { formId }: { formId: string }) =>
      responses.filter((r) => r.formId === formId),
  },
  Mutation: {
    createForm: (_: any, { title, description, questions }: any) => {
      const newForm = {
        id: crypto.randomUUID(),
        title,
        description,
        questions: (questions || []).map((q: any) => ({
          id: crypto.randomUUID(),
          ...q,
        })),
      };
      forms.push(newForm);
      return newForm;
    },
    submitResponse: (_: any, { formId, answers }: any) => {
      const formExists = forms.some((f) => f.id === formId);
      if (!formExists) {
        throw new Error("Form not found");
      }

      const newResponse = {
        id: crypto.randomUUID(),
        formId,
        answers,
      };
      responses.push(newResponse);
      return newResponse;
    },
  },
};

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(` Server ready at ${url}`);
}

startServer();
