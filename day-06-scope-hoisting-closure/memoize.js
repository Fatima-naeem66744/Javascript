// Closure explanation:
// The returned inner function remembers the cache created by the
// outer memoize function even after memoize() has returned.
// This allows the same cache to be used across multiple calls.

// outer function
function memoize(fn) {
    const cache = {};

    // inner function
    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            console.log("Returning cached result");
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}
const memoizedAdd = memoize((a, b) => a + b);
// first input
console.log(memoizedAdd(3, 4)); // 7
console.log(memoizedAdd(3, 4)); // 7 (from cache)

// second input
console.log(memoizedAdd(5, 6)); // 11
console.log(memoizedAdd(5, 6)); // 11 (from cache)

// third input
console.log(memoizedAdd(7, 8)); // 15
console.log(memoizedAdd(7, 8)); // 15 (from cache)