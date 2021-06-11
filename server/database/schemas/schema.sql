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
