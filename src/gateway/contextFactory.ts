import * as DataLoader from 'dataloader'
import { Book } from './__generated_types/types'
import { bookClient } from '../books/booksClient'

export const createContext = () => ({
    clients: {
        books: bookClient
    },
    loaders: {
        books: new DataLoader<number, Book>(async ids => {
            const books = await bookClient.findBooks(ids)

            const booksMap = books.reduce((map, book) => {
                map[book.id] = book
                return map
            }, <{ [key: string]: Book }>{})

            return ids.map(id => booksMap[id])
        })
    }
})

export type GatewayContext = ReturnType<typeof createContext>