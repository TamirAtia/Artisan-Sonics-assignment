# Artisan Sonics assignment

# Overview

This repository is a project that demonstrates control and familiarity with a database and various technologies such as SQL, Node.js, JavaScript, Angular, HTML, and CSS. The project calculates and displays the gestational age (in weeks and days) and age (in years and months) of a pregnant woman based on a given date of last menstrual period (LMP) or gestational age. The project also allows for searching for a woman by ID, first name, or last name, and displays a list of all records with empty search fields.

The project is implemented using MySQL for the database, Node.js and JavaScript for server-side logic, and Angular, HTML, and CSS for the frontend. The data is provided in an Excel file with 20 records, each containing the following fields: ID, first name, last name, date of birth, and date of LMP. The project involves the following steps:

1. Define a database using SQL and insert the data from the Excel file to SQL table.
2. Add two fields to each record: age in years and months, and gestational age in weeks and days.
3. Allow for searching for a woman by ID, first name, or last name.
4. Display a table of records on the screen with the following fields: ID, first name, last name, date of birth, gestational age in weeks and days, age in years and months, and date of LMP.
    
    

## Dependencies
Before you can run the project, you need to make sure you have the following dependencies installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/) 
- [Angular CLI](https://cli.angular.io/)


## Development environment setup
1. Clone the repository to your local machine:
```bash
git clone https://github.com/TamirAtia/Artisan-Sonics-assignment.git
```
2. Navigate to the project directory:
```bash
cd artisansonics
```
## Setting up and running the server
1. Navigate to the server folder:
```bash
cd server
```
2. Create an .env file with the following fields for example:
```bash
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=qwerty
MYSQL_DATABASE=test
```
3. Install the necessary dependencies by running the following command:
```bash
npm install
```
4. Run the server by using the following command:
```bash
node index.js
```
This will start the server and listen for incoming requests on the port 3000.

## Setting up and running the client



1. Navigate to the `client` folder:

```bash
cd client
```
2. Install the necessary dependencies by running the following command:
```bash
npm install
```
3.Run the client by using the following command:
```bash
ng serve
```
This will start the client and listen on port 4200.
