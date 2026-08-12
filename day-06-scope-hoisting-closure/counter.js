function createCounter(initialValue = 0) {
  let count = initialValue; // Private outer variable

  // Returned object holding inner methods
  return {
    increment: function () {
      count += 1;
      return count;
    },
    decrement: function () {
      count -= 1;
      return count;
    },
    reset: function () {
      count = initialValue;
      return count;
    },
    getValue: function () {
      return count;
    }
  };
}

// --- Proof ---
// first input 
const counter = createCounter(10);

console.log(counter.getValue()); // 10
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11

// Direct access is impossible:
console.log(counter.count); // undefined (cannot bypass closure)
console.log(counter.reset());     // 10

// second input
const counter2 = createCounter(5);
console.log(counter2.getValue()); // 5
console.log(counter2.increment()); // 6
console.log(counter2.reset()); // 5
console.log(counter2.decrement()); // 4

// third input
const counter3 = createCounter(100);
console.log(counter3.getValue()); 
console.log(counter3.increment()); 
console.log(counter3.decrement()); 
console.log(counter3.reset()); 
