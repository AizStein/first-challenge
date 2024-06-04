const numOne = [4, 46, 32, 112, 54, 5];
const numTwo = [12, 33, 46, 98, 66, 101];
const numThree = [76, 7, 53, 90, 20, 78];
const numFour = [1, 88, 102, 122, 42, 2];

/* A. Write a function that returns an array sorted from smallest to bigger number */
const sortFunc = (arr) => [...arr].sort((a, b) => a - b);

console.log(sortFunc(numOne));
console.log(sortFunc(numTwo));
console.log(sortFunc(numThree));
console.log(sortFunc(numFour));

/* B. Write a function that returns the bigger number from every array */

const bigNum = (arr) => Math.max(...arr);

console.log("First: ", bigNum(numOne));
console.log("Second: ", bigNum(numTwo));
console.log("Third: ", bigNum(numThree));
console.log("Fourth: ", bigNum(numFour));

/* C. Write a function that returns the sum of the numbers in the array */

const sum = (arr) => arr.reduce((a, b) => a + b,0);

console.log("Sum of the first array: ", sum(numOne));
console.log("Sum of the second array: ", sum(numTwo));
console.log("Sum of the third array: ", sum(numThree));
console.log("Sum of the fourth array: ", sum(numFour));
