DROP DATABASE IF EXISTS reviews_db;

CREATE DATABASE reviews_db;

USE reviews_db;


DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  recommend INT,
  not_recommend INT,
  rating_1 INT,
  rating_2 INT,
  rating_3 INT,
  rating_4 INT,
  rating_5 INT,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT,
  rating INT,
  date DATETIME,
  summary TEXT,
  body TEXT,
  recommend BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR(50),
  reviewer_email VARCHAR(50),
  response VARCHAR(250),
  helpfulness INT,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id INT,
  product_id INT,
  name VARCHAR(20),
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS characteristic_reviews;

CREATE TABLE characteristic_reviews (
  id INT,
  characteristic_id INT,
  review_id INT,
  value INT,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS reviews_photos;

CREATE TABLE reviews_photos (
  id INT,
  review_id INT,
  url varchar(250),
  PRIMARY KEY (ID)
);

-- SET FOREIGN_KEY_CHECKS=0;

-- ALTER TABLE reviews ADD FOREIGN KEY (product_id) REFERENCES products (id);
-- ALTER TABLE reviews_photos ADD FOREIGN KEY (review_id) REFERENCES reviews (id);
-- ALTER TABLE characteristics ADD FOREIGN KEY (product_id) REFERENCES products (id);

-- ALTER TABLE `reviews_db`.`characteristic_reviews`
-- ADD CONSTRAINT `review_id`
--   FOREIGN KEY (`review_id`)
--   REFERENCES `reviews_db`.`reviews` (`id`)
--   ON DELETE NO ACTION
--   ON UPDATE NO ACTION;

-- ALTER TABLE `reviews_db`.`characteristic_reviews`
-- ADD CONSTRAINT `review_id`
--   FOREIGN KEY (`review_id`)
--   REFERENCES `reviews_db`.`reviews` (`id`)
--   ON DELETE NO ACTION
--   ON UPDATE NO ACTION;

-- ALTER TABLE `reviews_db`.`reviews`
-- ADD INDEX `product_id_idx` (`product_id` ASC) VISIBLE;

/*


LOAD DATA LOCAL INFILE "/home/ubuntu/reviews_1.csv" INTO TABLE reviews
FIELDS TERMINATED BY ';'
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS (
    id,
    product_id,
    rating,
    date,
    summary,
    body,
    recommend,
    reported,
    reviewer_name,
    reviewer_email,
    response,
    helpfulness
);

LOAD DATA LOCAL INFILE "/home/ubuntu/reviews_1.csv" INTO TABLE reviews
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE "./rawdata/reviews.csv" INTO TABLE reviews
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE "./reviews_photos_E.csv" INTO TABLE reviews_photos
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

idx_reviews_product_id

EXECUTE.sql file: mysql -u root -p < ./schema/schema.sql
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

LOAD DATA LOCAL INFILE
1. show global variables like 'local_infile';
2. SET GLOBAL local_infile=1;
3. quit;
4. mysql --local-infile=1 -u root -p;
5.
LOAD DATA LOCAL INFILE "./rawdata/test_reviews_photos.csv" INTO TABLE reviews_photos;
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';
*
*/
