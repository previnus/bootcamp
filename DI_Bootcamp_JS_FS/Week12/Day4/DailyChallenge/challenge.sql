-- 1.
CREATE TABLE product_orders (
  order_id SERIAL PRIMARY KEY,
  order_date DATE,
  customer_name VARCHAR(50)
);

--2.
CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  order_id INT,
  item_name VARCHAR(50),
  price NUMERIC(10, 2),
  FOREIGN KEY (order_id) REFERENCES product_orders(order_id)
);

--3.
CREATE OR REPLACE FUNCTION get_order_total_price(order_id INT)
RETURNS NUMERIC(10, 2) AS
$$
DECLARE
  total_price NUMERIC(10, 2);
BEGIN
  SELECT SUM(price) INTO total_price
  FROM items
  WHERE order_id = get_order_total_price.order_id;
  
  RETURN total_price;
END;
$$
LANGUAGE plpgsql;

--4.1
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100)
);


--4.2
CREATE TABLE product_orders (
  order_id SERIAL PRIMARY KEY,
  order_date DATE,
  customer_name VARCHAR(50),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

--4.3
CREATE OR REPLACE FUNCTION get_order_total_price(user_id INT, order_id INT)
RETURNS NUMERIC(10, 2) AS
$$
DECLARE
  total_price NUMERIC(10, 2);
BEGIN
  SELECT SUM(price) INTO total_price
  FROM items
  WHERE order_id = get_order_total_price.order_id;
  
  RETURN total_price;
END;
$$
LANGUAGE plpgsql;

