--select*
--from Orders
--where ShipCountry = 'USA'

--select ProductName,
--UnitPrice+9 as newNAme,
--CategoryID
--from Products
--where ProductName like '%C%'

--select sum (freight) as 'sum',
--AVG(freight) as 'avg',
--min(freight)as 'min',
--MAX (freight)as 'max',
--COUNT (freight)as 'count'
--from Orders



--select sum (UnitPrice) as 'sum',
--AVG(UnitPrice) as 'avg',
--min(UnitPrice)as 'min',
--MAX (UnitPrice)as 'max',
--COUNT (UnitPrice)as 'count'
--from Products 

--select*
--from Products join Categories
--on Products.CategoryID = Categories.CategoryID

--select OrderID ,c.CustomerID,CompanyName,Country
--from Customers as c join Orders as o
--on c.CustomerID = o.CustomerID
--where Country = 'mexico'

--select 
--e.FirstName,
--e.LastName,
--e.City,
--e.EmployeeID,
--o.OrderID,
--o.OrderDate
--from Employees as e join Orders as o
--on e.EmployeeID = o.EmployeeID
--where o.EmployeeID  in (3 , 5,7)

--select*
--from Customers c right join Orders o
--on c.CustomerID = o.CustomerID
--order by OrderID

-- where
--1
select FirstName, LastName
from Employees
where EmployeeID = 3
--2
select ProductName,UnitPrice
from Products
where ProductID =4
--3
select ProductID,
ProductName,
UnitPrice
from Products
where UnitPrice >20
order by UnitPrice
--4
select FirstName+' ' +LastName as 'full name',
BirthDate,
EmployeeID
from Employees
where EmployeeID = 8
--5
select EmployeeID,
FirstName+' ' +LastName as 'full name',
BirthDate,
city
from Employees
where City='LONDON'
--6!!
select*
from Products
where UnitPrice not between 50 and 100 
--7
select ProductName,UnitPrice
from Products
where UnitPrice between 21.35 and 43.9
order by unitprice desc
--8.
select EmployeeID,LastName,HireDate,city
from Employees
where City = 'LONDON' or city = 'TACOMA'
--9.
select EmployeeID , FirstName,LastName
from Employees
where EmployeeID in (1,2,5)
--10.
select EmployeeID ,FirstName,LastName,BirthDate
from Employees
where EmployeeID not in(4,5,7)
--11.
select ProductID,ProductName,CategoryID
from Products
where CategoryID not in (1,2,7)
order by CategoryID
--12.!!!
SELECT FirstName, Region
FROM Employees
WHERE Region IS NULL;
--13.
select top 3 ProductName,UnitPrice
from Products
order by UnitPrice 
--14.
select OrderID, OrderDate,RequiredDate
from Orders
where RequiredDate> '1996-10-31'
--15.
select EmployeeID,LastName, ReportsTo
from Employees
where ReportsTo is not NULL
--16.
select*
from Categories
where CategoryName like '%o%'
--17.
select CompanyName,Country
from Customers
where CompanyName like '%a' 
--18.
select ProductName,CategoryID
from Products
where ProductName like '%a_'
--19.
select OrderID, CustomerID, EmployeeID
from Orders
WHERE OrderDate between '1997-04-01' and '1997-05-31'
order by OrderDate asc , CustomerID desc
--20.
select CustomerID,CompanyName,Country,Phone,Region
from Customers
where (Country like 'm%'
or Country like 'f%'
or Country like 'g%')
and Region is NULL
--21.
select EmployeeID,
FirstName + ' '+ LastName as 'full name',
BirthDate,
Country
from Employees 
where LastName like '%k%'
or LastName like '%d%'
or BirthDate like '%1963%'
--22.
select ProductName, UnitPrice,SupplierID 
from Products
where UnitPrice>30
and (SupplierID=1 or SupplierID=3)
--23.
select OrderID, EmployeeID, OrderDate,RequiredDate,ShipName
from Orders
where EmployeeID=7
and ShipName in ('QUICK-stop','Du mond entire','Eastern Connection')
and OrderDate +20 < RequiredDate
--24.
select ProductID,ProductName
from Products
where (SupplierID in (8,16,21) or UnitPrice>10)
and UnitsInStock not between 10 and 100
order by UnitPrice asc

-- join
--1.
select p.ProductName , c.CategoryName
from Products as p join Categories as c
on p.CategoryID = c.CategoryID

--2.!!!
select p.ProductName , s.companyName
from Products as p join Suppliers as s
on p.SupplierID = s.SupplierID

--3.
select OrderID, CompanyName
from Orders o join Customers c
on o.CustomerID = c.CustomerID
where CompanyName like 'a%'

