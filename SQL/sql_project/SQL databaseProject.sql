-- Create the Items table (טבלת פריטים)
CREATE TABLE Items (
    Code INT PRIMARY KEY,                -- קוד פריט
    Description NVARCHAR(255),           -- תיאור פריט
    UnitPrice MONEY,                     -- מחיר יחידה
    Available INT,                       -- כמות במלאי
    Saved INT,                           -- כמות שמורה
    Waiting INT,                         -- כמות בהמתנה
    Subscript INT,                       -- כמות להזמנות קבועות
    Freq INT,                            -- תדירות אספקה למלאי (מספר ימים)
    SuppDate DATE,                       -- תאריך אספקה הבא למלאי
    OrderPercnt DECIMAL(5, 2)            -- אחוז אספקה למלאי
);

-- Insert data into the Items table
INSERT INTO Items (Code, Description, UnitPrice, Available, Saved, Waiting, Subscript, Freq, SuppDate, OrderPercnt)
VALUES
(101, 'Office Chair', 85.00, 150, 20, 15, 10, 7, '2024-08-25', 5.00),
(102, 'Desk Lamp', 45.00, 200, 30, 10, 12, 10, '2024-08-30', 10.00),
(103, 'Desk Organizer', 20.00, 300, 25, 20, 15, 14, '2024-09-01', 7.50);

-- Create the Customers table (טבלת לקוחות)
CREATE TABLE Customers (
    CustID INT PRIMARY KEY,              -- ת.ז. לקוח
    CustType NVARCHAR(50),               -- סוג לקוח
    CustStatus NVARCHAR(50),             -- סטטוס לקוח
    FreezCode NVARCHAR(50),              -- סיבת הקפאה
    OverCount INT,                       -- מונה חריגות
    CustName NVARCHAR(255),              -- שם לקוח
    DelivAddrss NVARCHAR(255),           -- כתובת להובלות
    MailAddrss NVARCHAR(255),            -- כתובת לדואר
    CreditCard NVARCHAR(255)             -- פרטי כרטיס אשראי
);

-- Insert data into the Customers table
INSERT INTO Customers (CustID, CustType, CustStatus, FreezCode, OverCount, CustName, DelivAddrss, MailAddrss, CreditCard)
VALUES
(123456789, 'Regular', 'Active', NULL, 0, 'John Smith', '123 Main St, Anytown', 'john.smith@email.com', '1234-5678-9012-3456'),
(987654321, 'Premium', 'Inactive', 'Payment Issue', 3, 'Emily Johnson', '456 Oak St, Somewhere', 'emily.johnson@email.com', '9876-5432-1098-7654'),
(112233445, 'Gold', 'Active', NULL, 1, 'Michael Brown', '789 Pine St, Anywhere', 'michael.brown@email.com', '1111-2222-3333-4444');

-- Create the ExOrders table (טבלת הזמנות לביצוע)
CREATE TABLE ExOrders (
    OrderNo INT PRIMARY KEY,             -- מספר הזמנה
    Date DATE,                           -- תאריך ההזמנה
    CustID INT,                          -- ת.ז. לקוח
    Code INT,                            -- קוד פריט
    Quant INT,                           -- מספר יחידות שהוזמנו
    Delivery INT,                        -- קוד משלוח
    Address NVARCHAR(255),               -- כתובת למשלוח
    Status NVARCHAR(50),                 -- סטטוס הזמנה
    SuppDate DATE,                       -- תאריך לאספקה
    FOREIGN KEY (Code) REFERENCES Items(Code),           -- מפתח זר לקוד פריט
    FOREIGN KEY (CustID) REFERENCES Customers(CustID)    -- מפתח זר לת.ז. לקוח
);

-- Insert data into the ExOrders table
INSERT INTO ExOrders (OrderNo, Date, CustID, Code, Quant, Delivery, Address, Status, SuppDate)
VALUES
(5001, '2024-08-10', 123456789, 101, 5, 1, '123 Main St, Anytown', 'Pending', '2024-08-20'),
(5002, '2024-08-15', 987654321, 102, 3, 2, '456 Oak St, Somewhere', 'Shipped', '2024-08-25'),
(5003, '2024-08-20', 112233445, 103, 7, 1, '789 Pine St, Anywhere', 'Delivered', '2024-09-05');

