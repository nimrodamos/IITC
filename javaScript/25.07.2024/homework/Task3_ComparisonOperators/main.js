//1.
// 7 == 7;
// 7 === 7;

//2.
// == מנסה למצוא שיוון מכל סוג שהוא
// === שיוון מוחלט בלבד
console.log(5 == "5"); // true (string '5' is coerced to number 5)
console.log(0 == false); // true (false is coerced to number 0)

console.log(5 === "5"); // false (different types: number vs string)
console.log(0 === false); // false (different types: number vs boolean)

//3.
console.log(8 !== "5"); // true

//4.
console.log(8 > 5); //true

//5.
console.log(8 < 5); // false

//6.
console.log(7 >= 5); //true

//7.
console.log(7 <= 5); //false

//8.
console.log(5 > 3); // true

//9.
console.log(10 === 10); //true

//10.
console.log(7 <= 7); //true

//11+12.
console.log("apple" < "banana"); // true ('apple' comes before 'banana')

//13+14+15.
console.log(8 !== "5"); // true
console.log(5 !== "5"); // true (different types: number vs string)
console.log(5 !== 5); // false
