import { getUser } from './repository'

export const createContext = () => ({
    users: {
        get: getUser
    }
})

export type UserContext = ReturnType<typeof createContext>