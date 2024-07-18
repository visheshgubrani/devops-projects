import pool from '../db/dbClient.js'
import asyncHandler from '../utils/asyncHandler.js'

const createTodo = asyncHandler(async (req, res) => {
  const { name } = req.body
  if (!name) {
    throw new Error('Todo Name Required')
  }
  const result = await pool.query(
    'insert into todos (name) values ($1) returning *',
    [name]
  )
  return res.status(201).json(result.rows[0])
})

const getTodo = asyncHandler(async (req, res) => {
  const result = await pool.query('select * from todos order by id')
  return res.status(200).json(result.rows)
})

const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ message: 'Todo ID is required' })
  }
  const { name } = req.body
  if (!name) {
    throw new Error('Enter the name to update the todo')
  }

  const result = await pool.query(
    'update todos set name = $1 where id = $2 returning *',
    [name, id]
  )

  return res.status(200).json(result.rows[0])
})

const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.body
  if (!id) {
    return res.status(400).json({ message: 'Todo Id is required' })
  }

  await pool.query('delete from todos where id = $1 returning *', [id])

  return res.status(200).json({ message: 'Todo Deleted' })
})

export { createTodo, getTodo, updateTodo, deleteTodo }
