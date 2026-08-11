const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// all numbers meet the condition with every() function
let allGreaterThanZero = numbers1.every(num => num > 0);
console.log(allGreaterThanZero); // Output: true

// now use some () function to check if some numbers meet the condition
let someGreaterThanFive = numbers1.some(num => num > 5);
console.log(someGreaterThanFive); // Output: true

let someGreaterThanTwenty = numbers2.some(num => num > 20);
console.log(someGreaterThanTwenty); // Output: false

let allGreaterThanTwenty = numbers2.every(num => num > 20);
console.log(allGreaterThanTwenty); // Output: false