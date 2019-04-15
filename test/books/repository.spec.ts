import { findBooks, getBook } from '../../src/books/repository'

describe('repository', () => {
    it('should get a book for an id', () => {
        const book = getBook(1)
        expect(book.id).toBe(1)
        expect(typeof book.name).toBe('string')
    })

    it('should find books for the given ids', () => {
        const books = findBooks([1, 2])
        expect(books.map(book => book.id)).toEqual([1, 2])
    })
})