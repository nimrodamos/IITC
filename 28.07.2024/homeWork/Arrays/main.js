// //practice exercises

// //1.
// let favoriteFoods = ["pizza", "burger", "steak", "sushi", "salad"];
// console.log(favoriteFoods);

// //2.
// console.log(favoriteFoods[2]);

// //3.
// favoriteFoods[1] = "pasta";
// console.log(favoriteFoods);

// //4.
// favoriteFoods.push("rice");
// console.log(favoriteFoods);

// //5.
// favoriteFoods.shift();
// console.log(favoriteFoods);

// //6.
// let i = 0;
// for (i = 0; i < favoriteFoods.length; i++) {
//   console.log(favoriteFoods[i]);
// }

// //7.
// let foodIndex = favoriteFoods.indexOf("steak");
// console.log(foodIndex);

// //8.

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum); // Output: 150

/// JavaScript Array Exercises

//1.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

//2.
fruits.push("orange");
console.log(fruits);

//3.
let lastFruit = fruits.pop();
console.log(lastFruit);

//4.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);

//5.
fruits[1] = "kiwi";
console.log(fruits);

//6.
let colors = [];
colors.push("red", "green", "blue");
console.log(colors);

//7.
colors.shift();
console.log(colors);

//8.
colors.unshift("yellow");
console.log(colors);

//9.
let numbers2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers2.length; i++) {
  sum += numbers2[i];
}
console.log(sum);

//10.
console.log(colors.indexOf("green"));

//11.
let randomNumbers = [
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
  Math.random(),
];
let largest = randomNumbers[0];
for (let i = 1; i < randomNumbers.length; i++) {
  if (randomNumbers[i] > largest) {
    largest = randomNumbers[i];
  }
}
console.log(largest);

//12.
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

//13.
let numbersArray = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbersArray.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Prints [2, 4, 6]

//14.
let colorsString = colors.join(", ");
console.log(colorsString); // Prints "yellow, green, blue"

//15.
let numbers3 = [1, 2, 3, 4, 5];
let numbers4 = [6, 7, 8, 9, 10];
let combineNumbers = numbers3.concat(numbers4);
console.log(combineNumbers);

//16.
fruits.reverse();
console.log(fruits);

//17.
let names = ["nimrod", "tal", "tomer"];

let greetings = names.map((name) => "Hello, " + name);
console.log(greetings);

//18.
let allPositive = numbersArray.every((num) => num > 0);
console.log(allPositive);

//19.
let numbersList = [5, 8, 12, 19, 23];
let firstGreaterThanTen = numbersList.find((num) => num > 10);
console.log(firstGreaterThanTen); // Prints 12

//20.
let checkBanana = fruits.some((fruits) => fruits === "banana");
console.log(checkBanana);

//21.
let numArray = [1, 2, 3, 4];
let product = numArray.reduce((count, num) => count * num, 1);
console.log(product); // Prints 24

//22.
let squares = [];
for (let i = 1; i <= 10; i++) {
  squares.push(i * i);
}
console.log(squares);

//23.
let words = ["apple", "banana", "year", "date"];
let longWords = words.filter((word) => word.length > 5);
console.log(longWords);

//24.
let hasPurple = colors.includes("purple");
console.log(hasPurple); // Prints false

//console.log(colors.includes("purple"));  גם תופס

//25.

/// chatgpt ;)
let board = [
  ["X", "O", "X"],
  ["O", "X", ""],
  ["", "O", "X"],
];
function printBoard(board) {
  for (let row of board) {
    console.log(row.join(" | "));
  }
}
printBoard(board);
