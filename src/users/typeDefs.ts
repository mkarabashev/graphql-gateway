import { gql } from "apollo-server-koa";

export const userTypeDefs = gql`
type User {
    id: Int!
    name: String!
    books: [String!]!
}

type Query {
    getUser(id: Int!): User
}
`