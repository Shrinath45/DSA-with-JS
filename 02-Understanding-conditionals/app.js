

// Q. Valid Voter
// let age = Number(prompt("Enter your age"));
// if(isNaN(age)){
//     console.log("Wrong input");
// }else if(age>=18){
//     console.log("You are eligible for voting");
// }else{
//     console.log("You are not eligible for voting");
// }

// Q. Shop Discount
// let amt = Number(prompt("Enter your amount: "));
// if(isNaN(amt)){
//     console.log("Wrong input");
// }else if(amt>0 && amt<=5000){
//     console.log("Your amount after discount " + Math.floor(amt));
// }else if(amt>5000 && amt <= 7000){
//     console.log("Your amount after discount " + Math.floor(amt - amt*0.05));
// }else if(amt>7000 && amt <= 9000){
//     console.log("Your amount after discount " + Math.floor(amt - amt*0.1));
// }else if(amt>9000){
//     console.log("Your amount after discount " + Math.floor(amt - amt*0.2));
// }else{
//     console.log("Wrong input");
// }

// Q. Calculate the electricity bill
// let units = Number(prompt("Enter the units: "));
// let amt = 0;
// if(units>400){
//     amt = (units-400) * 13;
//     units = 400;
// }
// if(units>200 && units <=400){
//     amt += (units - 200) * 8;
//     units = 200;
// }
// if(units>100 && units <=200){
//     amt += (units - 100) * 6;
//     units = 100;
// }
// amt += units*4;
// console.log(amt);

// Q. INR Denomination
// let amt = 4888;
// console.log("Amount is " + amt);
// if (amt >= 500) {
//   console.log("500 notes: " + Math.floor(amt / 500));
//   amt = amt % 500;
// }
// if (amt >= 200) {
//   console.log("200 notes: " + Math.floor(amt / 200));
//   amt = amt % 200;
// }
// if (amt >= 100) {
//   console.log("100 notes: " + Math.floor(amt / 100));
//   amt = amt % 100;
// }
// if (amt >= 50) {
//   console.log("50 notes: " + Math.floor(amt / 50));
//   amt = amt % 50;
// }
// if (amt >= 20) {
//   console.log("20 notes: " + Math.floor(amt / 20));
//   amt = amt % 20;
// }
// if (amt >= 10) {
//   console.log("10 notes: " + Math.floor(amt / 10));
//   amt = amt % 10;
// }
// if (amt >= 5) {
//   console.log("5 notes: " + Math.floor(amt / 5));
//   amt = amt % 5;
// }
// if (amt >= 2) {
//   console.log("2 notes: " + Math.floor(amt / 2));
//   amt = amt % 2;
// }
// if (amt === 1) {
//   console.log("1 notes: " + Math.floor(amt / 1));
// }

// Ternary Operator :- It is a mixture of (?) & (:).
// let age = 17;
// age>=18 ? console.log("You are eligible.") : console.log("You are not eligible");

// Nested Ternary Operator :- It is nothing but multi-layer of ternary operator.
// let age = 19;
// age<0 ? console.log("wrong input") : age>=18 ? console.log("you are eligible") : console.log("You are not eligible");

// Switch Case :- It is a conditional statement. It can't handle float value its precision issues.

// let day = 4;
// switch (day) {
//   case 1:
//     console.log("It is Monday");
//     break;
//   case 2:
//     console.log("It is tuesday");
//     break;
//   case 3:
//     console.log("It is Wendensday");
//     break;
//   case 4:
//     console.log("It is Thursday");
//     break;
//   case 5:
//     console.log("It is friday");
//     break;
//   case 6:
//     console.log("It is saturday");
//     break;
//   case 7:
//     console.log("It is sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }


// let jobShift = "Sunday";
// switch (jobShift) {
//   case "Monday":
//   case "Tuesday":
//   case "Wendensday":
//     console.log("It is Day Shift");
//     break;

//   case "Thursday":
//   case "Friday":
//     console.log("It is night shift");
//     break;
//   default:
//     console.log("Holiday");
// }



// let num = (0.1 + 0.2).toFixed(1);

// switch (num) {
//   case "0.3":
//     console.log("Hello");
//     break;
//   case "0.5":
//     console.log("Hey");
//     break;
//   default:
//     console.log("namaste");
// }
