/* 
Type Alias:
Type aliases allow you to create a custom name for any type, such as a object type or a function type.
Type aliases are defined using the type keyword.
*/
//Type Alias with Object Type:
type PersonType = {
  name: string;
  age: number;
  email: string;
};

const personData: PersonType = {
  name: "Phon Ramy",
  age: 30,
  email: "rosexmee1122@gmail.com",
};
console.log(personData);

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = "Hi"; // valid
console.log(input);
