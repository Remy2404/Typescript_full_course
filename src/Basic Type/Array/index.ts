// Array is an ordered collection of elements of the same type.

let myArray : any[];
myArray = [1,2,3,4,5 ,'hello'];
myArray.push('Ramy');
myArray.push(6);
myArray[4] = 'world';
console.log(typeof myArray);
let doubletAr = myArray.map((value) => value * 2);
console.log(myArray.toLocaleString());
console.log(doubletAr.flatMap ((value) => [value, value*2]));

// Storing values of mixed types 
let mixArray : (string | number |boolean )[] = ['Ramy', "4", true, 2, false];
console.log(mixArray.filter((value) => typeof value === 'string'));

