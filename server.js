import express from 'express'
import { APP_PORT } from './config/env'
import connect from './config/db'
import router from './routes'
import cors from 'cors'
import bodyParser from 'body-parser'
import errorHandler from './middleware/errorHandler'

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

app.use(errorHandler)
app.listen(APP_PORT, async () => {
    
    console.log(`Server running on ${APP_PORT}`)

    await connect()
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(`Error Database Connectig ${err}`))

})
