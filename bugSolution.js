function foo(a, b) {
  // Check for null, undefined, or NaN values
  if (a === null || a === undefined || isNaN(a) || b === null || b === undefined || isNaN(b)) {
    return 0; // Handle invalid inputs
  }

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, undefined)); // Output: 0
console.log(foo(NaN, 2)); // Output: 0
console.log(foo(1, NaN)); // Output: 0