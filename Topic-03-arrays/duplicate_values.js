const numbers1 = [1, 2, 2, 3, 4, 4, 5, 1, 6];
const numbers2 = [10, 10, 20, 30, 20, 40, 50, 50];

function removeDuplicates(numbers) {
    return numbers.filter((value, index, array) => {
        return array.indexOf(value) === index;
    });
}

const uniqueNumbers1 = removeDuplicates(numbers1);
const uniqueNumbers2 = removeDuplicates(numbers2);

console.log("Array 1:", uniqueNumbers1);
console.log("Array 2:", uniqueNumbers2);