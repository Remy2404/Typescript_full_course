/* The typescript obj type repersents all values that are not in primtive tp */
/* 
The primtive types in typescript are:
.string
.number
 .string
 .boolean
 .bigint
 .symbol
 .null
 .undefined
 */
let employee : object;

employee = {
    fistName: 'Ramy',
    lastName: 'Phon',
    age: 21,
    jobTitle: 'Software Engineer',
    isManager: false
};
//adding a new property to the object
(employee as any)['department'] = 'ITE';
(employee as any)['salary'] = 50000;
(employee as any)['address'] = '123 Main Street';
(employee as any)['email'] = 'rosexmee1122@gmail.com';
(employee as any)['phone'] = '0962064081';
(employee as any)['isMarried'] = false;
(employee as any)['spouse'] = null;

//Type Assertion

Object.assign(employee, {isManager: true})
let employees : Record<string, any> = {
    fistName: 'Ramy',
    lastName: 'Phon',
    age: 21,
    jobTitle: 'Software Engineer',
    isManager: false
};

let employeess = {} as {
    fistName: string,
    lastName: string,
    age: number,
    jobTitle: string,
    isManager: boolean
};
employeess.fistName = 'Rima, Jane';
employeess.lastName = 'Phon';
employeess.age = 21;
employeess.jobTitle = 'Software Engineer';
employeess.isManager = false;
console.log(employeess);
//displaying the updated object:
console.log(employees);
console.log(employee);