-- Create the Invoices table (טבלת חשבוניות)
CREATE TABLE Invoices (
    InvNo INT PRIMARY KEY,                -- מספר חשבונית
    Date DATE,                           -- תאריך
    OrderNo INT,                         -- מספר הזמנה
    UnitDesc NVARCHAR(255),              -- תיאור פריט
    NoUnits INT,                         -- מספר יחידות
    UnitPrice MONEY,                     -- מחיר יחידה
    TotAmount MONEY,                     -- סכום הקניה
    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo)    -- מפתח זר למספר הזמנה
);

-- Insert data into the Invoices table
INSERT INTO Invoices (InvNo, Date, OrderNo, UnitDesc, NoUnits, UnitPrice, TotAmount)
VALUES
(6001, '2024-08-11', 5001, 'Office Chair', 5, 85.00, 425.00),
(6002, '2024-08-16', 5002, 'Desk Lamp', 3, 45.00, 135.00),
(6003, '2024-08-21', 5003, 'Desk Organizer', 7, 20.00, 140.00);

-- Create the Subscription table (טבלת פרטי הזמנות קבועות)
CREATE TABLE Subscription (
    OrderNo INT,                         -- מספר הזמנה
    CustID INT,                          -- ת.ז. לקוח
    Code INT,                            -- קוד פריט
    Quant INT,                           -- מספר יחידות
    Freq INT,                            -- תכיפות ביצוע ההזמנה (מספר ימים)
    Delivery INT,                        -- קוד משלוח
    NextOrder DATE,                      -- תאריך הבא לאספקה ללקוח
    Expiration DATE,                     -- תאריך פקיעת ההזמנה
    Status NVARCHAR(50),                 -- סטטוס הזמנה קבועה
    PRIMARY KEY (OrderNo, CustID),       -- מפתח ראשי משולב
    FOREIGN KEY (Code) REFERENCES Items(Code),           -- מפתח זר לקוד פריט
    FOREIGN KEY (CustID) REFERENCES Customers(CustID)    -- מפתח זר לת.ז. לקוח
);

-- Insert data into the Subscription table
INSERT INTO Subscription (OrderNo, CustID, Code, Quant, Freq, Delivery, NextOrder, Expiration, Status)
VALUES
(7001, 123456789, 101, 10, 30, 1, '2024-09-10', '2025-09-10', 'Active'),
(7002, 987654321, 102, 5, 15, 2, '2024-09-15', '2025-09-15', 'On Hold'),
(7003, 112233445, 103, 8, 60, 1, '2024-10-01', '2025-10-01', 'Active');

-- Create the Receipt table (טבלת קבלות)
CREATE TABLE Receipt (
    ReceiptNo INT PRIMARY KEY,            -- מספר קבלה
    PymtDate DATE,                        -- תאריך
    InvNo INT,                            -- מספר חשבונית
    OrderNo INT,                          -- מספר הזמנה
    PaidAmt MONEY,                        -- סכום ששולם
    FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo),    -- מפתח זר למספר חשבונית
    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo) -- מפתח זר למספר הזמנה
);

-- Insert data into the Receipt table
INSERT INTO Receipt (ReceiptNo, PymtDate, InvNo, OrderNo, PaidAmt)
VALUES
(8001, '2024-08-12', 6001, 5001, 425.00),
(8002, '2024-08-17', 6002, 5002, 135.00),
(8003, '2024-08-22', 6003, 5003, 140.00);

-- Create the Accounting table (טבלת חשבות)
CREATE TABLE Accounting (
    AccountID INT IDENTITY(1,1) PRIMARY KEY,  -- מזהה חשבון
    Date DATE,                               -- תאריך
    Amount MONEY,                            -- סכום
    CrdtDebt NVARCHAR(50),                   -- חיוב/זיכוי
    InvNo INT,                               -- מספר חשבונית
    OrderNo INT,                             -- מספר הזמנה
    ReceiptNo INT,                           -- מספר קבלה
    FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo),    -- מפתח זר למספר חשבונית
    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo), -- מפתח זר למספר הזמנה
    FOREIGN KEY (ReceiptNo) REFERENCES Receipt(ReceiptNo)  -- מפתח זר למספר קבלה
);

