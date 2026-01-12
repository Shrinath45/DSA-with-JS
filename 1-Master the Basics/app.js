// let a = 10;
// let b = 20;

// console.log("Sum of 10 and 20 is " + (a+b)); // is 30 (because bracket first execute)
// console.log(a + b + " is sum of 10 and 20");    // 30 is

// TYPE COERCION
// console.log("1"-1);     // 0
// console.log("1"+1);     // 11
// console.log("1"*1);     // 1
// console.log("1"/1);     // 1

// ACCEPT & PRINTS
// let age = Number(prompt("Enter your age"));
// console.log(age);

// TYPE CASTING OR CONVERSION : Is nothing but a converting a type into another type
// console.log(Number("24"));      // 24
// console.log(Number("shri"));    // NaN
// console.log(String("24"));      // 24 (in string)
// console.log(String("shri"));    // shri

// SWAP TWO VARIABLES VIA 3 METHODS

// let a = 10;
// let b = 20;

// 1.using third variable
// let c = a;  // c = 10, a = 10
// a = b;  // a = 20, b = 20;
// b = c;  // b = 10
// console.log(a);
// console.log(b);

// 2. without third variable
// a = a + b; // a = 30
// b = a - b; // b = 10
// a = a - b;  // a = 20
// console.log(a);
// console.log(b);

// 3. destructuring
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//  OPERATORS & THEIR QUESTIONS

// let a = 20;
// let b = 10;

// Arithmetic
// console.log(a+b);   // 30
// console.log(a-b);   // 10
// console.log(a*b);   // 200
// console.log(a/b);   // 2
// console.log(a%b);   // 0
// console.log(b%a);   // 10 (because a is greater than b so it return b value)

// Q: Find the sum of digits from given number
// let s = 4545;   // 18
// let h = s%10;   // 5
// let j = Math.floor(s/10)%10 // 4
// let k = Math.floor(s/100)%10 // 5
// let g = Math.floor(s/1000)%10 // 4
// console.log(h+j+k+g);

// Relational Operator

// console.log(10>20);   // false
// console.log(10<20);   // true
// console.log(10>=20);    // false
// console.log(10 <= 20);  // true
// console.log(10 != 20);  // true
// console.log(10 !== 20);  // true (strict not equal to)
// console.log(10 == 20);  // false
// console.log(10 === 20);  // false (strict equal to)


// Logical Operator (&& ||) :- It must used when the conditions are multiple.

// console.log(10>6 && 5<9);   // true
// console.log(10>6 && 9<7);   // false
// console.log(10<6 && 9>7);   // false
// console.log(10<6 && 9<7);   // false

// console.log(10>6 || 5<9);   // true
// console.log(10>6 || 9<7);   // true
// console.log(10<6 || 9>7);   // true
// console.log(10<6 || 9<7);   // false


// Unary Operator (++ --) (Increment, Decrement)

// let a = 20;

// Post increment
// let b = a++;
// console.log(a);
// console.log(b);

// Pre Increment
// let c = ++a;
// console.log(a);
// console.log(c);

// Pre Decrement
// let d = --a;
// console.log(a);
// console.log(d);

// Post Decrement
// let e = a--;
// console.log(a);
// console.log(e);

// 1. Question
// let i = 11;
// i = i++ + ++i; // 11 + 13
// console.log(i); // 24 

// 2. Question
// let a = 11, b = 22;
// let c = a + b+ a++ + b++ + ++a + ++b; // 11 + 22 + 11 + 22 + 13 + 24
// console.log(c); // 103

// 3. Question
// let a = true;
// a++
// console.log(a); // true = 1

// 4. Question
// let a = 10++;
// console.log(a); // We can't apply unary operator direct on the numbers. 



// Math Functions

// Round
// console.log(Math.round(10.6));  // 11
// console.log(Math.round(10.3));  // 10

// Ceil
// console.log(Math.ceil(10.1));   // 11

// Floor
// console.log(Math.floor(10.9));  // 10

// Trunc
// console.log(Math.trunc(18.98)); // 18

// Power
// console.log(Math.pow(2, 4));   // 2^4 = 16

// Square
// console.log(Math.sqrt(16)); // 4

// abs
// console.log(Math.abs(-15)); // 15

// Maximum
// console.log(Math.max(10, 20, 49, 48));  // 48

// Minimum
// console.log(Math.min(10, 20, 49, 48));  // 10

// Random
// console.log(Math.random()); // always return random number between (0 to 1)


// Q. OTP Generation Code
// let a = Math.random()*9000+1000;
// let otp = Math.trunc(a);
// console.log(otp);

// Q. Calculate area and perimeter of rectangle
// let length = 5;
// let breadth = 7;
// console.log("Area of Rectangle: " + length*breadth);
// let perimeter = 2 * (length+breadth);
// console.log("Perimeter of Rectangle: " + perimeter);

// Q. Area of triangle by heron's formula

// Heron's formula = sqrt of s * (s-a) * (s-b) * (s-c)
// a + b > c && b + c > a && a + c > b (must required)

// let a = 5;
// let b = 4;
// let c = 3;
// let s = (a+b+c) / 2;
// console.log(s);
// console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));

// Q. Circumference of circle

// 2pyr

// let r =22;
// console.log(Number((2*Math.PI*r).toFixed(2)));
