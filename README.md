---

# **TypeScript Full Course: From Beginner to Advanced**

## **Table of Contents**
1. [Introduction to TypeScript](#1-introduction-to-typescript)
   - 1.1 [Why TypeScript?](#11-why-typescript)
   - 1.2 [Setting Up TypeScript](#12-setting-up-typescript)
2. [TypeScript vs JavaScript](#2-typescript-vs-javascript)
   - 2.1 [Key Differences](#21-key-differences)
   - 2.2 [Pros and Cons](#22-pros-and-cons)
3. [TypeScript Basics](#3-typescript-basics)
   - 3.1 [Basic Types](#31-basic-types)
   - 3.2 [Type Annotations](#32-type-annotations)
   - 3.3 [Interfaces](#33-interfaces)
   - 3.4 [Enums](#34-enums)
   - 3.5 [Tuples](#35-tuples)
4. [Functions and Classes](#4-functions-and-classes)
   - 4.1 [Function Types](#41-function-types)
   - 4.2 [Optional and Default Parameters](#42-optional-and-default-parameters)
   - 4.3 [Classes](#43-classes)
5. [Advanced Types](#5-advanced-types)
   - 5.1 [Union and Intersection Types](#51-union-and-intersection-types)
   - 5.2 [Type Aliases](#52-type-aliases)
   - 5.3 [Generics](#53-generics)
   - 5.4 [Type Assertions](#54-type-assertions)
6. [Modules](#6-modules)
   - 6.1 [Export and Import](#61-export-and-import)
   - 6.2 [Default Exports](#62-default-exports)
7. [TypeScript with React](#7-typescript-with-react-bonus)
   - 7.1 [TypeScript in React Components](#71-typescript-in-react-components)
8. [TypeScript Tooling and Ecosystem](#8-typescript-tooling-and-ecosystem)
   - 8.1 [Linting with ESLint](#81-linting-with-eslint)
   - 8.2 [Prettier for Code Formatting](#82-prettier-for-code-formatting)
9. [Advanced TypeScript Concepts](#9-advanced-typescript-concepts)
   - 9.1 [Decorators](#91-decorators)
   - 9.2 [Advanced Generics](#92-advanced-generics)
10. [Conclusion](#10-conclusion)

---

## **1. Introduction to TypeScript**

### **1.1 Why TypeScript?**
TypeScript provides a robust type system that helps developers write more maintainable, scalable, and error-free code. It enables static typing, which helps catch bugs during development instead of runtime. With support for modern JavaScript features, TypeScript integrates smoothly into JavaScript projects.

### **1.2 Setting Up TypeScript**
To set up TypeScript in a project, you install the TypeScript compiler globally, initialize a TypeScript project, and configure `tsconfig.json`. This allows you to compile `.ts` files into JavaScript.

```bash
npm install -g typescript
```

```bash
tsc --init
```

---

## **2. TypeScript vs JavaScript**

### **2.1 Key Differences**

| Feature                | TypeScript                                  | JavaScript                                  |
|------------------------|---------------------------------------------|---------------------------------------------|
| **Typing**              | Static typing: You define types explicitly. | Dynamic typing: Types are inferred at runtime. |
| **Compilation**         | Requires compilation to JavaScript.         | Interpreted directly by browsers.            |
| **Error Checking**      | Type errors detected at compile time.       | Type errors can only be caught at runtime.   |
| **Type Definitions**    | Supports type annotations, interfaces, enums, etc. | Does not support static types.              |
| **Object-Oriented**     | Better support for OOP with classes, interfaces, and access modifiers. | Limited OOP features (ES6 classes).         |
| **Tooling**             | Stronger tooling support (e.g., autocompletion, refactoring). | Good tooling, but less comprehensive.       |
| **Learning Curve**      | Slightly steeper due to added complexity of types. | Easier to learn as it’s more flexible.      |

### **2.2 Pros and Cons**

#### **TypeScript Pros**
- **Static Typing**: Helps prevent many runtime errors by catching issues during development.
- **Better Tooling**: TypeScript’s type system enables better autocompletion, refactoring, and navigation.
- **Modern Features**: Full support for ES6+ features, making it future-proof.
- **Large Ecosystem**: Works well with JavaScript libraries and frameworks like React, Node.js.

#### **TypeScript Cons**
- **Learning Curve**: More complex, especially for developers coming from JavaScript.
- **Setup**: Requires an additional compilation step to transform TypeScript into JavaScript.
- **Strictness**: Sometimes too rigid for rapid prototyping or small scripts.

#### **JavaScript Pros**
- **Simplicity**: No need to define types, making it faster for simple tasks.
- **No Compilation**: Works natively in the browser or Node.js without additional setup.
- **Flexibility**: Dynamic typing allows rapid development without worrying about types.
- **Ubiquity**: JavaScript is the language of the web, universally supported.

#### **JavaScript Cons**
- **Runtime Errors**: Many errors that TypeScript catches at compile-time can only be caught in JavaScript during execution.
- **Less Tooling**: The lack of types limits the capabilities of some development tools.
- **Scalability**: Dynamic typing can lead to issues in large codebases.

---

## **3. TypeScript Basics**

### **3.1 Basic Types**
TypeScript introduces static types like `boolean`, `number`, `string`, `array`, `tuple`, and `enum` to JavaScript.

```ts
let isActive: boolean = true;
let count: number = 42;
let userName: string = "Alice";
```

### **3.2 Type Annotations**
Type annotations specify the expected types of variables, function arguments, and return values.

```ts
function multiply(x: number, y: number): number {
    return x * y;
}
```

### **3.3 Interfaces**
Interfaces define object shapes, making code more predictable and maintainable.

```ts
interface Person {
    name: string;
    age: number;
}

let user: Person = {
    name: "John",
    age: 25
};
```

### **3.4 Enums**
Enums allow you to define a set of named constants, useful for representing states.

```ts
enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Green;
```

### **3.5 Tuples**
Tuples are arrays with a fixed number of elements where each element can have a different type.

```ts
let tuple: [string, number] = ["Alice", 42];
```

---

## **4. Functions and Classes**

### **4.1 Function Types**
You can define function signatures to enforce what types functions should accept and return.

```ts
let add: (x: number, y: number) => number;

add = (x: number, y: number): number => x + y;
```

### **4.2 Optional and Default Parameters**
You can make function parameters optional or provide default values.

```ts
function greet(name: string, greeting: string = "Hello") {
    console.log(`${greeting}, ${name}`);
}

greet("Alice");  // Hello, Alice
```

### **4.3 Classes**
Classes in TypeScript allow you to create object-oriented code with inheritance, access modifiers, and more.

```ts
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says hello.`);
    }
}

let john = new Person("John");
john.speak();  // John says hello.
```

---

## **5. Advanced Types**

### **5.1 Union and Intersection Types**
Union types allow variables to take on multiple types, while intersection types combine multiple types into one.

```ts
// Union
function display(value: string | number) {
    console.log(value);
}

// Intersection
interface Worker {
    workId: number;
}

interface Manager {
    managerId: number;
}

type Management = Worker & Manager;
```

### **5.2 Type Aliases**
You can create custom types with the `type` keyword for clarity and reusability.

```ts
type ID = string | number;

let userId: ID = 123;  // valid as number
userId = "abc";        // valid as string
```

### **5.3 Generics**
Generics make functions and classes reusable for different types.

```ts
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<number>(10);
```

### **5.4 Type Assertions**
Type assertions override TypeScript's inferred type, treating a variable as a different type.

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string

).length;
```

---

## **6. Modules**

### **6.1 Export and Import**
Modules help organize code into reusable pieces. You can export and import variables, functions, and classes between files.

```ts
// Exporting
export const greeting = "Hello, world";

// Importing
import { greeting } from './module';
```

### **6.2 Default Exports**
You can export a single item as the default export for a module.

```ts
export default function sayHello() {
    console.log("Hello!");
}

// Importing
import sayHello from './module';
```

---

## **7. TypeScript with React (Bonus)**

### **7.1 TypeScript in React Components**
TypeScript integrates seamlessly with React for developing strongly-typed, scalable components.

```ts
import React from 'react';

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return <h1>{title}</h1>;
}

export default Header;
```

---

## **8. TypeScript Tooling and Ecosystem**

### **8.1 Linting with ESLint**
TypeScript can be used with ESLint to enforce coding standards.

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

### **8.2 Prettier for Code Formatting**
You can configure Prettier to automatically format TypeScript code.

```bash
npm install --save-dev prettier
```

---

## **9. Advanced TypeScript Concepts**

### **9.1 Decorators**
Decorators allow you to annotate and modify classes and methods in TypeScript.

```ts
function Logger(constructor: Function) {
    console.log('Logging...');
}

@Logger
class Person {
    constructor() {
        console.log('Creating person...');
    }
}
```

### **9.2 Advanced Generics**
Advanced generics can be used to create highly flexible and reusable components.

```ts
class Box<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}
```

---

## **10. Conclusion**
This course provides a deep dive into TypeScript, covering everything from basic types to advanced features like decorators and generics. By the end of this course, you'll be well-equipped to use TypeScript in your projects, improving your development experience and code quality.
