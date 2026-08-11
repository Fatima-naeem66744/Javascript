const products1 = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

const products2 = [
    { name: "Monitor", price: 300 },
    { name: "Headphones", price: 50 },
    { name: "Webcam", price: 100 }
];

function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

const sortedProducts1 = sortProductsByPrice(products1);
const sortedProducts2 = sortProductsByPrice(products2);

console.log("Sorted Array 1:", sortedProducts1);
console.log("Original Array 1:", products1);

console.log("Sorted Array 2:", sortedProducts2);
console.log("Original Array 2:", products2);