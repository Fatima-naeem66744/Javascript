
// sample input 1
let principal1 = 1000;
let rate1 = 5;
let time1 = 2;

// Simple Interest
let simpleInterest1 = (principal1 * rate1 * time1) / 100;
let simpleTotal1 = principal1 + simpleInterest1;

// Compound Interest
let compoundRate1 = rate1 / 100;
let compoundTotal1 = principal1 * (1 + compoundRate1) ** time1;
let compoundInterest1 = compoundTotal1 - principal1;

console.log("Simple Interest: " + simpleInterest1);
console.log("Simple Total Amount: " + simpleTotal1);

console.log("Compound Interest: " + compoundInterest1);
console.log("Compound Total Amount: " + compoundTotal1);

// sample input 2
let principal2 = 1500;
let rate2 = 4;
let time2 = 3;
// Simple Interest
let simpleInterest2 = (principal2 * rate2 * time2) / 100;
let simpleTotal2 = principal2 + simpleInterest2;

// Compound Interest
let compoundRate2 = rate2 / 100;
let compoundTotal2 = principal2 * (1 + compoundRate2) ** time2;
let compoundInterest2 = compoundTotal2 - principal2;

console.log("Simple Interest: " + simpleInterest2);
console.log("Simple Total Amount: " + simpleTotal2);

console.log("Compound Interest: " + compoundInterest2);
console.log("Compound Total Amount: " + compoundTotal2);

// sample input 3
let principal3 = 2000;
let rate3 = 6;
let time3 = 4;
// Simple Interest
let simpleInterest3 = (principal3 * rate3 * time3) / 100;
let simpleTotal3 = principal3 + simpleInterest3;
// Compound Interest
let compoundRate3 = rate3 / 100;
let compoundTotal3 = principal3 * (1 + compoundRate3) ** time3;
let compoundInterest3 = compoundTotal3 - principal3;

console.log("Simple Interest: " + simpleInterest3);
console.log("Simple Total Amount: " + simpleTotal3);
console.log("Compound Interest: " + compoundInterest3);
console.log("Compound Total Amount: " + compoundTotal3);

