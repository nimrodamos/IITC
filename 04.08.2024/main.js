let students = [
  { id: "1", name: "baba", grade: 100 },
  { id: "2", name: "nadav", grade: 70 },
  { id: "3", name: "matan", grade: 30 },
];

// // TODO :
// 1. write a function that takes array of objects and a key
// 2.return a new array with the values of the given key

// function getValuesFromKey(array, key) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i][key]);
//   }
//   return newArray;
// }

// console.log(getValuesFromKey(students, "id"));
// console.log(getValuesFromKey(students, "name"));
// console.log(getValuesFromKey(students, "grade"));

//TODO :
// 1. write a function that take an array of students
// 2. return a new array with only students with grade greater then (n)

// function getPassStudents(array, minGrade) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].grade > minGrade) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// console.log(getPassStudents(students, 50));

// // TODO :
// 1. write a function that takes array of names
// 2.return a new array with objects that have a "name" key and a value
//3. add "id" to each object (use "i" for this)

// function createPersons(names) {
//   let persons = [];
//   for (let i = 0; i < names.length; i++) {
//     let person = { name: names[i] };
//     persons.push(person);
//   }
//   return persons;
// }

// console.log(createPersons(["yossi", "liraz", "baba"]));

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
// let employees = [
//   { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
//   { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
//   { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
//   { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
//   { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
//   { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
// ];

// console.log(groupBy(employees, "department"));

// function groupBy(array, key) {
//   let group = {};
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     let groupKey = item[key];
//     if (group[groupKey] === undefined) {
//       group[groupKey] = [];
//     }
//     group[groupKey].push(item);
//   }

//   return group;
// }

/*
  {
    Engineering: [
      { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
    ],
    Marketing: [
      { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
      { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
      { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
    ]
  }
  */
