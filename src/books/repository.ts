import { Book } from "./Book";
import { intersectionWith } from 'lodash'

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

export const getBook = (id: number): Book => books.find(book => book.id === id)
export const findBooks = (ids: number[]): Book[] => intersectionWith(books, ids, (book, id) => book.id === id)