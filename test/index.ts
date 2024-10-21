// This function will iterate through an array and sum all the numbers
function sumArray(numbers: number[]): number {
  let sum = 0;

  // Start of the loop
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(`Index ${i}: current sum is ${sum}`);
  }

  return sum; // Final sum is returned
}

// Example array to sum
const myNumbers = [5, 10, 15, 20, 25];

// Call the function and print the result
const totalSum = sumArray(myNumbers);
console.log(`Total sum: ${totalSum}`);
