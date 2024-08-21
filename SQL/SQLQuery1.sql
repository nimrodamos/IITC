----q1
--select*
--from Orders

----q2
--select*
--from Employees

----q3
--select FirstName,HireDate,Region,Country
--from Employees

----q4
--select CustomerID,OrderID,OrderDate
--from Orders

----q5
--select 
--ProductID as ProID ,ProductName as ProName ,UnitPrice as UntPr
--from Products

----q6
--select [Address] as "add"
--from Employees

----q7
--select CustomerID, [Address]+ ' ' + City as fullAddresas 
--from Customers

----q8
--select FirstName + ' ' + LastName as "Full name",
--BirthDate + 8 as "Birth date",
--ReportsTo as #manager
--from Employees

----q9
--select distinct City
--from Employees

----q10
--select distinct Country 
--from Employees

----q11
--select distinct Title
--from Employees

----q12
--select Country, City
--from Customers

--select distinct Country + ' ' + City
--from Customers

----q13
--select firstname , BirthDate,BirthDate+5
--from Employees

----q14
--select ProductName,UnitPrice,UnitPrice+10
--from Products

----q15
--select ProductID,
--ProductName
--,UnitPrice
--,UnitPrice*1.165 as newPrice
--,UnitsInStock
--,UnitsOnOrder
--,UnitsInStock-UnitsOnOrder as unitLeft
--from Products

----q16
--select ProductID,ProductName,
--(UnitsInStock-UnitsOnOrder)* UnitPrice as CostOfProductsNotOrdered
--from Products

