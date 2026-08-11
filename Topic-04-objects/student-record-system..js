// 1. Storage: Students stored as an array of objects
let students = [
  { id: 1, name: "Alice", grade: "A", address: { city: "Lahore" } },
  { id: 2, name: "Bob", address: {} } // missing grade, address has no city
];

// --- CRUD FUNCTIONS ---

// CREATE: addStudent(student)
function addStudent(newStudent) {
  students.push(newStudent);
}

// READ: getStudent(id)
function getStudent(id) {
  return students.find(student => student.id === id);
}

// UPDATE: updateStudent(id, updates) - uses Spread Operator (...) immutably
function updateStudent(id, updates) {
  students = students.map(student => {
    if (student.id === id) {
      // Merge changes into a new object using spread
      return { ...student, ...updates }; 
    }
    return student;
  });
}

// DELETE: deleteStudent(id)
function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
}

// PRINT SUMMARY: Uses Destructuring, Optional Chaining, Nullish Coalescing, & Template Literals
function printStudent(id) {
  const student = getStudent(id);

  if (!student) {
    console.log(`Student with ID ${id} not found.`);
    return;
  }

  // Destructuring fields out of the record
  const { name, grade, address } = student;

  // Optional Chaining (?.) and Nullish Coalescing (??)
  const studentGrade = grade ?? "Not Assigned";
  const studentCity = address?.city ?? "Unknown City";

  // Template Literal for formatted summary
  console.log(`Summary -> ID: ${student.id} | Name: ${name} | Grade: ${studentGrade} | City: ${studentCity}`);
}


// --- TESTING & DEMONSTRATION WITH BEFORE/AFTER LOGGING ---

console.log("================ 1. INITIAL STATE ================");
console.log(students);

console.log("\n================ 2. CREATE (addStudent) ================");
console.log("BEFORE:", students);
addStudent({ id: 3, name: "Charlie", grade: "B", address: { city: "Karachi" } });
console.log("AFTER: ", students);

console.log("\n================ 3. READ (getStudent & printStudent) ================");
console.log("Fetched Student ID 2:", getStudent(2));
printStudent(1); // Full details
printStudent(2); // Tests default grade and missing city

console.log("\n================ 4. UPDATE (updateStudent) ================");
console.log("BEFORE:", getStudent(2));
// Immutably updating Bob's grade and address
updateStudent(2, { grade: "A*", address: { city: "Islamabad" } });
console.log("AFTER: ", getStudent(2));

console.log("\n================ 5. DELETE (deleteStudent) ================");
console.log("BEFORE (Total count):", students.length);
deleteStudent(1); // Delete Alice
console.log("AFTER  (Total count):", students.length);
console.log("Updated List:", students);

console.log("\n================ 6. JSON SAVE & RESTORE DEMO ================");
// JSON.stringify: Save list to string
const jsonString = JSON.stringify(students, null, 2);
console.log("SAVED JSON STRING:\n", jsonString);

// JSON.parse: Load string back into array
const restoredStudents = JSON.parse(jsonString);
console.log("RESTORED ARRAY FROM JSON:", restoredStudents);