import { Router } from 'express'
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from '../controllers/todo.controller.js'

const router = Router()

router.route('/').get(getTodo).post(createTodo)
router.route('/id').patch(updateTodo).delete(deleteTodo)

export default router
