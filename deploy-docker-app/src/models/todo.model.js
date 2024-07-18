import pool from '../db/dbClient.js'

const createTable = async () => {
  const queryText = `
  create table if not exists todos (
  id serial primary key,
  name varchar(255) not null,
  completed boolean default false
  ); `

  const client = await pool.connect()
  try {
    await client.query(queryText)
    console.log('User Table Created')
    client.release()
  } catch (error) {
    console.log(`Db Connection error ${error}`)
    client.release()
  }
}

export default createTable
