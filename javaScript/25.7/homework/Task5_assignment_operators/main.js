//1,2.
let x = 7;

//3.
let y = 5;
x += y; // x = x + y;

//4.
x += y; // x =x+5;

//5.
x -= y; // x = x-y;

//6.
y = 5;
y -= 3;
console.log(y); // Outputs: 2

//7.
x = 7;
y = 5;
console.log((x *= y)); // x= x*y //35

//8.
let z = 5;
console.log((z *= 2)); //10

//9,10.
let w = 16;
console.log((w /= 4)); // w = w / 4 //outputs 4

//11.
let x1 = 5;

x1 = x1 + 1;
console.log(x1); // Outputs: 6

x1 += 1;
console.log(x1); // Outputs: 7

//12.
let age = 23;
console.log((age += 1));

//13,14.
let greeting = "Hello";
greeting += " friends";
console.log(greeting); // Outputs: "Hello friends"

//15.
let x2 = 5;
console.log((x2 += 3)); //outputs 8
