// The Number type

/* The number : 
- Is a primitive data type in TypeScript.
- Represents both integer and floating-point numbers.
- Supports arithmetic operations, comparisons, and type conversions.
- Is a built-in type in TypeScript.
*/
//Decimal number
let price: number = 10.5;
//Binary number
/* The binary number uses a leading Zero followed by a lowercase or uppercase letter
"B" e.g, 0b or 0B */
let binaryNumber : number = 0b100;
let anotherBinary : number = 0B010;

//Type casting
let xx : number = 10;
let yx : string = xx.toString();

//Type coercion
let x1 : number = 10;

let y1 : any = x1 + "20";
console.log(y1);
console.log(yx);

//Number functions

let num : number = 10;
console.log(Math.sqrt(num));
console.log(Math.abs(-10));
console.log(Math.floor(10.8));
console.log(Math.ceil(10.2));
console.log(Math.round(10.5));

//Infinity and NaN

let infinityNum : number = Infinity;
let negativeInfinityNum : number = -Infinity;
let nanNum : number = NaN;

console.log(infinityNum);
console.log(negativeInfinityNum);
console.log(nanNum);

//OCtrol flow analysis of number types

/* An octal number uses a leading Zero followed the letter 
"O" e.g, 0O or 0o */
let octalNumber : number = 0o10;

//Hexadecimal number
/* 
The hexadecimal number uses a leading Zero followed by a lowercase or uppercase letter
"X" e.g, 0x or 0X */ 
let hexadecimalNumber : number = 0x10;
console.log(octalNumber);
console.log(octalNumber);

//Number Range
let maxNumber : number = Number.MAX_VALUE;

console.log(maxNumber);

let minNumber : number = Number.MIN_VALUE;

console.log(minNumber);

//Bigint
/* The bigint type represents whole numbers larger than 2^53 - 1, which is the maximum
value of the JavaScript number type. */
let big: bigint = 9007199254740991n;
console.log(big);