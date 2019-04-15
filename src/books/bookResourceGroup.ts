import * as Router from 'koa-router'
import { findBooks, getBook } from './repository'

const deserializeIds = (idsString: string): number[] => idsString.split(',').map(Number)

export const getRoutes = (): ReturnType<Router['routes']> => {
    const router = new Router

    router.get('/books', ctx => {
        const ids = deserializeIds(ctx.query.ids)
        ctx.body = findBooks(ids)
        ctx.status = 200
    })

    router.get('/books/:id', ctx => {
        const id = Number(ctx.params.id)
        ctx.body = getBook(id)
        ctx.status = 200
    })

    return router.routes()
}