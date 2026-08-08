// currency converter
"use strict";

const usd = 1;
const eur = 0.85;
const gbp = 0.73;

const amountInUSD = 100;
const amountInEUR = amountInUSD * eur;
const amountInGBP = amountInUSD * gbp;

console.log(`Amount in USD: $${amountInUSD}`);
console.log(`Amount in EUR: €${amountInEUR}`);
console.log(`Amount in GBP: £${amountInGBP}`);