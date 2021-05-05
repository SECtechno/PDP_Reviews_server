DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  recommend int NULL,
  not_recommend int NULL,
  rating_1 int NULL,
  rating_2 int NULL,
  rating_3 int NULL,
  rating_4 int NULL,
  rating_5 int NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  rating int NOT NULL,
  summary varchar(60) NOT NULL,
  recommend tinyint NULL,
  response varchar(20) NULL,
  body varchar(200) NULL,
  date timestamp NULL,
  reviewer varchar(20) NULL,
  email varchar(20) NULL,
  helpfulness tinyint NULL,
  report tinyint NULL,
  product_id int(10) NULL,
  PRIMARY KEY (ID)
);

insert into reviews(rating, summary) values (4, 'This product was ok!');

DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NULL,
  value varchar(60) NULL,
  product_id int NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS photo;

CREATE TABLE photo (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(200) NULL,
  review_id int NULL,
  PRIMARY KEY (ID)
);

ALTER TABLE reviews ADD FOREIGN KEY (product_id) REFERENCES products (id);
ALTER TABLE photo ADD FOREIGN KEY (review_id) REFERENCES reviews (id);
ALTER TABLE characteristics ADD FOREIGN KEY (product_id) REFERENCES products (id);


/*
EXECUTE.sql file: mysql -u root -p < schema.sql
ACCESS MySQL CLI: mysql -u root -p
SHOW DATABASES; USE [db name];
SHOW TABLES; DESC [table name];
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
