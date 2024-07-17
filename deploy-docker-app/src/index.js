import app from './app.js'
import { initDb } from './db/dbClient.js'

const port = 4080

initDb()

app.listen(port, () => {
  console.log(`The Server is running on port: ${port}`)
})
