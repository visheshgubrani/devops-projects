import { Router } from 'express'
import {
  getQuotes,
  getRandomQuote,
  healthCheck,
} from '../controllers/quotes.controller.js'

const router = Router()

router.route('/quotes').get(getQuotes)
router.route('/quote').get(getRandomQuote)
router.route('/status').get(healthCheck)

export { router as quotesRouter }
