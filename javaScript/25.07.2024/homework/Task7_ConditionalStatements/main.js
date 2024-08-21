//1.
let age = 23;
let canVote;
if (age >= 18) console.log((canVote = true));
else console.log((canVote = false));

//2.
let temperature = -7;
let weather;
if (temperature < 0) console.log((weather = "freezing"));
else console.log((weather = "not freezing"));

//3.
let score = 70;
let result;
if (score >= 60) console.log((result = "pass"));
else console.log((result = "fail"));

//4.
let grade = 40;
let letterGrade;
if (grade >= 90) console.log((letterGrade = "A"));
else if (grade >= 80) console.log((letterGrade = "B"));
else console.log((letterGrade = "C"));

//5.
let number = 23;
let isEven;
if (number % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);

//6.
let year;
let isLeapYear;
if (year % 4 === 0) isLeapYear = true;
else isLeapYear = false;
console.log(isLeapYear);

//7.
let hour = 20;
let period;
if (hour < 12) period = "AM";
else period = "PM";
console.log(period);

//8.
let dayNumber = 5;
let dayName;
if (dayNumber === 1) dayName = "Sunday";
else if (dayNumber === 2) dayName = "Monday";
else if (dayNumber === 3) dayName = "Tuesday";
else if (dayNumber === 4) dayName = "Wednesday";
else if (dayNumber === 5) dayName = "Thursday";
else if (dayNumber === 6) dayName = "Friday";
else if (dayNumber === 7) dayName = "Saturday";
else dayName = "Invalid day number";
console.log(dayName);

//9.
let name1 = "";
let hasName;
if (name1 === "") hasName = false;
else hasName = true;
console.log(hasName);

//10.
let amount;
let shipping;
if (amount > 1000) shipping = 0;
else shipping = 5;
console.log(shipping);

//11.
let password = 123;
let isLoggedIn;
if (password === "secret123") isLoggedIn = true;
else isLoggedIn = false;
console.log(isLoggedIn);

//12.
let month = 7;
let season;
if (month === 12 || month === 1 || month === 2) {
  season = "Winter";
} else if (month >= 3 && month <= 5) {
  season = "Spring";
} else if (month >= 6 && month <= 8) {
  season = "Summer";
} else if (month >= 9 && month <= 11) {
  season = "Fall";
} else {
  season = "Invalid month";
}
console.log(season);

//13.
let income = 60000;
let creditScore = 750;
let loanApproved;

if (income > 50000 && creditScore > 700) {
  loanApproved = true;
} else {
  loanApproved = false;
}
console.log(loanApproved);

//14.
let age2 = 23;
let discount;

if (age2 < 18 || age2 > 65) discount = 0.2;
else discount = 0;
console.log(discount);

//15.
let number2 = 7;
let inRange;
if (number2 >= 1 && number2 <= 10) inRange = true;
else inRange = false;
console.log(inRange);

//16.
let dayNumber2 = 4;
let dayName2;
switch (dayNumber2) {
  case 1:
    dayName2 = "Sunday";
    break;
  case 2:
    dayName2 = "Monday";
    break;
  case 3:
    dayName2 = "Tuesday";
    break;
  case 4:
    dayName2 = "Wednesday";
    break;
  case 5:
    dayName2 = "Thursday";
    break;
  case 6:
    dayName2 = "Friday";
    break;
  case 7:
    dayName2 = "Saturday";
    break;
  default:
    dayName2 = "Invalid day number";
    break;
}
console.log(dayName2);

//17.
let grade2;
let description;
switch (grade2) {
  case "A":
    description = "Excellent";
    break;
  case "B":
    description = "Good";
    break;
  case "C":
    description = "Average";
    break;
  case "D":
    description = "Below Average";
    break;
  case "F":
    description = "Fail";
    break;
  default:
    description = "Invalid grade";
    break;
}
console.log(description);

//18.
let number3 = 7;
let sign;
if (number3 > 0) sign = "Positive";
else if (number3 < 0) sign = "Negative";
else sign = "Zero";
console.log(sign);

//19.
let year2;
let isCenturyLeapYear;
if (year2 % 100 === 0 && year2 % 400 === 0) isCenturyLeapYear = true;
else isCenturyLeapYear = false;
console.log(isCenturyLeapYear);

//20.
let month2 = 2;
let daysInMonth;
switch (month2) {
  case 1: // January
  case 3: // March
  case 5: // May
  case 7: // July
  case 8: // August
  case 10: // October
  case 12: // December
    daysInMonth = 31;
    break;
  case 4: // April
  case 6: // June
  case 9: // September
  case 11: // November
    daysInMonth = 30;
    break;
  case 2: // February
    daysInMonth = 28;
    break;
  default:
    daysInMonth = "Invalid month";
    break;
}
console.log(daysInMonth);

//More Difficult Exercises (21-30)

//21.
let number4 = 8;
let sign2;
let parity;

