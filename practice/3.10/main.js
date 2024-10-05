// forEach – לחזרה על אלמנטים וביצוע פעולה.
// map – ליצירת מערך חדש עם ערכים מעובדים.
// filter – לסינון מערכים לפי תנאים.
// reduce – לצמצום מערך לערך יחיד.
// some ו-every – לבדיקת תנאים על אלמנטים.
// find ו-findIndex – למציאת אלמנטים לפי תנאים.
// sort – למיון מערכים.
// flat – ליישור מערכים מקוננים.

const array = [1, 2, 3, 4, 5];

// //1.
// array.forEach(function (element) {
//   console.log(element);
// });

// //2.
// array.forEach(function (element) {
//   console.log(element * 2);
// });

// //3.
// const squaredArray = [];
// array.forEach(function (element) {
//   squaredArray.push(element * element);
// });
// console.log(squaredArray);

// //4.
// let sum = 0;
// array.forEach(function (element) {
//   sum += element;
// });
// console.log(sum);

// //5.
// const array2 = ["Hello", " ", "World", "!"];
// let result = "";
// array2.forEach(function (element) {
//   result += element;
// });
// console.log(result);

// //6.
// const doubleArray = array.map(function (element) {
//   return element * 2;
// });
// console.log(doubleArray);

// //7.
// const words = ["תפוח", "בננה", "דובדבן"];
// const lengthsArray = words.map((word) => word.length);
// console.log(lengthsArray);

// //8.
// const numbers = [1, 4, 9, 16, 25];
// const squareRoots = numbers.map(function (num) {
//   return Math.sqrt(num);
// });
// console.log(squareRoots);

// //9.
// const words = ["hello", "world"];
// const upperCaseWords = words.map(function (word) {
//   return word.toUpperCase();
// });
// console.log(upperCaseWords);

// //10.
// const booleans = [true, false, true];
// const invertedBooleans = booleans.map(function (bool) {
//   return !bool;
// });
// console.log(invertedBooleans);

// //11.
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(evenNumbers);

// //12.
// const words = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
// const longWords = words.filter((word) => word.length > 5);
// console.log(longWords);

// //13.
// const numbers = [5, 10, 15, 20, 25];
// const newArray = numbers.filter((num) => num > 10);
// console.log(newArray);

// //14.
// const words = ["תפוח", "בננה", "תפוז", "דובדבן"];
// const startsWithTav = words.filter((word) => word.startsWith("ת"));
// console.log(startsWithTav);

// //15.
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenIndexElements = numbers.filter((num, index) => index % 2 === 0);
// console.log(evenIndexElements);

// //16.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);

// //17.
// const numbers = [1, 2, 3, 4, 5];
// const multiplierArray = numbers.reduce(
//   (accumulator, currentValue) => accumulator * currentValue,
//   1
// );
// console.log(multiplierArray);

// //18.
// const numbers2 = [10, 5, 15, 20, 25];
// const maxNumber = numbers2.reduce((accumulator, currentValue) =>
//   Math.max(accumulator, currentValue)
// );
// console.log(maxNumber);

// //19.
// const strings = ["שלום", " ", "עולם", "!"];
// const concatenatedString = strings.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   ""
// );
// console.log(concatenatedString);

// //20.
// const numbers2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// function countNums(accumulator, currentValue) {
//   if (accumulator[currentValue]) {
//     accumulator[currentValue] += 1;
//   } else {
//     accumulator[currentValue] = 1;
//   }
//   return accumulator;
// }
// const nums = numbers2.reduce(countNums, {});
// console.log(nums);

// //21.
// const numbers = [1, 2, 3, 4, 5];
// const hasGreaterThanThree = numbers.some((num) => num > 3);
// console.log(hasGreaterThanThree);

// //22.
// const evenNumbers = [2, 4, 6, 8, 10];
// const allEven = evenNumbers.every((num) => num % 2 === 0);
// console.log(allEven);

// //23.
// const fruits = ["תפוח", "בננה", "דובדבן"];
// const hasLongString = fruits.some((fruit) => fruit.length > 6);
// console.log(hasLongString);

//24.
// const animals = ["חתול", "כלב", "פיל"];
// לא הבנתי מה מבקשים

// //25.
// const booleanValues = [false, false, true, false];
// const hasTrueValue = booleanValues.some((value) => value === true);
// console.log(hasTrueValue);

// //26.
// const numbers = [1, 2, 3, 4, 5];
// const firstGreaterThanThree = numbers.find((num) => num > 3);
// console.log(firstGreaterThanThree);

// //27.
// const numbers = [1, 3, 5, 2, 4, 6];
// const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
// console.log(firstEvenIndex);

// //28.
// const fruits = ["תפוח", "בננה", "דובדבן"];
// const firstLongString = fruits.find((fruit) => fruit.length > 5);
// console.log(firstLongString);

// //29.
// const fruits = ["תפוח", "בננה", "דובדבן", "תמר"];
// const cherryIndex = fruits.findIndex((fruit) => fruit === "דובדבן");
// console.log(cherryIndex);

// //30.
// const numbers = [1, 2, 3, -4, 5, -6];
// const firstNegative = numbers.find((num) => num < 0);
// console.log(firstNegative);

// //31.
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// //32.
// const fruits = ["בננה", "דובדבן", "תפוח", "תמר"];
// fruits.sort();
// console.log(fruits);

// //33.
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// //34.
// const fruits = ["בננה", "דובדבן", "תפוח", "תמר"];
// fruits.sort((a, b) => a.length - b.length);
// console.log(fruits);

// //35.
// const people = [
//   { name: "יוחנן", age: 25 },
//   { name: "יעל", age: 30 },
//   { name: "בועז", age: 20 },
// ];
// people.sort((a, b) => a.age - b.age);
// console.log(people);

// //36.
// const arr = [1, [2, 3], [4, [5, 6]]];
// const flatArr = arr.flat();
// console.log(flatArr); //  [1, 2, 3, 4, [5, 6]]

// //37.
// const arr = [1, [2, [3, [4]]]];
// const flatArr = arr.flat(2);
// console.log(flatArr);

// //38.
// const arr = [1, 2, , 4, 5];
// const flatArr = arr.flat();
// console.log(flatArr);

// //39.
// const arr = ["א", ["ב", "ג"], "ד"];
// const flatArr = arr.flat();
// console.log(flatArr);

// //40.
// const arr = [1, [2, [3, [4, [5]]]]];
// const flatArr = arr.flat(Infinity);
// console.log(flatArr);
