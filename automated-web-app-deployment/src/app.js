import express from "express"
import cors from "cors"
import { quotesRouter } from "./routes/quotes.routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send("Server Error!!")
})

// Routes
app.use("/", quotesRouter)

export default app
