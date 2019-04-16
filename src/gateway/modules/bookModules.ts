import { gql, makeExecutableSchema } from 'apollo-server-koa'

const bookTypeDefs = gql`
type Book {
    id: Int!
    name: String!
}

type Query {
    getBook(id: Int!): Book
    findBooks(ids: [Int!]!): [Book!]!
}
`

export const bookSchema = makeExecutableSchema({
    typeDefs: bookTypeDefs
})