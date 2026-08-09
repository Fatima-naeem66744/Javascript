const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];

// Ascending Order (Low -> High)
const sortedByPriceAsc = products.sort((a, b) => a.price - b.price);

console.log(sortedByPriceAsc);
// Output: Mouse ($25), Keyboard ($75), Laptop ($1000)