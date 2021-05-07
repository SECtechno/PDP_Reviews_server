DROP DATABASE IF EXISTS reviews_st;

CREATE DATABASE reviews_st;

USE reviews_st;


DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  recommend int NOT NULL,
  not_recommend int NOT NULL,
  rating_1 int NOT NULL,
  rating_2 int NOT NULL,
  rating_3 int NOT NULL,
  rating_4 int NOT NULL,
  rating_5 int NOT NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  product_id int(10) NOT NULL,
  rating int(20) NOT NULL,
  date varchar(60) NOT NULL,
  summary varchar(200) NOT NULL,
  body varchar(500) NOT NULL,
  recommend tinyint NOT NULL,
  reported tinyint NOT NULL,
  reviewer_name varchar(100) NOT NULL,
  reviewer_email varchar(100) NOT NULL,
  response varchar(100) NOT NULL,
  helpfulness int NOT NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  name varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS characteristic_reviews;

CREATE TABLE characteristic_reviews (
  id int NOT NULL AUTO_INCREMENT,
  characteristic_id int NOT NULL,
  review_id int NOT NULL,
  value int NOT NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS reviews_photos;

CREATE TABLE reviews_photos (
  id int NOT NULL,
  review_id int NOT NULL,
  url varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

-- ALTER TABLE reviews ADD FOREIGN KEY (product_id) REFERENCES products (id);
-- ALTER TABLE reviews_photos ADD FOREIGN KEY (review_id) REFERENCES reviews (id);
-- ALTER TABLE characteristics ADD FOREIGN KEY (product_id) REFERENCES products (id);
-- ALTER TABLE characteristic_reviews ADD FOREIGN KEY (characteristic_id) REFERENCES characteristics (id);
-- ALTER TABLE characteristic_reviews ADD FOREIGN KEY (review_id) REFERENCES reviews (id);


/*
LOAD DATA LOCAL INFILE "./rawdata/reviews_photos.csv" INTO TABLE reviews_photos
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

select rating from reviews;
*****select date from reviews;
select summary from reviews;
select body from reviews;
*****select reported from reviews;

LOAD DATA LOCAL INFILE "./rawdata/test_characteristics.csv" INTO TABLE characteristics
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE "./rawdata/test_characteristics_reviews.csv" INTO TABLE characteristics_reviews
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE "./rawdata/test_reviews_photos.csv" INTO TABLE reviews_photos
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;


************************
LOAD DATA LOCAL INFILE
1. show global variables like 'local_infile';
2. SET GLOBAL local_infile=1;
3. quit;
4. mysql --local-infile=1 -u root -p;
5.
LOAD DATA LOCAL INFILE "./rawdata/test_characteristics.csv" INTO TABLE characteristics
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

// LOAD COMMAND
LOAD DATA LOCAL INFILE "./rawdata/test_characteristics.csv" INTO TABLE characteristics
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

EXECUTE.sql file: mysql -u root -p < ./schema/schema_test.sql
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
