import { intersectionWith } from 'lodash'
import { User } from './__generated_types/types'

const users: User[] = [
    {
        id: 1,
        name: 'Max',
        bookId: 1
    }, {
        id: 2,
        name: 'John',
        bookId: 2
    }
]

export const getUser = (id: number): User => users.find(user => user.id === id)
export const findUsers = (ids: number[]): User[] => intersectionWith(users, ids, (book, id) => book.id === id)
