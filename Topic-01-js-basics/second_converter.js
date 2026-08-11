"use strict";

// Test Input 1: 3661 seconds
const input1 = 3661;
const totalSeconds1 = parseInt(input1);
const hour1 = Math.floor(totalSeconds1 / 3600);
const remainingSeconds1 = totalSeconds1 % 3600;
const minute1 = Math.floor(remainingSeconds1 / 60);
const second1 = remainingSeconds1 % 60;
console.log(`${totalSeconds1}s => ${hour1} Hour(s), ${minute1} Minute(s), ${second1} Second(s)`);

// Test Input 2: 7200 seconds
const input2 = 7200;
const totalSeconds2 = parseInt(input2);
const hour2 = Math.floor(totalSeconds2 / 3600);
const remainingSeconds2 = totalSeconds2 % 3600;
const minute2 = Math.floor(remainingSeconds2 / 60);
const second2 = remainingSeconds2 % 60;
console.log(`${totalSeconds2}s => ${hour2} Hour(s), ${minute2} Minute(s), ${second2} Second(s)`);

// Test Input 3: 45 seconds
const input3 = 45;
const totalSeconds3 = parseInt(input3);
const hour3 = Math.floor(totalSeconds3 / 3600);
const remainingSeconds3 = totalSeconds3 % 3600;
const minute3 = Math.floor(remainingSeconds3 / 60);
const second3 = remainingSeconds3 % 60;
console.log(`${totalSeconds3}s => ${hour3} Hour(s), ${minute3} Minute(s), ${second3} Second(s)`);