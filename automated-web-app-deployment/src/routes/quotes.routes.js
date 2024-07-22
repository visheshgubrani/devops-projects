import { Router } from "express"
import { getQuotes, getRandomQuote } from "../controllers/quotes.controller.js"

const router = Router()

router.route("/quotes").get(getQuotes)
router.route("/quote").get(getRandomQuote)

export { router as quotesRouter }
