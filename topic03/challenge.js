const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// all numbers meet the condition with every() function
let allGreaterThanZero = numbers.every(num => num > 0);
console.log(allGreaterThanZero); // Output: true

// now use some () function to check if some numbers meet the condition
let someGreaterThanFive = numbers.some(num => num > 5);
console.log(someGreaterThanFive); // Output: true