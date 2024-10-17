//A tuple works like an array, but it can contain different types of elements.
/* The number of elements in the tuple is fixed. The types of elements are known in advance. */

let tuple: [string, number, boolean] = ['apple', 6, true];

// Accessing elements of a tuple
console.log(tuple[0]); // Output: 'apple'
console.log(tuple[1]); // Output: 5
console.log(tuple[2]); // Output: true

// Trying to access an element out of bounds
// console.log(tuple[3]); // Error: Tuple index '3' is out of bounds

// Modifying a tuple
tuple[1] = 10;
console.log(tuple); // Output: ['apple', 10, true]

// Tuples with different types
let tuple2: [string, number, any, Float32Array] = ['banana', 3, 1.5, new Float32Array([3.353])];

// Tuples with optional elements
let tuple3: [string, number?, boolean?] = ['orange'];

// Tuples with rest elements
let tuple4: [string, ...number[]] = ['grape', 1, 2, 3];

// Tuples with read-only elements
let tuple5: readonly [string, number] = ['pineapple', 4];

console.log(tuple2, tuple3, tuple4, tuple5);
/*
The '?' in the tuple definition is used to denote optional elements. 
In TypeScript, optional elements in tuples are defined by appending a '?' after the element type.
 This means that the tuple can have fewer elements than the specified length, and the missing elements can be of any type. 
*/
let bgColor, headerColor: [number, string?, number?];
bgColor = [0, 0.5];
headerColor = [0, 'green', 0.8];
console.log(bgColor , headerColor.length);