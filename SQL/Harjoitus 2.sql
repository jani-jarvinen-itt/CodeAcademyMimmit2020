-- Harjoitus 2.1
SELECT COUNT(CustomerID)
FROM Customers

-- Harjoitus 2.2
SELECT SUM(UnitPrice*UnitsInStock)
FROM Products

-- Harjoitus 2.3
SELECT SUM(UnitPrice*Quantity*(1-Discount))
FROM [Order Details]
WHERE ProductID = (SELECT ProductID
				   FROM Products
				   WHERE ProductName='Tofu')
