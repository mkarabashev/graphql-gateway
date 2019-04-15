import { createContext, UserContext } from '../../src/users/contextFactory'
import { graphql } from 'graphql'
import { isResolverFn } from '../../src/typeGuards/ResolverFn'
import { userResolvers, userSchema } from '../../src/users/schema'

describe('schema', () => {
    let ctx: UserContext

    beforeEach(() => {
        ctx = createContext()
    })

    describe('resolvers', () => {
        it('should get users', async () => {
            expect(userResolvers.Query.getUser).toBeDefined()
            const resolver = userResolvers.Query.getUser
            const result = isResolverFn(resolver) && await resolver({}, { id: 1 }, ctx, undefined)
            expect(result.id).toBe(1)
        })
    })

    describe('schema', () => {
        it('should run without crashing', async () => {
            const introspectionQuery = 'query { __schema { types { name } } }'

            const res = await graphql({
                schema: userSchema,
                contextValue: ctx,
                source: introspectionQuery
            })

            expect(res.errors).toBeUndefined()
            expect(res.data).toBeDefined()
        })
    })
})