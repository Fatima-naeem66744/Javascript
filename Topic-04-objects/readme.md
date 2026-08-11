
## Jam Recording Proof
[Watch the Topic 04 Script Execution Recording](https://jam.dev/c/116f41ad-2ea3-4896-9b02-4258d57acec5
)

# Explanation of components :
# Destructuring Assignment Syntax

The destructuring assignment syntax can **unpack objects** into variables:

let {firstName, lastName} = person;



## Nullish coalescing :

The **nullish coalescing (`??`)** operator is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

```jsx
const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```

## Optional chaining(?.) :

The **optional chaining (`?.`)** operator accesses an object's property or calls a function. If the object accessed or function called using this operator is `undefined` or `null` instead of throwing an error 