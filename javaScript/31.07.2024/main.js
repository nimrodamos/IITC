// // create object
// let person = {
//   fName: "nimrod",
//   lName: "amos",
//   age: 23,
//   city: "ramat gan",
//   favoriteFood: "pizza",
//   isStudent: false,
// };
// console.log("name: " + person.fName + ", Age: " + person.age);

// person.isStudent = true;
// console.log(person);

// let car = {
//   make: "tesla",
//   model: "model s",
//   year: 2023,
// };
// console.log("make: " + car.make + ", model " + car.model);
// car.year = 2024;
// console.log(car);

// let fruit = {
//   name: "apple",
//   color: "red",
//   sweetness: 7,
// };
// console.log("name: " + fruit.name + ", sweetness: " + fruit.sweetness);
// fruit.color = "green";
// console.log(fruit);

// let book = {
//   title: "book1",
//   author: "author1",
//   pages: 100,
// };
// console.log("title: " + book.title + ", author: " + book.author);
// book.pages = 50;
// console.log(book);

// let animal = {
//   species: "cow",
//   sound: "moo",
//   isWild: false,
// };
// console.log("species: " + animal.species + ", sound: " + animal.sound);
// animal.isWild = true;
// console.log(animal);

// //practice time in class
// let car = {
//   make: "tesla",
//   model: "",
//   year: 2023,
//   printDetails: function () {
//     console.log(car);
//   },
// };
// car.model = "model s";
// console.log(`model is: ${car.model}`);
// car.year = 2024;
// car.color = "red";
// console.log(car);
// car.printDetails();

// let keysAndValue = Object.keys(car);
// console.log(keysAndValue);

// for (let i = 0; i <= keysAndValue.length; i++) {
//   let key = keysAndValue[i];
//   console.log(key + ":" + car[keysAndValue[i]]);
// }

//7.

let person = {
  fName: "john",
  lName: "doe",
  age: 30,
  city: "tel aviv",
  favoriteFood: "pizza",
  isStudent: false,
  printDetailsOfPerson: function () {
    console.log(person);
  },
};
person.printDetailsOfPerson();

//8.

// let keysOfPerson = Object.keys(person);
// console.log(keysOfPerson);
