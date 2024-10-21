/* 
Union Type :
Introduction to Union Types in TypeScript is a powerful feature that allows us to define a type that can be either of multiple other types.
-sometimes , you will run into  a function that expects a parameter that is either a number or string for example.
-Union types allow us to define a type that can be one of several types.
-Union types are defined using the pipe (|) character between the types it can be.

Syntax: type UnionType = Type1 | Type2 | Type3;

 */

function add(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string | boolean {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Invalid input types";
  }
}
console.log(add("hello", "world"));
console.log(add(10, 20));
