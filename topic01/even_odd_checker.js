"use strict";

const input = 7;
const number = parseInt(input);

const status = !(number % 2 === 0) ? "even" : "odd";

console.log(`${number} is an ${status} number.`);