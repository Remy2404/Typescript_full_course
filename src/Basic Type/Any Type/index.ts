/* 
Any Type in TypeScript can be assigned to any other type. This is known as type coercion.
This can lead to unexpected behavior and should be avoided unless absolutely necessary.

 */
const json = {
  latitude: 37.7749,
  longitude: -122.4194,
};
/* const currentLocation = JSON.parse(JSON.stringify(json));
console.log(currentLocation);
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist(); */ //error : Property 'willExist' does not exist on type 'number'

// Type assertion
let str: any = "Hello World";
let strLength: number = str;
console.log(strLength);

let strLength2: number = (str as string).length;

console.log(strLength2);
