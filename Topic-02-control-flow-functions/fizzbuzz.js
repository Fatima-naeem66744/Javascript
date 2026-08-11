// Function Declaration (Satisfies Requirement 4.1)
function printResult(label, result) {
    console.log(`[Result] ${label}: ${result}`);
}
//function expression (Satisfies Requirement 4.2)
let fizzBuzz = function(n = 20) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
        } else if (i % 3 === 0) {
            output = "Fizz";
        } else if (i % 5 === 0) {
            output = "Buzz";
        } else {
            output = i;
        }
        // Calling standard function declaration inside loop
        printResult(`Item ${i}`, output);
    }
};

// Calling the fizzBuzz function with default parameter (20)
fizzBuzz();