import app from './app.js'
import createTable from './models/todo.model.js'

const port = 4080

app.listen(port, async () => {
  await createTable()
  console.log(`The Server is running on ${port}`)
})
