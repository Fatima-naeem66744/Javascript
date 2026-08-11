const groups = [
  { name: 'group1', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { name: 'group2', numbers: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
];

const result = groups.reduce((acc, group) => {
  // Calculate sum for current group
  acc[group.name] = group.numbers.reduce((total, num) => total + num, 0);
  return acc; // Always return the accumulator object
}, {});

console.log(result);
// Output: { group1: 55, group2: 155 }