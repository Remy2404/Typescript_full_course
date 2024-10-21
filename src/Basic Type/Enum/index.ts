//What is an Enum ?
/* 
 An enum is a way to define a set of named constants. In TypeScript, enums are a way of giving more readable, meaningful names to sets of numeric values.

 The enum keyword is used to create an enum type. Enum members are declared using the enum keyword followed by the enum name and a set of comma-separated members.

 Enum members can be of any numeric type, including numbers, strings, or even booleans. Enum members can also be initialized with default values.
 */
// The syntax if an enum is as follows:
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Yellow = 3,
  Purple = 4,
}

const myColor = Color.Green;
const myColoar2 = Color.Red;
console.log(myColoar2);
console.log(myColor);

function isitSummer(month: number) {
  let isSummber: boolean;
  if (month > 5 && month < 9) {
    isSummber = true;
  } else {
    isSummber = false;
  }
  return isSummber;
}
const isSummer = isitSummer(7);
console.log(isSummer);

enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}
const request = {
  id: 1,
  status: ApprovalStatus.approved,
  description: "Please approve this request",
};

if (request.status === ApprovalStatus.approved) {
  // send an email
  console.log("Send email to the Applicant...");
}
//summary to use enum :
/* 
. It is a great way to define a set of named constants.
 Enum members can be of any numeric type, including numbers, strings, or even booleans. Enum members can also be initialized with default values.
 Enum members are accessible as properties of the enum type, and their values are numbers by default.
 Enums can be used to define a set of related constants.
.Do use an enum when you have a small set of fixed-values that are closely related and known at complie time.
 */
