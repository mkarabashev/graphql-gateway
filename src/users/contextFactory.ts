import { getUser, findUsers } from './repository'

export const createContext = () => ({
    users: {
        get: getUser,
        find: findUsers,
    }
})

export type UserContext = ReturnType<typeof createContext>