-- Insert data into the Accounting table
INSERT INTO Accounting (Date, Amount, CrdtDebt, InvNo, OrderNo, ReceiptNo)
VALUES
('2024-08-12', 425.00, 'Credit', 6001, 5001, 8001),
('2024-08-17', 135.00, 'Credit', 6002, 5002, 8002),
('2024-08-22', 140.00, 'Credit', 6003, 5003, 8003);

-- Create the StockOrder table (טבלת הזמנות למלאי)
CREATE TABLE StockOrder (
    OrderNo INT PRIMARY KEY,                -- מספר הזמנה
    StockDate DATE,                        -- תאריך
    Code INT,                              -- קוד פריט
    Descr NVARCHAR(255),                   -- תיאור פריט
    Quant INT                             -- מספר יחידות להזמנה
);

-- Insert data into the StockOrder table
INSERT INTO StockOrder (OrderNo, StockDate, Code, Descr, Quant)
VALUES
(9001, '2024-08-01', 101, 'Office Chair', 50),
(9002, '2024-08-15', 102, 'Desk Lamp', 30),
(9003, '2024-08-20', 103, 'Desk Organizer', 40);

-- Create the DeliveryFees table (טבלת מחירי משלוחים)
CREATE TABLE DeliveryFees (
    Delivery INT PRIMARY KEY,               -- קוד משלוח
    Description NVARCHAR(255),              -- תיאור סוג המשלוח
    DelFee MONEY                            -- מחיר
);

-- Insert data into the DeliveryFees table
INSERT INTO DeliveryFees (Delivery, Description, DelFee)
VALUES
(1, 'Standard Delivery', 10.00),
(2, 'Express Delivery', 25.00),
(3, 'Overnight Delivery', 50.00);

-- Create the Discounts table (טבלת הנחות)
CREATE TABLE Discounts (
    CustType NVARCHAR(50) PRIMARY KEY,      -- סוג לקוח
    Discnt DECIMAL(5, 2)                    -- אחוז הנחה
);

-- Insert data into the Discounts table
INSERT INTO Discounts (CustType, Discnt)
VALUES
('Regular', 5.00),
('Premium', 10.00),
('Gold', 15.00);

-- Create the Numbers table (טבלת מספרים)
CREATE TABLE Numbers (
    LastOrder INT,                         -- מספר אחרון של הזמנה ללקוח
    LastSubsc INT,                         -- מספר אחרון של הזמנה קבועה
    LastStock INT,                         -- מספר אחרון של הזמנה למלאי
    LastReceipt INT,                       -- מספר אחרון של קבלה
    LastInvoice INT                        -- מספר אחרון של חשבונית
);

-- Insert data into the Numbers table
INSERT INTO Numbers (LastOrder, LastSubsc, LastStock, LastReceipt, LastInvoice)
VALUES
(5003, 7003, 9003, 8003, 6003);

-- Create the Users table (טבלת הרשאות)
CREATE TABLE Users (
    UserName NVARCHAR(50) PRIMARY KEY,      -- שם משתמש
    Profile NVARCHAR(50)                    -- פרופיל
);

-- Insert data into the Users table
INSERT INTO Users (UserName, Profile)
VALUES
('user1', 'Admin'),
('user2', 'Sales'),
('user3', 'Warehouse');

-- Create the Profiles table (טבלת פרופילים)
CREATE TABLE Profiles (
    Profile NVARCHAR(50) PRIMARY KEY,       -- פרופיל
    Act NVARCHAR(255)                       -- ערך כ/ל לפעילות
);

-- Insert data into the Profiles table
INSERT INTO Profiles (Profile, Act)
VALUES
('Admin', 'All'),
('Sales', 'Sales Related Actions'),
('Warehouse', 'Stock Management');


