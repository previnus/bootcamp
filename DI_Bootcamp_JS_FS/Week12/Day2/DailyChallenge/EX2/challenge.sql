-- Create Book Table
CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

-- Inserting Book Data
INSERT INTO Book (title, author) VALUES ('Alice in Wonderland', 'Lewis Carroll');
INSERT INTO Book (title, author) VALUES ('Harry Potter', 'J.K. Rowling');
INSERT INTO Book (title, author) VALUES ('To Kill a Mockingbird', 'Harper Lee');


-- Create Student Table
CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INTEGER CHECK (age <= 15)
);

-- Insert Student Data
INSERT INTO Student (name, age) VALUES ('John', 12);
INSERT INTO Student (name, age) VALUES ('Lera', 11);
INSERT INTO Student (name, age) VALUES ('Patrick', 10);
INSERT INTO Student (name, age) VALUES ('Bob', 14);

-- Create Library Table
CREATE TABLE Library (
  book_fk_id INT,
  student_fk_id INT,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_fk_id),
  FOREIGN KEY (book_fk_id) REFERENCES Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_fk_id) REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Insert Library Data
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'Alice in Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'John'),
  DATE '2022-02-15'
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
  (SELECT student_id FROM Student WHERE name = 'Bob'),
  DATE '2021-03-03'
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'Alice in Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'Lera'),
  DATE '2021-05-23'
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
  (SELECT student_id FROM Student WHERE name = 'Bob'),
  DATE '2021-08-12'
);


-- Display the following:

-- 1. 
SELECT * FROM Library;

-- 2. 
SELECT s.name AS student_name, b.title AS book_title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- 3. 
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice in Wonderland';

-- 4.  If a student is deleted, the related records in the library table where the student's student_fk_id appears as a foreign key will also be deleted automatically.
