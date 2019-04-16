import { launchServer } from "./bookApp";

launchServer()
    .catch(err => {
        console.error('Error: \n', err)
        process.exit(1)
    })