//1.
let x = 5;
console.log(typeof x); // Output: "number"

//2.
let myString1 = "Hello, World!";
let myString2 = "Hello, World!";
let username = "Nimrod";
let myString3 = "hello " + username;
console.log(myString1);
console.log(myString2);
console.log(myString3);

//3. מהאינטרנט כי לא למדנו
//null is explicitly set:
let myVar = null;
console.log(myVar); // Output: null
console.log(typeof myVar); // Output: "object"

// undefined is a default state:
let myVar1;
console.log(myVar1); // Output: undefined
console.log(typeof myVar1); // Output: "undefined"

//4. the same as question 1
let myNumber = 42;
console.log(typeof myNumber);

let myString = "Hello, world!";
console.log(typeof myString);

//5.
let result = 5 / 2;
console.log(typeof result); // Output: "number"

//6.
let isTrue = true;
console.log(typeof isTrue);

//7.
let user = {
  name: "nimrod",
  age: 23,
};
console.log(user);

//8. מתסבך קצת אבל הבנתי
let result1 = 0 / 0;
console.log(result1); // Output: NaN
console.log(typeof result1); // Output: "number"

/*דוגמה נוספת 
let result = Number("abc");
console.log(result); // Output: NaN
console.log(typeof result); // Output: "number"
*/

//9.
// == (Equality Operator):
// 7 == "7"; // true, because "7" is coerced to 7

//7 === "7"  // false, because 5 is a number and "7" is a string
//7 === 7    // true, because both the value and type are the same

let a = 5;
let b = "5";

console.log(a == b); // true, because "5" is coerced to 5
console.log(a === b); // false, because the types are different (number vs string)

//10.
let myString4 = "123";
let stringToNum = Number(myString4);
console.log(stringToNum); // 123

//11.
let result2 = "5" + 3;
// console.log(result2);
console.log(typeof result2); // output : "string"

//12.
let variable = true;
if (typeof variable === "boolean") console.log("Variable is a boolean");

function checkType(variable) {
  if (typeof variable === "string") {
    console.log("Variable is a string");
  } else if (typeof variable === "number") {
    console.log("Variable is a number");
  } else if (typeof variable === "boolean") {
    console.log("Variable is a boolean");
  } else {
    console.log("Variable is not string,number or boolean type");
  }
}

//13.
let firstName = "nimrod";
let lastName = "amos";
let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);

//14.
//The answer is in answer 13.

//15.
let y = 12345;
let stringy = y.toString();
console.log(stringy);
console.log(typeof stringy);

//16.
//In JavaScript, null is a primitive value. However, typeof returns "object".
//This is a well-known bug in JavaScript and has historical reasons.

let value = null;
console.log(typeof value);

//17.
const password = 123456;
console.log(password);

//18.
//When you add a string and a number in JavaScript, the number is implicitly converted to a string, and the two strings are concatenated.
//this is how we can handle that:

let string5 = "30";
let num = 10;
// Using Number()
let result3 = Number(string5) + num;
console.log(result3); // 40

// Using parseInt()
let result4 = parseInt(string5, 10) + num;
console.log(result4); // 40

// Using parseFloat()
let result5 = parseFloat(string5) + num;
console.log(result5); // 40

// Using unary plus
let result6 = +string5 + num;
console.log(result6); // 40

//19.
let result7 = 3 > 2;
console.log(typeof result7); // bolean

//20.
let text2 = 'my name is "nimrod amos"from ramat gan.';
let text3 = "It's alright.";
let text4 = "my name \\ is nimrod amos.";
console.log(text2);
console.log(text3);
console.log(text4);

//21.
/*
const xy = 30;
console.log(xy++); // eroor
insted do this:
*/
let xy = 30;
xy++;
console.log(xy);

//22.
let checkUndefined;
if (checkUndefined === undefined) {
  console.log(" variable is undefined");
}

//23.
let result8 = 10 + "5";
console.log(result8); // 105
console.log(typeof result8); // string

//24.
let isTrue1 = true;
let isFalse = false;
console.log(isTrue1); // true
console.log(isFalse); // false
//or
let isEqual = 5 === 5; // true

//25.
//Primitive Data Types:
let num1 = 10;
let num2 = num1;
num2 = 20;
console.log(num1); // 10
console.log(num2); // 20

//Objects:
let object1 = { name: "Nimrod" };
let object2 = object1;
object2.name = "Nimrod";

console.log(object1.name); // "Nimrod "
console.log(object2.name); // "Nimrod"
