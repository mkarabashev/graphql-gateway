import * as Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { createContext } from './contextFactory'
import { gatewaySchema } from './schema'

const PORT = 4003

const addGraphQLServer = (app: Koa): void => {
    const server = new ApolloServer({
        schema: gatewaySchema,
        context: () => {
            return createContext()
        }
    })

    server.applyMiddleware({ app })
}

const launchServer = async (): Promise<void> => {
    const app = new Koa()

    addGraphQLServer(app)

    app.listen(PORT, () => console.info(`server listening on port ${PORT}`))
}

launchServer()
    .catch(err => {
        console.error('Error: \n', err)
        process.exit(1)
    })