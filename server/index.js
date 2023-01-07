const readExcelData = require("./excel");
const {
  createMySQLConnection,
  createMySQLTable,
  insertIntoMySQLTable,
} = require("./mysql");
const server = require('./server');


const main = () => {
  const port = 3000;

  // Read the data Excel file
  const rows = readExcelData("./data.xlsx");



  // Create MySQL connection
  const connection = createMySQLConnection();

  // Create MySQL table
  // createMySQLTable(connection);

  // Insert data into MySQL table
  //insertIntoMySQLTable(connection, rows);

  server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

  // End MySQL connection
  connection.end();
};

main();
