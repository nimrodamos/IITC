-- פונקציות תרגילים סעיף3

--1.
--group functions = count,sum,avg,max,min,var,stdev.

--2.
--yes

--3.
--no

--4.
-- התוצאה תהיה מספר השורות הכולל בטבלה

--5.
--YYYY-MM-DD HH:MI:SS.nn

--6.
--פורמטים שונים של תאריך ושעה// convert
-- אזורי זמן שונים 

--7.
--מכיוון שגיל האדם משתנה בכל שנה.
--במקום זאת, מומלץ לאחסן את תאריך הלידה של האדם

--8.
select OrderID, convert (int,UnitPrice) as 'int unit price'
from [Order Details]

--9.
select EmployeeID, sqrt(EmployeeID) as'sqrt employeeID'
from Employees

--10.
select orderdate, shippeddate, datediff (day,OrderDate,ShippedDate) as 'duration' 
from Orders

--11.
select cast('2009-07-27' as datetime)
--
select cast(('2009-07-27') as char(12)) as string

--12.
select
EmployeeID,
lower(FirstName) as 'first name',
upper (lastname) as 'last name'
from Employees
where EmployeeID between 3 and 5

--13.
select CategoryName,Description, CHARINDEX('i',Description,4)
from Categories

--14.
select ProductID,ProductName, ProductName, REPLACE(ProductName,'e','-') 
from Products

--15.
select MIN(LastName) AS SmallestLastName,
    MAX(FirstName) AS LargestFirstName
from Employees;

--16.
select count(*)
from Employees

--17.
select count(Region)
from Employees

--18.
select avg(UnitPrice)
from Products

--19.
select count(distinct CustomerID) as 'num of customers'
from Orders

--20.
select top(10)*
from Customers

--21.
select top 10 percent *
from Customers
