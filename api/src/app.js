import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import todosRouter from './routes/todos'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/todos', todosRouter)

app.get('/ping', (req, res) => {
  res.send('pong!')
})


export default app
