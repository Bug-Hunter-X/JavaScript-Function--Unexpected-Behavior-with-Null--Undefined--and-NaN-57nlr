# JavaScript Function: Handling Null, Undefined, and NaN

This repository demonstrates a potential bug in a JavaScript function and its solution. The original function handles null values correctly but fails to address undefined or NaN inputs.

## Bug Description

The `foo` function adds two numbers. It correctly handles `null` inputs, returning 0. However, it doesn't explicitly handle `undefined` or `NaN` inputs, leading to unexpected results or errors in those cases.

## Solution

The solution enhances the function to explicitly check for `undefined` and `isNaN` conditions, ensuring robust handling of all possible input types.

## How to Run

1. Clone the repository.
2. Open `bug.js` to see the original buggy code.
3. Open `bugSolution.js` to view the corrected code.
4. Execute the JavaScript files using a suitable JavaScript runtime (e.g., Node.js).