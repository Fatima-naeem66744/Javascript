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
console.log(`Grade: ${grade(80)}`); //gives the answer 

// console.log(`Marks: ${marks}`); gives the error because marks is not defined in this scope. It is only defined inside the function grade.

// marks → exists inside grade() ✅
// marks → does NOT exist outside grade() ❌