import { GatewayContext } from '../contextFactory'
import { gql, makeExecutableSchema } from 'apollo-server-koa'
import { Resolvers } from '../__generated_types/types'

const bookTypeDefs = gql`
type Book {
    id: Int!
    name: String!
}

type Query {
    getBook(id: Int!): Book
}
`

const bookResolvers: Resolvers<GatewayContext> = {
    Query: {
        getBook: (_, args, ctx) => ctx.clients.books.getBook(args.id)
    }
}

export const bookSchema = makeExecutableSchema({
    typeDefs: bookTypeDefs,
    resolvers: bookResolvers,
})