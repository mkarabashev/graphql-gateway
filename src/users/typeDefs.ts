import { gql } from 'apollo-server-koa'

export const userTypeDefs = gql`
type User {
    id: Int!
    name: String!
    bookIds: [Int!]!
}

type Query {
    getUser(id: Int!): User
}
`