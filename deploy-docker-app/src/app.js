import express from 'express'
import todoRouter from './routes/todo.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Routes
app.use('/api/v1/todos', todoRouter)

export default app
