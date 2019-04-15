import { Book } from "./Book";

const books: Book[] = [
    {
        id: 1,
        name: 'The Odyssey',
    }, {
        id: 2,
        name: 'The Tempest',
    }, {
        id: 3,
        name: 'Perdido Street Station',
    }
]

export const getBook = (id: number): Book => null
export const findBooks = (ids: number[]): Book[] => null