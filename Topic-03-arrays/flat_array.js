const nestedArray1 = [1, 2, [3, 4], [5, 6], 7, 8];

const nestedArray2 = [
    ["a", "b"],
    ["c", "d"],
    ["e", "f"]
];

function flattenArray(array) {
    return array.flat(3);
}

const flatArray1 = flattenArray(nestedArray1);
const flatArray2 = flattenArray(nestedArray2);

console.log("Array 1:", flatArray1);
console.log("Array 2:", flatArray2);