//Additional JavaScript Loops Exercises

// //1.
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// //2.
// let i = 1;
// while (i <= 15) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// //3.
// let number;
// do {
//   number = parseInt(prompt("Please enter a number between 1 and 10:"));
//   if (number >= 1 && number <= 10) {
//     alert("Thank you! You entered a valid number.");
//   } else {
//     alert("Invalid number. Please try again.");
//   }
// } while (number < 1 || number > 10);

// //4.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// //5.
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
// console.log("Blast off!");

// //6.
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for (let i = 3; i <= 10; i++) {
//   let next = a + b; // מגדיר את המספר הבא
//   console.log(next);
//   a = b;
//   b = next;
// }

// //7.
// let roll;
// do {
//   roll = Math.floor(Math.random() * 6) + 1; //השורה מייצרת מספר אקראי שלם בין 1 ל-6
//   console.log("Rolled:", roll);
// } while (roll !== 3);
// console.log("Rolled a 3!");

// //8.
// let num7 = 7;
// for (let i = 0; i <= 10; i++) {
//   console.log(num7 + "*" + i + "=" + num7 * i);
// }

// //9.
// let Number = 1001;
// while (true) {
//   //טוב לדעת שאפשר לעשות ככה
//   if (Number % 3 === 0 && Number % 7 === 0) {
//     console.log("the number is " + Number);
//     break;
//   }
//   Number++;
// }

// //10.
// //סתם רציתי לבדוק את זה עם prompt
// let n = parseInt(prompt("enter a number for his factorial"));
// if (isNaN(n) || n < 0) {
//   console.log("Invalid number");
// } else {
//   let factorial = 1;
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//   }
//   console.log("the factorial of " + n + " is " + factorial);
// }

// //11.
// let secretNumber = Math.floor(Math.random() * 20) + 1;
// let guess;
// do {
//   guess = parseInt(prompt("enter a secret number"));
//   if (guess < 1 || guess > 20) {
//     console.log("enter a number between 1-20");
//   } else if (guess < secretNumber) console.log("higher");
//   else if (guess > secretNumber) console.log("lower");
//   else console.log("you guess the cuorret number");
// } while (guess !== secretNumber);

// 12.
