-- Create the Customer table
CREATE TABLE Customer (
  id SERIAL PRIMARY KEY, 
  first_name VARCHAR(50) NOT NULL, 
  last_name VARCHAR(50) NOT NULL 
);

-- Create the Customer_Profile table
CREATE TABLE Customer_Profile (
  id SERIAL PRIMARY KEY,  
  isLoggedIn BOOLEAN DEFAULT false,
  customer_id INT, 
  FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

-- Inserting customer data
INSERT INTO Customer (first_name, last_name) VALUES ('John', 'Doe');
INSERT INTO Customer (first_name, last_name) VALUES ('Jerome', 'Lalu');
INSERT INTO Customer (first_name, last_name) VALUES ('Lea', 'Rive');

-- John is logged in
INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES (
  (SELECT true FROM Customer WHERE first_name = 'John' AND last_name = 'Doe'),
  (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')
);

-- Jerome is not logged in
INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES (
  (SELECT false FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'),
  (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
);

-- Query to display the first_name of the LoggedIn customers
SELECT c.first_name
FROM Customer c
JOIN Customer_Profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- Query to display all customers' first_name and isLoggedIn columns
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id;

-- Query to display the number of customers that are not LoggedIn
SELECT COUNT(*) AS num_customers_not_logged_in
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;