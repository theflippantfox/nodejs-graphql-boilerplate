import { ApolloServerExpressConfig } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { Request } from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import path from 'path';
import fs from 'fs';

import { resolvers } from './resolvers';

const schemaFile = fs.readFileSync(path.join(__dirname, '../graphql/schema.graphql')).toString('utf-8');

const schema = makeExecutableSchema(
  {
    typeDefs: schemaFile,
    resolvers,
  },
);

export const ApolloConfig: ApolloServerExpressConfig = {
  introspection: true,
  schema,
  context: ({ req }:{req: Request}) => ({
    req,
  }),
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      endpoint: '/graphql',
      version: '1.0',
    }),
  ],
};
