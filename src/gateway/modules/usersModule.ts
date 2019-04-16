import fetch from 'isomorphic-fetch'
import { GatewayContext } from '../contextFactory'
import { gql } from 'apollo-server-koa'
import { HttpLink } from 'apollo-link-http'
import { makeRemoteExecutableSchema } from 'graphql-tools'
import { Resolvers } from '../__generated_types/types'
import { userSchema } from '../../users/schema'

const link = new HttpLink({
    uri: 'http://localhost:4002/graphql',
    fetch
})

export const usersRemoteSchema = makeRemoteExecutableSchema({
    schema: userSchema,
    link
})

export const extendedTypeDefs = gql`
extend type User {
    book: Book!
}
`

export const extendedUserResolvers: Resolvers<GatewayContext> = {
    User: {
        book: {
            fragment: '... on User { bookId }',
            resolve: (user, _args, ctx) => ctx.loaders.books.load(user.bookId)
        }
    }
}