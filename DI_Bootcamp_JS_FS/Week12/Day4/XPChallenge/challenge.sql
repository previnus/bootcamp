-- Subqueries 
 --1.
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT salary FROM employees WHERE last_name = 'Bull')
ORDER BY salary DESC;
 
--2.
-- Single row
SELECT first_name, last_name
FROM employees
WHERE manager_id = (
  SELECT employee_id
  FROM employees
  WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE country_name = 'United States'
  )
);

 -- Multiple row
SELECT first_name, last_name
FROM employees
WHERE manager_id IN (
  SELECT employee_id
  FROM employees
  WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE country_name = 'United States'
  )
);
 
-- 3. 
SELECT first_name, last_name
FROM employees
WHERE employee_id IN (
  SELECT manager_id
  FROM departments
);

--4. 
SELECT first_name, last_name
FROM employees
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
);
 
--5. 
SELECT first_name, last_name
FROM employees
WHERE salary = (
  SELECT MIN(salary)
  FROM employees
  WHERE job_id = employees.job_id
);

--6.
SELECT first_name, last_name
FROM employees
WHERE job_id NOT LIKE '%SUPER%';
 
--7.
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
  WHERE department_id = employees.department_id
);
 
-- 8.
SELECT salary
FROM employees
ORDER BY salary DESC
OFFSET 4 LIMIT 1;

--9.
SELECT salary
FROM employees
ORDER BY salary ASC
OFFSET 3 LIMIT 1;
 
--10.
SELECT department_name, department_id
FROM departments
WHERE department_id NOT IN (
  SELECT department_id
  FROM employees
); 

-- Joins
-- 1.
SELECT locations.location_id, locations.street_address, locations.city, locations.state_province, countries.country_name
FROM departments
JOIN locations ON departments.location_id = locations.location_id
JOIN countries ON locations.country_id = countries.country_id;


--2.
SELECT locations.location_id, locations.street_address, locations.city, locations.state_province, countries.country_name
FROM departments
JOIN locations ON departments.location_id = locations.location_id
JOIN countries ON locations.country_id = countries.country_id;

--3.
SELECT employees.first_name, employees.last_name, employees.job_id, departments.department_id, departments.department_name
FROM employees
JOIN departments ON employees.department_id = departments.department_id
JOIN locations ON departments.location_id = locations.location_id
WHERE locations.city = 'London';

--4.
SELECT e.employee_id, e.last_name AS Employee, e.manager_id, m.last_name AS Manager
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;

--5.
SELECT employees.*, departments.department_name, departments.department_id
FROM employees
JOIN departments ON employees.department_id = departments.department_id
ORDER BY departments.department_name;

--6.
SELECT employees.employee_id, employees.job_id, ROUND((CURRENT_DATE - hire_date)::numeric, 0) AS days_worked
FROM employees
JOIN job_history ON employees.employee_id = job_history.employee_id
WHERE job_history.department_id = 90;

--7.
SELECT departments.department_name, CONCAT(employees.first_name, ' ', employees.last_name) AS manager_name, locations.city
FROM departments
JOIN employees ON departments.manager_id = employees.employee_id
JOIN locations ON departments.location_id = locations.location_id;

--8.
SELECT jobs.job_title, AVG(employees.salary) AS avg_salary
FROM employees
JOIN jobs ON employees.job_id = jobs.job_id
GROUP BY jobs.job_title;

--9.
SELECT departments.department_name, employees.first_name, employees.last_name, employees.hire_date, employees.salary
FROM employees
JOIN departments ON employees.department_id = departments.department_id
WHERE employees.job_id LIKE '%MAN%' AND (EXTRACT(YEAR FROM age(CURRENT_DATE, hire_date)) > 15);


-- String Function
--1.
UPDATE employees
SET phone_number = '999'
WHERE phone_number LIKE '%124%';

--2.
SELECT *
FROM employees
WHERE LENGTH(first_name) >= 8;

--3.
SELECT CONCAT(UPPER(SUBSTRING(first_name, 1, 1)), last_name, '@example.com') AS email
FROM employees;

--4.
SELECT employee_id, SUBSTRING(email, 1, LENGTH(email) - 3) AS email
FROM employees;

--5. 
SELECT CASE 
         WHEN POSITION(' ' IN job_title) > 0 THEN SUBSTRING(job_title FROM 1 FOR POSITION(' ' IN job_title) - 1)
         ELSE job_title
       END AS first_word_in_job_title
FROM jobs;

--6.
SELECT first_name AS "Employee First Name", LENGTH(first_name) AS "First Name Length"
FROM employees
WHERE first_name LIKE 'A%' OR first_name LIKE 'J%' OR first_name LIKE 'M%'
ORDER BY first_name;

--7.
SELECT first_name AS "Employee First Name", LENGTH(first_name) AS "First Name Length"
FROM employees
WHERE first_name LIKE 'A%' OR first_name LIKE 'J%' OR first_name LIKE 'M%'
ORDER BY first_name;

