import fetch from 'isomorphic-fetch'
import { HttpLink } from 'apollo-link-http'
import { makeRemoteExecutableSchema } from 'graphql-tools'
import { userSchema } from '../../users/schema'

const link = new HttpLink({
    uri: 'http://localhost:4002/graphql',
    fetch
})

export const usersRemoteSchema = makeRemoteExecutableSchema({
    schema: userSchema,
    link
})