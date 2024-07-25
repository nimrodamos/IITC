//Task 1:
//Declare Variables:
let firstName = "nimrod";
let lastName = "amos";
let age = 23;
let isStudent = true;

//Boolean Expressions:
let isAdult = age >= 18;
let isJohn = firstName === "john";


//Task 2:
//Write a Function:
function greet(firstName,lastName)
{
    let fullName = firstName+" "+lastName;
    console.log("Hello, " +fullName+ "! Welcome to the IITC Bootcamp.");
}
greet ("nimrod","amos")

//Task 3:
//If and Else:
function checkAge(age)
{
    if (age<13)console.log("you are a child");
    else if (age>=13 && age<=17)console.log("you are a teenager");
    else if (age>=18 && age<=64)console.log("you are an adult");
    else console.log("You are a senior");
}
checkAge(15);

//Switch Statement:
let dayOfWeek ;

switch (dayOfWeek) {
    case "Monday":
      console.log("Start of the work week!");
      break;
    case "Tuesday":
      console.log("Today is Tuesday");
      break;
    case "Wednesday":
      console.log("Today is Wednesday");
      break;
    case "Thursday":
      console.log("Today is Thursday");
      break;
    case "Friday":
      console.log("Today is Friday");
      break;
    case "Saturday":
      console.log("Today is Saturday");
      break;
    case "Sunday":
      console.log("Today is Sunday");
      break;
    default:
      console.log("Invalid day");
}




  //Complex Conditions:

  let age2 ; 
  let isStudent2;

  function checkEligibility(age2,isStudent2)
{
    if (age2 < 18) {
        if (isStudent2) {
            console.log("You are a minor student.");
        } else {
            console.log("You are a minor non-student.");
        }
    } else if (age2 >= 18 && age2 <= 24) {
        if (isStudent2) {
            console.log("You are a young adult student.");
        } else {
            console.log("You are a young adult non-student.");
        }
    } else if (age2 >= 25) {
        if (isStudent2) {
            console.log("You are an adult student.");
        } else {
            console.log("You are an adult non-student.");
        }
    }
}
 checkEligibility(50,true);

 //String Comparison and Manipulation:

 let name;
 function formatName(name)
 {
let trimmedName =name.trim();
let lowerCaseName = trimmedName.toLowerCase();
return lowerCaseName;
 }

console.log(formatName("    NIMrod  "));  
console.log(formatName("  BABA "));   
console.log(formatName("  Ben"));          
console.log(formatName("     Charlie  "));   

let formattedUserName = formatName("    NimroD ");
if (formattedUserName === "admin") console.log("Welcome, Admin");
else (console.log("Welcome, " + formattedUserName));
 
//Nested If Statements:

let age3;
let isMember;
function checkDiscount (age3,isMember)
{
if(age3<18)
    {
    if(isMember)console.log("You get a 20% discount.");
    else console.log("You get a 10% discount.");
    }
if(age3>=65)
{
    if(isMember)console.log("You get a 30% discount.");
    else console.log("You get a 20% discount.");
}
if (age3>=18 && age3<=64)
    if(isMember)console.log("You get a 10% discount.");
else console.log("No discount available.");
}

checkDiscount (22,false);

//Login Validation:

let username ;
let password ;
function validateLogin(username,password)
{
let storedUsername = "correctUsername";
let storedPassword = "correctPassword";

if (username === storedUsername && password === storedPassword) {
    return "Login successful.";
} else {
    return "Invalid username or password.";
}
}

console.log(validateLogin("correctUsername", "correctPassword")); 
console.log(validateLogin("wrongUsername", "correctPassword"));   
console.log(validateLogin("correctUsername", "wrongPassword"));   
console.log(validateLogin("wrongUsername", "wrongPassword"));     

// Substring Extraction:
let firstName2; 
let lastName2;
function extractInitials(firstName2,lastName2)
{
    let firstInitial = firstName2.charAt(0).toUpperCase();
    let lastInitial = lastName2.charAt(0).toUpperCase();
    return '"'  + firstInitial + '.' + lastInitial + '"';
}
console.log(extractInitials("nimrod", "amos")); 

// String Replacement:

/*        הדרך המהירה לביצוע מהאינטרנט.
function maskEmail(email)
{   
    return email.replace(/^[^@]+/, "*****");
}
console.log(maskEmail("user@example.com"));
*/ 

let email;
//הדרך עם split
function maskEmail(email) 
{
    let parts = email.split("@");

    if (parts.length === 2)   //לא הצלחתתי להבין בדיוק את משמעות ה if 
    {
        return "*****@" + parts[1]; 
    } 
    else
    {
        return "Invalid email";
    }
}

console.log(maskEmail("user@gmail.com"));
console.log(maskEmail("NImrodamos@gmail.com")); 

//Nested If-Else:
let score;

function gradeCalculator(score)
{
if (score>=90) return "A";
else if (score>=80) return "B";
else if (score>= 70)return "C";
else if (score>=60)return "C";
else return "F";
}
console.log(gradeCalculator(95));
console.log(gradeCalculator(85));
console.log(gradeCalculator(75)); 
console.log(gradeCalculator(65));
console.log(gradeCalculator(55)); 

//Complex Boolean Conditions:   
let age4;
let isCitizen;    
function canVote(age4,isCitizen)
{
    if(age4>=18 && isCitizen)return"You are eligible to vote."
    else return "You are not eligible to vote."
}
console.log(canVote(20,false));

// String and Number Conversion:
let name2;
let age5;
function convertToUpperCaseAndAddAge(name2,age5)
{
    let upperCaseName = name2.toUpperCase();
    let ageString = age5.toString();
    return upperCaseName+ageString;
}
console.log(convertToUpperCaseAndAddAge("nimrod",23));

//Capitalize First Letter:
let word;
function capitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log (capitalize("hello"));

//Check Substring:
let mainString;
let subString;
 function containsSubstring(mainString,subString)
 {
    return mainString.includes(subString);
}
console.log(containsSubstring("Hello, world!", "world"));
console.log(containsSubstring("i love to eat", "pizza"));
 
