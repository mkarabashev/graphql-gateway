import { User } from './__generated_types/types'

const users: User[] = [
    {
        id: 1,
        name: 'Max',
        bookIds: [1, 2, 3]
    }
]

export const getUser = (id: number): User => users.find(user => user.id === id)