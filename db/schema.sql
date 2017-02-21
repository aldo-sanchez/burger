CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOL NOT NULL DEFAULT 0,
    date TIMESTAMP,
    PRIMARY KEY(id)
);