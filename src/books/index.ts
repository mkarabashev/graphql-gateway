import * as Koa from 'koa'
import { getRoutes } from './bookResourceGroup'

const PORT = 4001

const launchServer = async (): Promise<void> => {
    const app = new Koa()

    app.use(getRoutes())

    app.listen(PORT, () => console.info(`server listening on port ${PORT}`))
}

launchServer()
    .catch(err => {
        console.error('Error: \n', err)
        process.exit(1)
    })