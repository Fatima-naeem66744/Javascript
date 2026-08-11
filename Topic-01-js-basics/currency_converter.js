// currency converter
"use strict";

// sample input 1
const usd = 1;
const eur = 0.85;
const gbp = 0.73;

const amountInUSD = 100;
const amountInEUR = amountInUSD * eur;
const amountInGBP = amountInUSD * gbp;

console.log(`Amount in USD: $${amountInUSD}`);
console.log(`Amount in EUR: €${amountInEUR}`);
console.log(`Amount in GBP: £${amountInGBP}`);

// sample input 2
const amountInUSD2 = 250;
const amountInEUR2 = amountInUSD2 * eur;
const amountInGBP2 = amountInUSD2 * gbp;

console.log(`Amount in USD: $${amountInUSD2}`);
console.log(`Amount in EUR: €${amountInEUR2}`);
console.log(`Amount in GBP: £${amountInGBP2}`);

// sample input 3
const amountInUSD3 = 500;
const amountInEUR3 = amountInUSD3 * eur;
const amountInGBP3 = amountInUSD3 * gbp;

console.log(`Amount in USD: $${amountInUSD3}`);
console.log(`Amount in EUR: €${amountInEUR3}`);
console.log(`Amount in GBP: £${amountInGBP3}`);