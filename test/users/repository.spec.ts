import { getUser } from '../../src/users/repository'

describe('repository', () => {
    it('should get a user for a given id', () => {
        const user = getUser(1)
        expect(user.id).toBe(1)
        expect(typeof user.name).toBe('string')
        expect(user.bookId).toBe(true)
    })
})