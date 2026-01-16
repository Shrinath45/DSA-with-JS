let prompt = require("prompt-sync")();

// Increment pattern program or Right angle triangle
// let n = prompt("Enter a Number: ");
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// Right angle pattern for numbers
// let n = prompt("Enter a Number: ");
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(j + " ")
//     }
//     console.log();
// }

// Right angle triangle for characters (A-E)
// let n = prompt("Enter a Number: ");
// for(let i = 1; i <= n; i++){
//     let asci = 65;
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(String.fromCharCode(asci) + " ");;
//         asci++;
//     }
//     console.log();
// }

// Inverted right angle triangle pattern program
// let n = prompt("Enter a Number: ");
// for(let i = n; i >= 1; i--){
//     for(let j = i; j >= 1; j--){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// Mirror right angle triangle
// let n = prompt("Enter a Number: ");
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }

//   console.log();
// }

// first for is compulsory 
// second loop is used to print the spaces so we can move the stars at the end (every row must have 5 stars)
// third loop prints the stars


// Homework
// 1. Triangle pattern
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for(let j = 1; j <= n - i; j++){
//     process.stdout.write(" ");
//   }

//   for(let j = 1; j <= 2*i-1; j++){
//     process.stdout.write("*")
//   }
//   console.log();
// }



// X pattern
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for(let j = 1; j <= n; j++){
//     if(i === j || i + j === n + 1){
//         process.stdout.write("*");
//     }else{
//         process.stdout.write(" ");
//     } 
//   }
//   console.log();
// }

// V pattern
// let n = Number(prompt("Enter a Number: "));
// for (let i = 1; i <= n; i++) {
//   for(let j = 1; j <= 2*n-1; j++){
//     if(i === j || i+j === 2*n){
//         process.stdout.write("*");
//     }else{
//         process.stdout.write(" ");
//     } 
//   }
//   console.log();
// }