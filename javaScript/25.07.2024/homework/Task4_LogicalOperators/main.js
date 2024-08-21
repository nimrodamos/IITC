//1+2.
// 3 examples
let isMember = true; // Customer is a member.
let madePurchase = false; // Customer has not made a purchase.

if (isMember && madePurchase) {
  console.log("Eligible for discount.");
} else if (isMember || madePurchase) {
  console.log("Not eligible for discount. But you are close!");
} else {
  console.log("Not eligible for discount.");
}
//3.
console.log(true && true); //true

//4.
console.log(true && false); // false

//5.
let a = true;
let b = false;
console.log(a || b); // true (a is true)
// like you said in the Hint: It returns true if at least one operand is true.

//6.
console.log(false || true); // true

//7.
console.log(false || false); // false ,like you said in the Hint: It returns true if at least one operand is true.

//8.
let aa = true;
console.log(!aa); // false
let bb = false;
console.log(!bb); // true

//9.
console.log(!true); // false

//10.
console.log(!false); // true

//11.
console.log(true && true && false); //false

//12.
console.log(false || false || true); //true

//13.
/*
NOT (!):  first.
AND (&&): next.
OR (||):  last.
*/

//14. לא הבנתי את השאלה

//15.
let a1 = false;
let b1 = true;

console.log(a1 && b1); // Outputs: false, and `b` is not evaluated because `a` is falsy.

//16.
let a2 = true;
let b2 = false;

console.log(a2 || b2); // Outputs: true, and `b` is not evaluated because `a` is truthy.

//17.
console.log(5 > 3 && 2 < 4); //true

//18.
console.log(5 > 7 || 3 < 2); //false

//19.
console.log(!(5 > 3)); // false

//20.
let a3 = false;
let b3 = true;
let c3 = true;
// Without parentheses
console.log(a3 || (b3 && c3));
// With parentheses
console.log((a3 || b3) && c3);
