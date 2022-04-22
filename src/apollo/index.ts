import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { Request } from 'express'
import { schema } from '../graphql'
import { dataSources } from '../datasources'

const ApolloConfig: ApolloServerExpressConfig = {
  introspection: true,
  schema,
  context: ({ req }:{req: Request}) => {
    const x = 9
    return {
      req,
      dataSources,
    }
  },
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      endpoint: '/graphql',
      version: '1.0',
    }),
  ],
}

export const apolloServer = new ApolloServer(ApolloConfig)
