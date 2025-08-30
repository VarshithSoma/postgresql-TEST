import { Client } from "pg";
import dotenv from "dotenv";
const client = new Client({
  user: "postgres",
  password: "password1234",
  host: "localhost",
  port: 5432,
  database: "tutorial",
});
// dotenv.config({ path: "../.env" });
// const client = new Client({
//   connectionString: process.env.POSTGRESQL_URL,
// });
// console.log(process.env.POSTGRESQL_URL);
client.connect();
async function createUserTable() {
  // await client.connect();
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
async function insertData(username: string, email: string, password: string) {
  try {
    // await client.connect();
    const query =
      "insert into Users (email,username,password) values ($1,$2,$3);";
    const values = [username, email, password];
    const res = await client.query(query, values);
    console.log("Insertion successful:", res);
  } catch (err) {
    console.log(err);
  }
}
insertData("username1", "test1@gmail.com", "password");
insertData("username2", "test2@gmail.com", "password");
insertData("username3", "test3@gmail.com", "password");
async function getData() {
  try {
    // await client.connect();
    const query = "SELECT * FROM users";
    const res = await client.query(query);
    console.log("data successful:", res.rows);
  } catch (err) {
    console.log(err);
  }
}
getData();
async function getByEmail(email: string) {
  try {
    const query = "SELECT * FROM users where email=$1";
    const values = [email];
    const res = await client.query(query, values);
    console.log(res.rows);
  } catch (err) {
    console.log(err);
  }
}
// getByEmail("varshithkumarsoma@gmail.com");
