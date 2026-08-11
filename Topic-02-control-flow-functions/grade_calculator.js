// Arrow function to calculate grade based on marks
let grade = (marks) => {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
};

// Standard Function Declaration 
function displayGradeBoundary(marks) {
    console.log(`Marks: ${marks} => Grade: ${grade(marks)}`);
}

console.log("--- Grade Boundary Tests ---");
displayGradeBoundary(100); // Expected: A
displayGradeBoundary(90);  // Expected: A
displayGradeBoundary(89);  // Expected: B
displayGradeBoundary(75);  // Expected: C
displayGradeBoundary(59);  // Expected: F

// --- Scope Demonstration ---
// console.log(`Marks: ${marks}`); 
// Error: 'marks' is not defined in this scope. It only exists inside grade().