//100+ Array Exercises

//1.
let fruits = [];
//2.
let numbers = [1, 2, 3, 4, 5];
//3.
let colors = ["red", "green", "blue"];
//4.
let mixed = [42, "hello", true];
//5.
let seasons = ["Spring", "Summer", "Autumn", "Winter"];

//6.
console.log(numbers.length);

//7.
let emptyCheck = [];
if (emptyCheck.length === 0) {
  console.log("The array is empty.");
} else {
  console.log("The array is not empty.");
}

//8.
let dynamic = [10, 20, 30, 40, 50];
console.log(dynamic.length);

//9.
dynamic.push(60);
console.log(dynamic.length);

//10.
dynamic.pop();
console.log(dynamic.length);

//11.
console.log(colors[0]);

//12.
console.log(seasons[seasons.length - 1]);

//13.
console.log(numbers[Math.floor(numbers.length / 2)]);

//14.
console.log(fruits[10]);

//15.
console.log(`The second color is ${colors[1]}`);

//16.
fruits[0] = "apple";

//17.
numbers[numbers.length - 1] = 10;

//18.
numbers[2] *= 2;
console.log(numbers[2]);

//19.
for (let i = 0; i < colors.length; i++) {
  colors[i] = colors[i].toUpperCase();
}
console.log(colors);

//20.
let hold = seasons[0];
seasons[0] = seasons[seasons.length - 1];
seasons[seasons.length - 1] = hold;
console.log(seasons);

//21.
fruits.push("orange");
console.log(fruits);

//22.
let removeNum = numbers.pop();
console.log(removeNum);
console.log(numbers);

//23.
colors.push("yellow", "purple", "black");
console.log(colors);

//24.
let arrayNumbers = [];
for (let i = 1; i <= 5; i++) {
  arrayNumbers.push(i);
}
console.log(arrayNumbers);

//25.
do {
  let removedElement = arrayNumbers.pop();
  console.log(removedElement);
} while (arrayNumbers.length > 0);
