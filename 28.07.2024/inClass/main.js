// the `for` loop

//1
for (let i = 10; i > 0; i--) {
  console.log(i);
}

//2.
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

//3.
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(`sum of numbers ${sum}`);

//4.
for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}

//5.
for (let i = 0; i <= 5; i++) {
  console.log("*".repeat(i));
}

// the `while` loop

//1.

// //2.
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i = i * 2;
// }

// the do..while loop

//1.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

//2.
// let playAgain;

// do {
//   console.log("Playing the game...");
//   // Ask the user if they want to play again
//   playAgain = confirm("Do you want to play again?");
// } while (playAgain);

// console.log("Thanks for playing!");
