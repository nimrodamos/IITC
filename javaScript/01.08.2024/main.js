//30 Easy Nested Loop Exercises in JavaScript

//1.
/*
function printGrid(g) {
  let row = "";
  for (let i = 0; i < g; i++) {
    for (let j = 0; j < g; j++) {
      row += "* ";
    }
    row += `\n`;
  }
  console.log(row);
}
printGrid(2);
*/

//2.
/*
function print123(g,h) {
  let counter = 1;
  for (let i = 0; i < g; i++) {
    let row = "";
    for (let j = 0; j < h; j++) {
      row += counter + " ";
      counter++;
    }
    console.log(row);
  }
}
print123(2,2));
*/

//3.
/*
function raTriangle() {
  for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
raTriangle();
*/

//4

/*
function printGridSum(p) {
  let row = "";
  for (let i = 0; i <= p; i++) {
    for (let j = 0; j <= p; j++) {
      row += i + j + " ";
    }
    row += `\n`;
  }
  console.log(row);
}
printGridSum(2);
*/

//5.
/*
function printGrid(p) {
  let row = "";
  for (let i = 1; i <= p; i++) {
    for (j = 1; j <= p; j++) {
      row += i * j + " ";
    }
    row += `\n`;
  }
  console.log(row);
}
printGrid(3);
*/