if (number4 >= 0) {
  sign2 = "Positive";
  if (number4 % 2 === 0) parity = "Even";
  else parity = "Odd";
} else if (number4 < 0) {
  sign2 = "Negative";
  if (number4 % 2 === 0) parity = "Even";
  else parity = "Odd";
}
console.log(`Sign: ${sign2}`);
console.log(`Parity: ${parity}`);

//22.
let score2 = 90;
let attendance = 50;
let grade3;
if (score2 >= 90) grade3 = "A";
else if (score2 >= 80) grade3 = "B";
else if (score2 >= 70) grade3 = "C";
else if (score2 >= 60) grade3 = "D";
else grade3 = "F";
//lower it by one level if attendance is less than 80%.
if (attendance < 80) {
  if (grade3 === "A") grade3 = "B";
  else if (grade3 === "B") grade3 = "C";
  else if (grade3 === "C") grade3 = "D";
  else if (grade3 === "D") grade3 = "F";
}
console.log(`Grade: ${grade3}`);

//23.
let year3;
let isLeapYear2;
if (year3 % 4 === 0 || year3 % 400 === 0) isLeapYear2 = true;
else isLeapYear2 = false;
console.log(isLeapYear2);

//24.
let age3;
let isEmployed;
let isStudent;
let category;
if (isStudent) console.log(isStudent);
else if (age >= 18 && age < 65) {
  if (isEmployed) {
    category = "Employed Adult";
  } else {
    category = "Unemployed Adult";
  }
} else category = "Retiree";
console.log(category);

//25.
let month3 = 3;
let season2;

switch (month3) {
  case 12: // December
  case 1: // January
  case 2: // Februry
    season2 = "Winter";
    break;
  case 3: // March
  case 4: // April
  case 5: // May
    season2 = "Spring";
    break;
  case 6: // June
  case 7: // July
  case 8: // August
    season2 = "Summer";
    break;
  case 9: // September
  case 10: // October
  case 11: // November
    season2 = "Fall";
    break;
  default:
    season2 = "Invalid month";
    break;
}
console.log(season2);

//26. /// לא הבנתי כלום נעזרתי באינטרנט,צריך הסבר.

let x = 5; // You can change this value to test different x coordinates
let y = -3; // You can change this value to test different y coordinates
let quadrant;

if (x > 0) {
  if (y > 0) {
    quadrant = 1; // x > 0 and y > 0
  } else if (y < 0) {
    quadrant = 4; // x > 0 and y < 0
  } else {
    quadrant = "On the X-axis"; // y == 0
  }
} else if (x < 0) {
  if (y > 0) {
    quadrant = 2; // x < 0 and y > 0
  } else if (y < 0) {
    quadrant = 3; // x < 0 and y < 0
  } else {
    quadrant = "On the X-axis"; // y == 0
  }
} else {
  if (y !== 0) {
    quadrant = "On the Y-axis"; // x == 0 and y != 0
  } else {
    quadrant = "Origin"; // x == 0 and y == 0
  }
}
console.log(quadrant); // This will print the quadrant or location of the point

//27. //לא הבנתי כל כך את השאלה.
let temperature2;
let pressure;
let stateOfWater;
if (temperature2 <= 0) stateOfWater = "solid";
else if (temperature2 > 0 && temperature2 < 100) stateOfWater = "liquid";
else stateOfWater = "gas";
console.log(stateOfWater);

//28.
let month4;
let isLeapYear3;
let daysInMonth2;
switch (month4) {
  case 1: // January
  case 3: // March
  case 5: // May
  case 7: // July
  case 8: // August
  case 10: // October
  case 12: // December
    daysInMonth = 31;
    break;
  case 4: // April
  case 6: // June
  case 9: // September
  case 11: // November
    daysInMonth = 30;
    break;
  case 2: // February
    if (isLeapYear) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
    break;
  default:
    daysInMonth = "Invalid month";
    break;
}
console.log(daysInMonth);

//29.
let a = 3;
let b = 4;
let c = 5;
let canBeTriangle;
if (a + b > c && a + c > b && b + c > a) {
  canBeTriangle = true;
} else {
  canBeTriangle = false;
}
console.log(canBeTriangle);

//30. //אין לי מושג מה זה עושה.
let a2 = 1;
let b2 = -3;
let c2 = 2;

let discriminant = b2 * b2 - 4 * a2 * c2;
let root1, root2;

if (discriminant > 0) {
  // Two distinct real roots
  root1 = (-b2 + Math.sqrt(discriminant)) / (2 * a2);
  root2 = (-b2 - Math.sqrt(discriminant)) / (2 * a2);
  console.log("Two distinct real roots: " + root1 + " and " + root2);
} else if (discriminant === 0) {
  // One real root
  root1 = -b2 / (2 * a2);
  console.log("One real root: " + root1);
} else {
  // No real roots
  console.log("No real roots. The roots are complex.");
}

//31.
let number5 = 7;
let parity2 = number5 % 2 === 0 ? "even" : "odd";
console.log(parity2);

//32.
let age4 = 20;
let canVote2 = age4 >= 18 ? true : false;
console.log(canVote2);
