"use strict";


const weightInKg = 70;
const heightInMeters = 1.75;


const weight = parseFloat(weightInKg);
const height = parseFloat(heightInMeters);

const bmi = weight / (height ** 2);

// Type conversion: Number() to round to 1 decimal place
const roundedBmi = Number(bmi.toFixed(1));



const isUnderweight = roundedBmi < 18.5;
const isNormal = roundedBmi >= 18.5 && roundedBmi < 25;
const isOverweight = roundedBmi >= 25 && roundedBmi < 30;
const isObese = roundedBmi >= 30;

const bmiResult = {
  bmiValue: String(roundedBmi), // Explicit type conversion to String
  underweight: isUnderweight,
  normalWeight: isNormal,
  overweight: isOverweight,
  obese: isObese
};

console.log("--- BMI RESULT ---");
console.log("Calculated BMI: " + bmiResult.bmiValue);
console.log("Is Normal Weight? " + (bmiResult.normalWeight === true));