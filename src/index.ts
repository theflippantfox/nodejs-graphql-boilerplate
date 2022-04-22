import express from 'express'
import http from 'http'

import { PORT } from './configs'
import { apolloServer } from './apollo'

const ServerStart = async () => {
  const app = express()

  const httpServer = http.createServer(app)
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`)
  })
}

ServerStart()
