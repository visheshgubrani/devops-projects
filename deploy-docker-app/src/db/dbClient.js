import pg from 'pg'
import { readFile } from 'fs/promises'
import { join } from 'path'

const { Pool } = pg

const pool = new Pool({
  host: 'localhost',
  user: 'user',
  database: 'todos',
  password: 'admin',
  port: 5432,
})

const initDb = async () => {
  try {
    const client = await pool.connect()
    const sql = await readFile(join('src', 'models', 'todo.models.js'), 'utf-8')
    await client.query(sql)
    client.release()
    console.log('Table Created Successfully')
  } catch (error) {
    console.log('Error Creating Tables', error.stack)
  }
}

export { pool, initDb }
