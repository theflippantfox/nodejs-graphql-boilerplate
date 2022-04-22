import { makeExecutableSchema } from '@graphql-tools/schema'
import path from 'path'
import fs from 'fs'

import { resolvers } from './resolvers'

const schemaFile = fs.readFileSync(path.join(__dirname, '../graphql/schema.graphql')).toString('utf-8')

export const schema = makeExecutableSchema(
  {
    typeDefs: schemaFile,
    resolvers,
  },
)
