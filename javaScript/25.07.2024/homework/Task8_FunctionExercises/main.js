//1.
function greet() {
  console.log("Hello, World!");
}
greet();

//2.
function square(number) {
  return number * number;
}
console.log(square(5)); // Output: 25

//3.
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(10));

//4.
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("nimrod", "amos"));

//5.
function sumTwo(num1, num2) {
  return num1 + num2;
}
console.log(sumTwo(7, 3));

//6.
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(10, 7));

//7.
function greetPerson(name) {
  return `hello, ${name}!`;
}
console.log(greetPerson("nimrod"));

//8.
function getAbsoluteValue(number) {
  if (number < 0) {
    return -number;
  }
  return number;
}
console.log(getAbsoluteValue(-5)); // Output: 5

//9.
function calculateAverage(num1, num2) {
  return (num1 + num2) / 2;
}
console.log(calculateAverage(10, 20)); // Output: 15

//10.
function convertToUppercase(string) {
  return string.toUpperCase();
}
console.log(convertToUppercase("hello")); // Output: "HELLO"

//11.
function isPositive(number) {
  return number > 0;
}
console.log(isPositive(10)); // Output: true

//12.
function getFirstChar(string) {
  return string[0];
}
console.log(getFirstChar("hello")); // Output: "h"

//13.
function areaOfRectangle(width, height) {
  return width * height;
}
console.log(areaOfRectangle(10, 20));

//14.
function remainderDivision(num1, num2) {
  return num1 % num2;
}
console.log(remainderDivision(7, 2));

//15.
function logType(value) {
  console.log(typeof value);
}
logType(23);
logType("hello");
logType(true);

//16.
function invertBoolean(bool) {
  return !bool;
}
console.log(invertBoolean(true));
console.log(invertBoolean(false));

//17.
function concatenateStrings(string1, string2) {
  return string1 + string2;
}
console.log(concatenateStrings("Hello, ", "World!"));
console.log(concatenateStrings("nimrod", " amos"));

//18.
function findSmaller(num1, num2) {
  if (num1 < num2) return num1;
  else return num2;
}
console.log(findSmaller(5, 10));

//19.
function greetWithDefault(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greetWithDefault("nimrod"));
console.log(greetWithDefault());

//20.
function isLongString(string) {
  return string.length > 10;
}
console.log(isLongString("Short"));
console.log(isLongString(" very longggggggggggggggg"));
