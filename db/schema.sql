DROP DATABASE IF EXISTS tripper_db;

CREATE DATABASE tripper_db;

USE tripper_db;

CREATE TABLE trip (
    id INT NOT NULL AUTO_INCREMENT,
    dest_name VARCHAR(50) NOT NULL, 
    dest_continent VARCHAR(50) NOT NULL,
    dest-summary TEXT NOT NULL,
    dest_rating INT NOT NULL
)
