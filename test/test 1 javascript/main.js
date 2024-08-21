"use strict";

const student_1 = {
  name: "John",
  age: 17,
  grades: {},
};

const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: false,
};

const myProducts = [
  { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 500, categories: ["clothing"] },
  { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];

// 😅 Task 1: Update Student Age 😅 //
// TODO: Write a function to update the student's age (You can mutate the original object)
function updateAge(student, newAge) {
  student.age = newAge;
}

updateAge(student_1, 18);
//console.log("Updated Student:", student_1);

// 😅 Task 2: Add Product Category 😅 //
// TODO: Write a function to add a new category to the product (You can mutate the original object)
function addCategory(product, category) {
  product.categories.push(category);
}

addCategory(product_1, "gadgets");
//console.log("Updated Product:", product_1);

// 😅 Task 3: Check Product Availability 😅 //
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
function isProductAvailable(product) {
  if (product.isAvailable) {
    return true;
  } else return false;
}

const isAvailable = isProductAvailable(product_1);
//console.log("Is Product Available:", isAvailable);

// 🙂 Task 4: Find Product by Name 🙂//
// TODO: Write a function to find a product by name
function findProductByName(products, productName) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      return products[i];
    }
  }
}

const foundProduct = findProductByName(myProducts, "Phone");
//console.log("Found Product:", foundProduct);

// 🙂 Task 5: Count Products in Category 🙂//
// TODO: Write a function to count the number of products in a category
function countProductsInCategory(products, category) {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].categories.includes(category)) {
      count++;
    }
  }
  return count;
}

const count = countProductsInCategory(myProducts, "electronics");
//console.log("Products in Electronics:", count);

// 🙂 Task 6: Get Student Ages 🙂//

// TODO: Write a function to get an array of student ages
function getStudentAges(students) {
  const arrayOfStudent = [];
  for (let i = 0; i < students.length; i++) {
    arrayOfStudent.push(students[i].age);
  }
  return arrayOfStudent;
}

const ages = getStudentAges(students);
//console.log("Student Ages:", ages);

// 🤨 Task 7: Get Products by Category 🤨//
// TODO: Write a function to get products by category
function getProductsByCategory(products, category) {
  const arrayOfProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].categories.includes(category)) {
      arrayOfProducts.push(products[i]);
    }
  }
  return arrayOfProducts;
}

const electronics = getProductsByCategory(myProducts, "electronics");
//console.log("Electronics Products:", electronics);

// 🤨 Task 8: Get Average product prices 🤨//
// TODO: Write a function to get the average price of all products
function getAveragePrice(products) {
  let avePrice = 0;
  let sumOfPrice = 0;
  for (let i = 0; i < products.length; i++) {
    sumOfPrice += products[i].price;
  }
  avePrice = sumOfPrice / products.length;
  return avePrice;
}

const averagePrice = getAveragePrice(myProducts);
//console.log("Average Price:", averagePrice);

// 🤨 Task 9: Add Grade to Student 🤨//
// TODO: Write a function to add a grade to a student (You can mutate the original object)
function addGrade(student, subject, grade) {
  student.grades[subject] = grade;
}
addGrade(student_1, "math", 85);
//console.log("Updated Student:", student_1);

// 😥 Task 10: Count Occurrences of a Character 😥//
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
  let count = 0;
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings[i].length; j++) {
      if (strings[i][j] === char) count++;
    }
  }
  return count;
}

const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "c");
//console.log("Occurrences of 's':", s_count);
//console.log("Occurrences of 'b':", c_count);

// 😥 Task 11: Update Product Price by Name 😥..............................
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      product[i].price = newPrice;
    }
  }
}

//updatePriceByName(myProducts, "Phone", 550);
//console.log("Updated Products:", myProducts);

// 😥 Task 12: Get Uppercase Strings 😥//
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
function getUppercaseStrings(strings) {
  const uppercaseArray = [];
  for (let i = 0; i < strings.length; i++) {
    uppercaseArray.push(strings[i].toUpperCase());
  }
  return uppercaseArray;
}

const uppercaseStrings = getUppercaseStrings(strings);
//console.log("Uppercase Strings:", uppercaseStrings);

// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.

function groupStringsBySpaces(strings) {
    const groups = {};

    for (let i = 0; i < strings.length; i++) {
      for (let j = 0; j < strings[i].length; j++) {
      
    }
    return groups;
  }

const groupedStrings_1 = groupStringsBySpaces(strings);
// console.log("Grouped Strings By Spaces:", groupedStrings_1);

// 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.

function groupStringsByLength(strings) {
  // your code here
}

const groupedStrings_2 = groupStringsByLength(strings);
// console.log("Grouped Strings By Length:", groupedStrings_2);

// 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)
function capitalizeStrings(strings) {
  // your code here
}

const capitalizedStrings = capitalizeStrings(strings);
// console.log("Capitalized Strings:", capitalizedStrings);
