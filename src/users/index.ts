import * as Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { createContext, UserContext } from './contextFactory'
import { userSchema } from './schema'

const PORT = 4002

const addGraphQLServer = (app: Koa): void => {
    const server = new ApolloServer({
        schema: userSchema,
        context: (): UserContext => {
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