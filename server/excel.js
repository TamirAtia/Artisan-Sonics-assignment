const xlsx = require('xlsx');
const moment = require('moment');

// convert the serial number excel back into a JavaScript Date object
const excelToDate = (excelDate) => {
  return new Date((excelDate - 25569) * 86400 * 1000);
}

const formatDateForMySQL = (date) => {
  return moment(date,"DD.MM.YYYY").format("YYYY-MM-DD");
}

// Reads the excel data file, converts the data to a JSON object, removes some unnecessary fields, rename the ID# and LMP date and time keys
const readExcelData = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  let rows = xlsx.utils.sheet_to_json(sheet);

  let fieldsToDelete = 2;
  rows.splice(rows.length - fieldsToDelete, fieldsToDelete);

  rows.forEach((item) => {
    item.ID = item["ID#"];
    item.LMP = item["LMP date and time"];
    let lmp = formatDateForMySQL(excelToDate(item.LMP));
    let dob = formatDateForMySQL(item.DOB);
    item.LMP = lmp;
    item.DOB = dob;
    delete item["ID#"];
    delete item["LMP date and time"];
  });
  return rows;
}

module.exports = readExcelData;
