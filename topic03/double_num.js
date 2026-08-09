const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let doubleNumbers1 = number1.map(myfunction);
let doubleNumbers2 = number2.map(myfunction);

function myfunction(num) {
    return num * 2;
}
console.log(doubleNumbers1);
console.log(doubleNumbers2);