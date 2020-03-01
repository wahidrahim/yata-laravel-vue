import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import todosRouter from './routes/todos'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('hello world')
})

export default app
