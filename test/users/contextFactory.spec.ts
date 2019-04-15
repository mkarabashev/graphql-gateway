import { createContext } from 'vm'

describe('contextFactory', () => {
    it('should create the context for the app', () => {
        const ctx = createContext()
        expect(typeof ctx).toBe('object')
    })
})