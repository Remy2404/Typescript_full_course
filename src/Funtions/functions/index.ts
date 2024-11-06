//Function in tyscript are building blocks of readable, maintainable, and type-safe code.

function add(a: number, b: number): number {
  return a + b;
}
const results = add(2, 5);
console.log(results);

//void function, it doesn't return anything

function printHello(): void {
  console.log("Hello, World!");
}

function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello, World!");

//Function with optional parameters:

function greet(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}! You are ${age} years old.`;
  } else {
    return `Hello, ${name}!`;
  }
}
console.log(greet("John"));
