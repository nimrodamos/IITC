//1
function getStringLength(string) {
  return string.length;
}
console.log(getStringLength("Hello"));

//2.
function convertToUppercase(string) {
  return string.toUpperCase();
}
console.log(convertToUppercase("hello"));

//3.
function convertToLowercase(string) {
  return string.toLowerCase();
}
console.log(convertToLowercase("HELLO"));

//4.
function getCharAtIndex(string, index) {
  return string.charAt(index);
}
console.log(getCharAtIndex("hello", 1)); // e
console.log(getCharAtIndex("hello", 3)); // l

//5.
function extractSubstring(string, start, end) {
  return string.substring(start, end);
}
console.log(extractSubstring("Hello World", 0, 5));

//6.
function replaceAllOccurrences(string, searchValue, newValue) {
  return string.replace(new RegExp(searchValue, ""), newValue);
}
console.log(replaceAllOccurrences("Hello to World", "World", "all"));

//7.
function trimWhitespace(string) {
  return string.trim();
}
console.log(trimWhitespace("  Hello World  "));

//8.
function startsWithValue(string, value) {
  return string.startsWith(value);
}
console.log(startsWithValue("Hello World", "Hello"));

//9.
function endsWithValue(string, value) {
  return string.endsWith(value);
}
console.log(endsWithValue("Hello World", "World"));

//10.
function searchString(string, value) {
  return string.indexOf(value);
}
console.log(searchString("Hello World", "World"));

//11.
function splitString(string, separator) {
  return string.split(separator);
}
console.log(splitString("Hello World", " "));

//12.
function repeatString(string, times) {
  return string.repeat(times);
}
console.log(repeatString("Hello", 3));

//13.
function concatenateStrings(string1, string2) {
  return string1 + string2;
}
console.log(concatenateStrings("Hello", " World"));

//14. // chatgpt
function padString(str, length, char, padStart = true) {
  return padStart ? str.padStart(length, char) : str.padEnd(length, char);
}
console.log(padString("Hi", 5, "*")); // Output: "***Hi"
console.log(padString("Hi", 5, "*", false)); // Output: "Hi***"

//15.
function extractFirstNCharacters(string, n) {
  return string.slice(0, n);
}
console.log(extractFirstNCharacters("Hello World", 5));
console.log(extractFirstNCharacters("Hello World", 4));

//16.
function replaceFirstOccurrence(string, searchValue, newValue) {
  return string.replace(searchValue, newValue);
}
console.log(replaceFirstOccurrence("Hello World World", "World", "to my"));

//17.
function includesValue(string, value) {
  return string.includes(value);
}
console.log(includesValue("Hello World", "World"));

//18.
function getLastChar(string) {
  return string[string.length - 1];
}
console.log(getLastChar("Hello"));

//19.
function isEmptyString(string) {
  return string.length === 0;
}
console.log(isEmptyString(""));

//20.
function getStringFromIndex(string, index) {
  return string.slice(index);
}
console.log(getStringFromIndex("Hello World", 6));
