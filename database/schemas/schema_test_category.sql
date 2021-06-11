DROP DATABASE IF EXISTS testdb;

CREATE DATABASE testdb;

USE testdb;

DROP TABLE IF EXISTS category

CREATE TABLE category (
  id INT(11) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  created_at DATE
);


/*
LOAD DATA LOCAL INFILE
1. show global variables like 'local_infile';
2. SET GLOBAL local_infile=1;
3. quit;
4. mysql --local-infile=1 -u root -p;
5.
LOAD DATA LOCAL INFILE "./rawdata/test_characteristics.csv" INTO TABLE characteristics
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


EXECUTE.sql file: mysql -u root -p < ./schema/schema_test_category.sql
ACCESS MySQL CLI: mysql -u root -p
SHOW DATABASES; USE [db name];
SHOW TABLES;
DESC [table name];
SELECT * FROM [table name]; // SELECT * FROM groceries;
INSERT INTO [table name] (?, ?) VALUES (?, ?);
DELETE FROM groceries WHERE quantity=800;
*
UPDATE table
SET
  column1 = new_value1,
  column2 = new_value2,
WHERE
  condition;
*
*/
