import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
const client = new Client({
  connectionString: process.env.POSTGRESQL_URL,
});
console.log(process.env.POSTGRESQL_URL);
async function createUserTable() {
  await client.connect();
  const res = await client.query(`
    CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
  console.log(res);
}

// createUserTable();
async function insertData() {
  try {
    await client.connect();
    const query =
      "insert into users (email,username,password) values ('varshithkumarsoma@gmail.com','varshithsoma','helloworld');";
    const res = await client.query(query);
    console.log("Insertion successful:", res);
  } catch (err) {
    console.log(err);
  }
}
// insertData();
async function getData() {
  try {
    await client.connect();
    const query = "SELECT * FROM users";
    const res = await client.query(query);
    console.log("data successful:", res);
  } catch (err) {
    console.log(err);
  }
}
getData();