--4.
select r.RegionDescription, t.TerritoryDescription
from Region r join Territories t
on r.RegionID = t.RegionID

--5.
select p.ProductName , p.UnitPrice , c.CategoryName
from Products p join Categories c
on p.CategoryID = c.CategoryID
where p.UnitPrice>50

--6.
select p.ProductID,p.UnitPrice,p.SupplierID,c.CategoryName
from Products p join Categories c
on p.CategoryID = c.CategoryID
where p.SupplierID=3

--7.
select ProductID, UnitPrice,SupplierID,CategoryName
from Products p join Categories c
on p.CategoryID = c.CategoryID
where CategoryName like '%a%'

--8
select p.ProductName, c.CategoryName,s.CompanyName
from Products p join Categories c
on p.CategoryID = c.CategoryID
join Suppliers s
on s.SupplierID = p.SupplierID;

--9.
select p.ProductName, c.Description,s.City
from Products p join Categories c
on p.CategoryID = c.CategoryID
join Suppliers s
on s.SupplierID	= p.SupplierID
where s.city in ('london' ,'tokyo')

--10.
select p.ProductName,c.Description,s.Country
from Products p join Categories c
on p.CategoryID = c.CategoryID
join Suppliers s
on p.SupplierID = s.SupplierID
where s.Country like 'a%'

--11
select c.CompanyName,o.OrderID
from Customers c  left join Orders o
on c.CustomerID = o.CustomerID

--12.
select
o.OrderID , o.OrderDate , o.ShipAddress,
c.CustomerID, c.CompanyName ,c.Phone ,
e.FirstName as 'first name',
e.LastName as 'last name'
from Orders o join Customers c
on o.CustomerID = c.CustomerID
join Employees e
on e.EmployeeID = o.EmployeeID
where o.orderdate like '%1996%'
and c.CustomerID like 'a%'
or c.CustomerID like 'c%'
order by o.OrderDate desc


--GROUP FUNCTIONS

--1.
select min(LastName)
from Employees	

--2.
select max(firstName)
from Employees	

--3.
select COUNT(*)
from Employees	

--4.
select count(Region)
from Employees	

--5.
select avg(UnitPrice)
from Products	

--6.
select max(unitprice) as 'max price',avg(unitprice) as 'avg price'
from Products

--7.
select convert (varchar,min(birthdate),113) as 'min birth date',
convert (varchar,max(birthdate),113) as 'max birth date'
from Employees

--8
select COUNT (customerID) as 'numbers of customers' 
from Customers

--9
select count (distinct CustomerID) as 'num of customers'
from Orders

--10.
select CategoryID, 
max(UnitPrice) as 'max price',
min(UnitPrice)as 'min price',
avg (CategoryID)as 'avg category id'
from Products
group by CategoryID

--11.
select SupplierID, max(UnitPrice)as'max price'
from Products
group by SupplierID
order by supplierID desc

--12.
select SupplierID ,avg(UnitsInStock) as 'avg unit in stock'
from Products
group by SupplierID
order by avg(UnitsInStock) desc

--13.
select count (CompanyName),Country,city
from Customers
group by Country,City

--14.
select avg(UnitPrice) as 'avg price', CategoryID
from Products
where unitprice > 40
group by CategoryID

--15.
select count(CustomerID),city
from Customers
where city = 'london'
group by city

--16.
select max(UnitPrice)as 'max unit price',
min(UnitPrice) as 'min unit price',
avg(UnitPrice) as 'avg unit price',
count(*) as 'num of product',
CategoryID, SupplierID
from Products
group by CategoryID,SupplierID

--17.
select max(UnitPrice), CategoryID
from Products
group by CategoryID
having max(UnitPrice)>40

--18.
select SupplierID,avg(UnitPrice) as 'avg unit price'
from Products
group by SupplierID
having avg(UnitPrice)>40

--19.
select sum(p.UnitsOnOrder) as 'unit in order', sum(p.UnitsInStock) as 'unit in stock',
c.CategoryName
from Products p join Categories c
on p.CategoryID = c.CategoryID
where c.CategoryName like '%c%'
group by C.CategoryName
HAVING sum(p.UnitsOnOrder)>100
order by c.CategoryName 

--20.
select Region,City,COUNT(*) as 'count of customers'
from Customers
where city like '%m%' or city like '%l%' and Region is not null
group by Region ,City
having count(*)>=2

--21.
select e.LastName as 'employee',
count(o.OrderID)as 'total order',
max(o.OrderDate) as 'last order'
from Employees e join Orders o
on e.EmployeeID = o.EmployeeID
group by e.LastName	
having count(o.OrderID)>100