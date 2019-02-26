-- Create the database day_planner_db and specified it for use.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger_name) VALUES ("Big Boy");
INSERT INTO burgers (burger_name) VALUES ("Southwest Burger");
INSERT INTO burgers (burger_name) VALUES ("King Colossal");