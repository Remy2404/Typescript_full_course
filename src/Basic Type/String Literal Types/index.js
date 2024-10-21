"use strict";
/*
The string literal types allow you define a type that accepts only one specific string value.
 */
let click;
click = "click";
//@ts-ignore
click = "dblclick"; // Error: Type '"dblclick"' is not assignable to type '"click"'
let mouseEvent;
mouseEvent = "click";
mouseEvent = "dblclick";
mouseEvent = "mouseup";
mouseEvent = "mousedown";
//@ts-ignore
mouseEvent = "mouseover"; // Error: Type '"mouseover"' is not assignable to type '"click" | "dblclick" | "mouseup" | "mousedown"'
console.log(mouseEvent);
// to avoid above error, we can use union type
let mouseEvent1;
mouseEvent1 = "click";
mouseEvent1 = "dblclick";
mouseEvent1 = "mouseup";
mouseEvent1 = "mousedown";
mouseEvent1 = "mouseover";
mouseEvent1 = "customEvent"; // Error: Type '"customEvent"' is not assignable to type '"click" | "dblclick" | "mouseup" | "mousedown"'
mouseEvent1 = "123"; // Error: Type '"123"' is not assignable to type '"click" | "dblclick" | "mouseup" | "mousedown"'
console.log(mouseEvent1);
// Using string literal types with switch statement
switch (mouseEvent1) {
    case "click":
        console.log("Clicked");
        break;
    case "dblclick":
        console.log("Double clicked");
        break;
    case "mouseup":
        console.log("Mouse up");
        break;
    case "mousedown":
        console.log("Mouse down");
        break;
    default:
        console.log("Unknown event");
}
//# sourceMappingURL=index.js.map