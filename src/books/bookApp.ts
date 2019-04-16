import * as Koa from 'koa'
import { getRoutes } from './bookResourceGroup'

export const PORT = 4001

export const launchServer = async (): Promise<void> => {
    const app = new Koa()

    app.use(getRoutes())

    app.listen(PORT, () => console.info(`server listening on port ${PORT}`))

}