let prompt = require('prompt-sync')();

            // Complexity

// It is nothing but a how your task is complicated like easy medium, hard.


// Time Complexity

// Amount of time taken as the function of input size(n). 



// Handling for large input: Time complexity is known for handling large input.


// Complexity Representation:
// Big O => It always check for upper bound/worst case
// Theta => It is always check for average.
// Omega => It is always check for lower bound/best case.

// Type & Graph:
// 1. Constant time or O(1): When the particular task is completed in one step then it is known as Constant time complexity or O(1);
//      When the user given the n's exact value then it is also constant time complexity.
// EX:
// let n = Number(prompt("Enter a number: "));
// let sum = (n*(n+1))/2;
// console.log(sum);

// 2. Linear time complexity or Big O(n) :- When the value of n is not given and we are performing n operations then it is known as linear time complexity or Big O(n).

// 3. Quadratic time complexity or Big O(n*n):- When the outer loop is running for n times and the inner loop is also running for n times then it is quadratic time complexity or Big O(n*n).

// 4. log(n) :- when the value of n is drastically decreasing then it is known as log(n) time complexity.

// exponential time complexity:

// Big O(n!) or Factorial time complexity: 

// Graph: 


// Generating Complexity equation:


// TLE (Time Limit Exceeded): 

// n ≤ 10^8      →  O(1), O(log n)
// n ≤ 10^6      →  O(n), O(n log n)
// n ≤ 10^4      →  O(n²)
// n ≤ 10^2      →  O(n³)
// n ≤ 2 × 10^3  →  O(n⁴)   (borderline / very slow)
// n ≤ 100       →  O(2ⁿ), O(3ⁿ)
// n ≤ 10–12     →  O(n!)

// | n size       | Allowed Complexity |
// | ------------ | ------------------ |
// | Huge (10⁸)   | O(1), O(log n)     |
// | Large (10⁶)  | O(n), O(n log n)   |
// | Medium (10⁴) | O(n²)              |
// | Small (≤100) | Exponential        |
// | Very Small   | Factorial          |


// Space Complexity:
