// temperature converter
"use strict";

// --- Celsius to Fahrenheit ---
const celsius1 = 0;
const fahrenheitResult1 = (celsius1 * 9/5) + 32;
console.log(`${celsius1}°C is equal to ${fahrenheitResult1}°F`);

const celsius2 = 50.4;
const fahrenheitResult2 = (celsius2 * 9/5) + 32;
console.log(`${celsius2}°C is equal to ${fahrenheitResult2}°F`);

// --- Fahrenheit to Celsius ---
const fahrenheit1 = 98.6;
const celsiusResult1 = ((fahrenheit1 - 32) * 5) / 9;
console.log(`${fahrenheit1}°F is equal to ${celsiusResult1.toFixed(1)}°C`);