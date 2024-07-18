import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  host: 'db',
  user: 'user',
  database: 'todo',
  password: 'admin',
  port: 5432,
})

export default pool
