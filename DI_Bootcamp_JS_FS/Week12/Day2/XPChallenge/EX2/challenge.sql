-- 1. 
UPDATE film
SET language_id = (
  SELECT language_id
  FROM language
  WHERE name = 'French'
)
WHERE title IN ('Airport Pollock', 'Agent Truman');

--2.
-- The foreign key is customer_address_id

--3.
DROP TABLE customer_review;

-- It is a simple commande but is permanent, unless a backup of the table exists, we cannot recover lost data

--4.
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

--5.
SELECT film.title, rental.rental_date, rental_rate
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY rental_rate DESC
LIMIT 30;

--6.
    --1. 
    SELECT *
    FROM film
    WHERE description ILIKE '%sumo wrestler%' 
    AND cast ILIKE '%Penelope Monroe%';

    --2.
    SELECT *
    FROM film
    WHERE length < '01:00:00'::interval
    AND rating = 'R';

    --3.
    SELECT film.*
    FROM film
    JOIN inventory ON film.film_id = inventory.film_id
    JOIN rental ON inventory.inventory_id = rental.inventory_id
    JOIN customer ON rental.customer_id = customer.customer_id
    WHERE customer.first_name = 'Matthew'
    AND customer.last_name = 'Mahan'
    AND rental.rental_rate > 4.00
    AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

    --4. 
    SELECT *
    FROM film
    WHERE (title ILIKE '%boat%' OR description ILIKE '%boat%')
    AND replacement_cost > 50.00;



