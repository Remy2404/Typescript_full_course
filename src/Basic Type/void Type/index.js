"use strict";
/*
Void Type in TypeScript is used when a function does not return any value.
It is a special type that represents the absence of a value.
The void type is commonly used in functions that perform actions, such as logging or modifying variables without returning a specific value.
*/ function logMessage(message) {
    console.log(message);
}
/*
The never type represents the return type of a function that never returns.
It is used when a function always throws an exception or a loop that never terminates.
The never type is commonly used in functions that raise exceptions or infinite loops.
*/ function raiseError(message) {
    throw new Error(message);
}
let loop = function forever() {
    while (true) {
        console.log("Hello");
    }
};
function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    return false; // Add a default return statement
}
logMessage("Hello, TypeScript!");
fn("hello"); // Output: true
fn(10); // Output: false
/* raiseError("An error occurred"); // Output: Uncaught Error: An error occurred */
/*
Note : The never type represents the return type of a function that never returns. It is used when a function always throws an exception or a loop that never terminates.
 */
//# sourceMappingURL=index.js.map