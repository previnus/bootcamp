-- 1.
SELECT * FROM language

--2.
-- 1. Get all films, even if they don’t have languages.
SELECT f.title, f.description, l.name AS language_name
FROM film f
LEFT JOIN language l ON f.language_id = l.language_id;

-- 2. Get all languages, even if there are no films in those languages.
SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

-- 3.
CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO new_film (name) VALUES ('Matrix');
INSERT INTO new_film (name) VALUES ('Matrix Reloaded');
INSERT INTO new_film (name) VALUES ('Matrix Resurrection');

-- 4.
CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INT REFERENCES new_film (id) ON DELETE CASCADE,
  language_id INT REFERENCES language (language_id),
  title VARCHAR(255),
  score INTEGER CHECK (score >= 1 AND score <= 10),
  review_text TEXT,
  last_update TIMESTAMP
);

--5. 
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (
  (SELECT id FROM new_film WHERE name = 'Matrix'),
  (SELECT language_id FROM language WHERE name = 'English'),
  'Great Movie',
  9,
  'This movie was fantastic! Highly recommended.',
  CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (
  (SELECT id FROM new_film WHERE name = 'Matrix Reloaded'),
  (SELECT language_id FROM language WHERE name = 'French'),
  'Good Movie',
  7,
  'A nice film with interesting characters.',
  CURRENT_TIMESTAMP
);


-- 6. If you try to delete a film from the "new_film" table that has a review associated with it, the deletion will be blocked and an error will occur. This is because the presence of a foreign key constraint with ON DELETE CASCADE


