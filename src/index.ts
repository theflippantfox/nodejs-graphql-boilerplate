import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';

import { PORT } from './configs';
import { ApolloConfig } from './graphql';

const ServerStart = async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer(ApolloConfig);
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  httpServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
};

ServerStart();
