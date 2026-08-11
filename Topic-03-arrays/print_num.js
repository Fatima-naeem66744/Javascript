const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [10, 20, 30, 40, 50];

function printNumbers(numbers) {
    numbers.forEach(number => {
        console.log("Number:", number);
    });
}

console.log("Array 1:");
printNumbers(numbers1);

console.log("Array 2:");
printNumbers(numbers2);