const express = require("express");
const dotenv = require("dotenv");
const { createMySQLConnection } = require("./mysql");

dotenv.config();

// create MySQL connection
const connection = createMySQLConnection();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// fetch records from MySQL database
app.get("/api/records", async (req, res) => {
  const sql = "SELECT * FROM records";
  await connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }
    res.send(results);
  });
});

module.exports = app;
