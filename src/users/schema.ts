import * as Koa from 'koa'
import { gql, makeExecutableSchema } from 'apollo-server-koa'
import { Resolvers } from './__generated_types/types'
import { UserContext } from './contextFactory'

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

export const userResolvers: Resolvers<UserContext> = {
    Query: {
        getUser: (_, args, ctx) => ctx.users.get(args.id)
    }
}

export const userSchema = makeExecutableSchema({
    typeDefs: userTypeDefs,
    resolvers: userResolvers
})