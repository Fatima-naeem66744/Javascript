"use strict";

console.log("--- BMI RESULT ---");

// ==========================================
// TEST INPUT 1 (Normal Weight)
// ==========================================
const weightInKg1 = 70;
const heightInMeters1 = 1.75;

const bmi1 = weightInKg1 / (heightInMeters1 ** 2);
const roundedBmi1 = Number(bmi1.toFixed(1));

const isUnderweight1 = roundedBmi1 < 18.5;
const isNormal1 = roundedBmi1 >= 18.5 && roundedBmi1 < 25;
const isOverweight1 = roundedBmi1 >= 25 && roundedBmi1 < 30;
const isObese1 = roundedBmi1 >= 30;

const bmiResult1 = {
  bmiValue: String(roundedBmi1),
  underweight: isUnderweight1,
  normalWeight: isNormal1,
  overweight: isOverweight1,
  obese: isObese1
};

console.log(`Sample 1: Weight: ${weightInKg1}kg, Height: ${heightInMeters1}m`);
console.log("Calculated BMI: " + bmiResult1.bmiValue);
console.log("Is Normal Weight? " + (bmiResult1.normalWeight === true));
console.log("-----------------------------------");

// ==========================================
// TEST INPUT 2 (Underweight)
// ==========================================
const weightInKg2 = 50;
const heightInMeters2 = 1.70;

const bmi2 = weightInKg2 / (heightInMeters2 ** 2);
const roundedBmi2 = Number(bmi2.toFixed(1));

const isUnderweight2 = roundedBmi2 < 18.5;
const isNormal2 = roundedBmi2 >= 18.5 && roundedBmi2 < 25;
const isOverweight2 = roundedBmi2 >= 25 && roundedBmi2 < 30;
const isObese2 = roundedBmi2 >= 30;

const bmiResult2 = {
  bmiValue: String(roundedBmi2),
  underweight: isUnderweight2,
  normalWeight: isNormal2,
  overweight: isOverweight2,
  obese: isObese2
};

console.log(`Sample 2: Weight: ${weightInKg2}kg, Height: ${heightInMeters2}m`);
console.log("Calculated BMI: " + bmiResult2.bmiValue);
console.log("Is Underweight? " + (bmiResult2.underweight === true));
console.log("-----------------------------------");

// ==========================================
// TEST INPUT 3 (Overweight)
// ==========================================
const weightInKg3 = 85;
const heightInMeters3 = 1.75;

const bmi3 = weightInKg3 / (heightInMeters3 ** 2);
const roundedBmi3 = Number(bmi3.toFixed(1));

const isUnderweight3 = roundedBmi3 < 18.5;
const isNormal3 = roundedBmi3 >= 18.5 && roundedBmi3 < 25;
const isOverweight3 = roundedBmi3 >= 25 && roundedBmi3 < 30;
const isObese3 = roundedBmi3 >= 30;

const bmiResult3 = {
  bmiValue: String(roundedBmi3),
  underweight: isUnderweight3,
  normalWeight: isNormal3,
  overweight: isOverweight3,
  obese: isObese3
};

console.log(`Sample 3: Weight: ${weightInKg3}kg, Height: ${heightInMeters3}m`);
console.log("Calculated BMI: " + bmiResult3.bmiValue);
console.log("Is Overweight? " + (bmiResult3.overweight === true));