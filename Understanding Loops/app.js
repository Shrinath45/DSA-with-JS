// Jitni jyada lines utna bada size file ka
// 1mb vs 100 mb
// 6000 line ka code -> file  size jyada -> user ko time lagega load krne mein website -> User Experience bad -> brand ka overall performance bad

// Loop -> whatsapp, instagram, facebook, ecommerce, youtube
// for, while, do-while

// for(start; end; change){ }

// 1-22
// for(let i = 1; i<=22; i++){
//     console.log(i);
// }

// 200 - 150
// for(let i = 200; i>=150; i--){
//     console.log(i);
// }

// Working flow of For loop
// 1. First it'll run the initializer. (i = 1)
// 2. Then it goes to the condition. (i<=22)
// 3. If the condition is satisfied then it'll execute block of code. (){ block of code }
// 4. Finally he go to the change section which is increment or decrement and update the value for next round. (i++ or i--)

// Q. Sum of n Natural numbers
// let num = Number(prompt("Enter a number"));
// if(isNaN(num)){
//     console.log("Invalid Input");
// }else{
//     if(num>0){
//         let sum = 0;
//         for(let i = 1; i<=num; i++){
//             sum += i;
//         }
//         console.log(sum);
//     }else{
//         console.log("Number should be Positive");
//     }
// }

// Q. Find a factorial of a number
// let n = Number(prompt("Enter a number"));
// if(isNaN(n)){
//     console.log("Invalid input");
// }else{
//     if(n>0){
//         let fact = 1;
//         for(let i = 1; i<=n; i++){
//             fact *= i;
//         }
//         console.log(fact);
//     }else{
//         console.log("Number should be positive");
//     }
// }

// Q. Factor of a number
// let n = Number(prompt("Enter a number"));
// if (isNaN(n)) {
//   console.log("Invalid input");
// } else {
//   if (n > 0) {
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//       if (n % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(n);
//   } else {
//     console.log("Number should be positive");
//   }
// }

// Q. Prime number
// let n = Number(prompt("Enter a number"));
// if (isNaN(n)) {
//   console.log("Invalid input");
// } else {
//   if (n > 0) {
//     var primeHai = true;
//     for (let i = 2; i <= Math.floor(n / 2); i++) {
//       if (n % i === 0) {
//         primeHai = false;
//         break;
//       }
//     }
//     console.log(primeHai);
//   } else {
//     console.log("Number should be positive");
//   }
// }

// Another way to find number is prime or not // o(sqrt(n))
// let n = Number(prompt("Enter a number"));
// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(n));

// Break & Continue:
// break stops the loop
// continue skips the current iteration in the loop.

// for(let i = 1; i<23; i++){
//     if(i === 5) continue;   // skip the iteration at value 5.
//     if(i === 11) break; // stop the loop at value of 11
//     else console.log(i);
// }

// While Loop

// Syntax:
//         start;
//         while(end){
//             //code
//             change;
//         }

// EX:
// let i = 1;
// while(i<23){
//     console.log(i);
//     i++;
// }

// let ans = prompt("kuch bhi dedo(exit for close)");

// while(ans !== 'exit'){
//     ans = prompt("kuch bhi dedo(exit for close)");
// }

// Q. Sum of digit using while
// let n = Number(prompt("Enter a number"));
// if (isNaN(n)) {
//   console.log("Invalid input");
// } else {
//   if (n > 0) {
//     let sum = 0;
//     while(n>0){
//         let rem = n%10;
//         sum += rem;
//        n = Math.floor(n/10);
//     }
//     console.log(sum);
//   } else {
//     console.log("Number should be positive");
//   }
// }

// Q. Reverse the number
// let n = Number(prompt("Enter a number"));
// if (isNaN(n)) {
//   console.log("Invalid input");
// } else {
//   if (n > 0) {
//     let rev = 0;
//     while (n > 0) {
//       let rem = n % 10;
//       rev = rev * 10 + rem;
//       n = Math.floor(n / 10);
//     }
//     console.log(rev);
//   } else {
//     console.log("Number should be positive");
//   }
// }

// Q. Strong Number
// let n = Number(prompt("Enter a number"));
// if (isNaN(n)) {
//   console.log("Invalid input");
// } else {
//   if (n > 0) {
//     let sum = 0;
//     let copy = n;
//     while (n > 0) {
//       let rem = n % 10;
//       let fact = 1;
//       for (let i = 1; i <= rem; i++) {
//         fact *= i;
//       }
//       sum += fact;
//       n = Math.floor(n / 10);
//     }
//     if (copy === sum) {
//       console.log("Strong: " + sum + " & " + copy);
//     } else {
//       console.log("Not Strong: " + sum + " & " + copy);
//     }
//   } else {
//     console.log("Number should be positive");
//   }
// }



            // Do-While


// Q. Guess the number
let random = Math.floor(Math.random()*100 + 1);
let guess = 0;
while(guess !== random){
    guess = Number(prompt("Guess the number"))
    if(isNaN(guess) || guess < 1 || guess > 100){
        console.log("try again between 1 - 100");
        continue;
    }
    if(guess>random){
        console.log("Too high, try again");
    }else{
        console.log("Too low, try again");
    }
}
console.log("Congrats you guessed the number: " + random);

