-- Harjoitus 1.1
SELECT *
FROM Customers
WHERE Country = 'Finland'

-- Harjoitus 1.2
SELECT *
FROM Orders
WHERE CustomerID = (SELECT CustomerID
					FROM Customers
					WHERE CompanyName = 'Que Delícia')

--SELECT *
--FROM Customers C
--JOIN Orders O ON c.CustomerID = o.CustomerID
--WHERE c.CompanyName= 'Que Delícia'


-- Harjoitus 1.3
SELECT *
FROM Employees
WHERE City = 'London'
