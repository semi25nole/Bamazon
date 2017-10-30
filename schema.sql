-- Drop the database if it exists already
DROP DATABASE if exists bamazonDB;

-- Create the database if it does not exist
CREATE DATABASE bamazonDB;

-- Use the created database
USE bamazonDB;

-- Create a table named products
CREATE TABLE products(
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price INTEGER NULL,
    stock_quantity INTEGER NOT NULL
);

-- add 10 different products into the table

-- Go through all of the values and change the content to " " for the VARCHAR inputs
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Batteries", "Electronics", 3, 2000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Iphone Cable", "Electronics", 10, 4000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("RayBan Wayfarer Sunglasses", "Apparrell", 130, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Vizio HDTV", "Electronics", 450, 130);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Sony HDTV", "Electronics", 550, 130);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Ralph Lauren Polo", "Apparell", 65, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Yankees Hat", "Apparell", 18, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Webcam", "Electronics", 35, 180);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Micro Usb Cable", "Electronics", 6, 2000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Nike AirMax Men's Shoes", "Apparell", 120, 60);



