// Closure-Based Mini Utility: debounce()

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

// Test it
debouncedHello();
debouncedGoodbye();
