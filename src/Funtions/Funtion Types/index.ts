/* 
Function Types has two part: parameter types and return type.
when declaring a function, we specify the types of its parameters and return value.
 */
// (parameter: type, parameter:type,...) => type
let add2: (a: number, b: number) => number;
add2 = function (x: number, y: number) {
  return x + y;
};
let add3: (a: number, b: number) => number = function (x: number, y: number) {
  return x + y;
};
console.log(add3(2, 3));
console.log(add2(2, 3)); // Error: Type 'undefined' is not assignable to type 'number'.
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}
console.log(multiply(2, 3, 6));
