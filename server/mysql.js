const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();


// Create a MySQL connection and return the connection object
const createMySQLConnection = () => {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  connection.connect((err) => {
    if (err) throw err;
    //console.log("Connected to MySQL!");
  });
  return connection;
};

// Create a MySQL table
const createMySQLTable = (connection) => {
  const sql = `CREATE TABLE IF NOT EXISTS records (id BIGINT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), dob DATE, lmp DATE)`;
  connection.query(sql, (error) => {
    if (error) throw error;
    //console.log("MySQL table created successfully");
  });
};

// Insert the data file into MySQL table
const insertIntoMySQLTable = (connection, rows) => {
  rows.forEach((row) => {
    const sql = `INSERT INTO records (id, first_name, last_name, dob, lmp) VALUES (?, ?, ?, ?, ?)`;
    const values = [row.ID, row.First, row.Last, row.DOB, row.LMP];
    connection.query(sql, values, (error) => {
      if (error) throw error;
      console.log("Record inserted successfully");
    });
  });
};


module.exports = {
  createMySQLConnection,
  createMySQLTable,
  insertIntoMySQLTable,
};
