require("dotenv").config();
const express = require("express");
const app = express();
const { Pool } = require("pg");

const { generateRoomCode } = require("./utils/generateRoomCode");

// Connect to the database
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log(generateRoomCode(6));
