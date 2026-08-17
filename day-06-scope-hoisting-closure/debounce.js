// Closure-Based Mini Utility: debounce()

// The inner function keeps access to timer because JavaScript's lexical scoping/closure preserves the outer function's variable for the inner function.

function debounce(fn, delay) {
    let timer;

    // Return an inner function
    return function () {

        // Cancel the previous timer
        clearTimeout(timer);

        // Start a new timer
        timer = setTimeout(function () {

            // Run the original function after the delay
            fn();

        }, delay);
    };
}


// Function that we want to debounce
// first input 
function sayHello() {
    console.log("Hello!");
}


// Create the debounced version

const debouncedHello = debounce(sayHello, 2000);

// second input
function sayGoodbye() {
    console.log("Goodbye!");
}
const debouncedGoodbye = debounce(sayGoodbye, 3000);

// Hello prints only one time after 2 seconds, even though we called it multiple times 
debouncedHello();
debouncedHello();
debouncedHello();
debouncedHello();
debouncedHello();

// Goodbye prints only one time after 3 seconds, even though we called it multiple times
debouncedGoodbye();
debouncedGoodbye();
debouncedGoodbye();
debouncedGoodbye();
debouncedGoodbye();
