const bill = 1000;
const tipPercentage = 0.15; // 15% tip
const tipAmount = bill * tipPercentage;
const totalAmount = bill + tipAmount;

console.log(`Bill: $${bill}`);
console.log(`Tip Percentage: ${tipPercentage * 100}%`);
console.log(`Tip Amount: $${tipAmount}`);
console.log(`Total Amount: $${totalAmount}`);