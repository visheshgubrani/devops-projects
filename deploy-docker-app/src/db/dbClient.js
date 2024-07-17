import pg from "pg"
const { Pool } = pg

const pool = new Pool({
  host: "localhost",
  user: "user",
  database: "todos",
  password: "admin",
  port: 5432,
})

export default pool
