import { bookSchema } from './modules/bookModules'
import { mergeSchemas } from 'graphql-tools'
import { usersRemoteSchema, extendedTypeDefs as extendedUserTypeDefs, extendedUserResolvers } from './modules/usersModule'

export const gatewaySchema = mergeSchemas({
    schemas: [
        bookSchema,
        usersRemoteSchema,
        extendedUserTypeDefs,
    ],
    resolvers: [
        extendedUserResolvers
    ]
})