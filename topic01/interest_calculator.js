let principal = 1000;
let rate = 5;
let time = 2;

// Simple Interest
let simpleInterest = (principal * rate * time) / 100;
let simpleTotal = principal + simpleInterest;

// Compound Interest
let compoundRate = rate / 100;
let compoundTotal = principal * (1 + compoundRate) ** time;
let compoundInterest = compoundTotal - principal;

console.log("Simple Interest: " + simpleInterest);
console.log("Simple Total Amount: " + simpleTotal);

console.log("Compound Interest: " + compoundInterest);
console.log("Compound Total Amount: " + compoundTotal);