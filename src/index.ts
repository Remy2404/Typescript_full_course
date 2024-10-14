/* Basic Types */
//01. Tyepe of Annotations:
// Typescript use type annotations to specify the type of variables, parameters, and return values. 
let names: string = 'John';
let age: number = 25;
let active: boolean = true;
//02. Type Inference:
// Typescript can also infer the type of a variable based on its value.
let x = 10; // Typescript infers the type of x as number
let y = "Hello"; // Typescript infers the type of y as string
console.log(x, y);
//03. Type Annotations with Variables:
// You can also annotate the type of a variable using a colon (:) followed by the type.
let myName: string = "John Doe"; // Type annotation for a string variable
let myAge: number = 30; // Type annotation for a number variable
let isStudent: boolean = true; // Type annotation for a boolean variable

//Array Types:
let numbers : number[] = [1, 2, 3, 4, 5];
let strings : string[] = ['apple', 'banana', 'cherry'];
let booleans : boolean[] = [true, false, true];
let anyArray : any[] = [1, 'hello', true, {name: 'John'}];

console.log(numbers, strings, booleans, anyArray); 

//object Types:
let person : {
    name : string,
    age : number,
    isStudent : boolean
    address : {
        street : string,
        city : string,
        zipCode : number
    }
};
person = {
    name : 'Phon Ramy',
    age : 21,
    isStudent : true,
    address : {
        street : '123 Main St',
        city : 'phnom Penh',
        zipCode : 12000
 }
};
console.log(person);

