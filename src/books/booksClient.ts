import * as fetch from 'isomorphic-fetch'
import { Book } from './Book'
import { PORT } from './bookApp'

const serializeIds = (ids: number[]): string => ids.join(',')

export const bookClient = {
    getBook: async (id: number): Promise<Book> =>
        fetch(`http://localhost:${PORT}/books/${id}`)
            .then(res => res.json()),
    findBooks: (ids: number[]): Promise<Book[]> =>
        fetch(`http://localhost:${PORT}/books?ids=${serializeIds(ids)}`)
            .then(res => res.json())
}