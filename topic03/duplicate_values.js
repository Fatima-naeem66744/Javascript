const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];

const uniqueNumbers = numbers.filter((value, index, array) => {
    return array.indexOf(value) === index;
});

console.log(uniqueNumbers); 
// Output: [1, 2, 3, 4, 5, 6]