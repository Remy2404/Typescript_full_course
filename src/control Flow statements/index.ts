/*
Table of contents:
-If else statement
-switch statement
-for loop
-while loop
-do while loop
-foreach loop
-break statement
-continue statement
-label statement
-enum statement
 */
const max = 100;
let counter = 0;
if (counter < max) {
  counter++;
}
console.log(counter);

//else statement
let number = 10;
if (number % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

//Ternary operator
let number1 = 10;
let result = number1 % 2 === 0 ? "Number is even" : "Number is odd";
console.log(result);

let discount: number = 0;
let itemCount = -11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else if (itemCount > 10) {
  discount = 15; // 15% discount
} else if (discount < 0) {
  throw new Error("The number of items cannot be negative!");
}
console.log(`You got ${discount}% discount. `);

//switch statement
let targetId: String = "btnDelete";

switch (targetId) {
  case "btnAdd":
    console.log("Adding a new item");
    break;
  case "btnEdit":
    console.log("Editing an existing item");
    break;
  case "btnDelete":
    console.log("Deleting an item");
    break;
  default:
    console.log("Unknown target ID");
}

// Group case : if you have a cide that is shared by multiple cases , you can group them using switch-case

let month = 2;
let year = 2024;

let day = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    day = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    day = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) day = 29;
    else day = 28;
    break;
  default:
    throw new Error("Invalid month");
}
console.log(`The month ${month} has ${day} days`);

// for loop :

// Display multiple columns
for (let i = 1; i <= 10; i++) {
  console.table({
    number: i,
    doubled: i * 2,
    squared: i * i,
  });
}
console.log("---------------------------------");
let i = 0;
for (;;) {
  console.log(i);
  i++;
  if (i > 9) break;
}
console.log("---------------------------------");

// while loop :
let count = 0;

while (count < 10) {
  console.log(count);
  count++;
}

console.log("---------------------------------");
/*
The do while statement excutes statement in its body surrounded by the do and while keywords at least once. 
 */

let k = 0;

do {
  console.log(k);
  k++;
} while (k < 10);
console.log("---------------------------------");
// foreach loop :
let index: number[] = [1, 2, 3, 4, 5];
for (let num of index) {
  console.log(num);
}
console.log("---------------------------------");

//continue statement :
for (let i = 0; i < 10; i++) {
  if (i % 2) continue;
  console.log(i);
}
console.log("---------------------------------");
