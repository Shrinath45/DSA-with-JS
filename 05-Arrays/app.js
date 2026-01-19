                        // Array

// Array is a linear data structure which stores multiple values in a continuos manner.
// Array in js is nothing but collection of different types of values.
// It can comprises of different types of values like numbers, string, booleans.

let prompt = require('prompt-sync')();

// How to insert multiple values in array
// let n = Number(prompt("Enter how many values you want to insert: "));
// let arr = [];
// for(let i = 1; i <= n; i++){
//     prompt("Enter a value: ");
//     arr.push(i);
// }
// console.log(arr);


// Sum of n Elements of array
// let arr = [10, 20, 30, 40];
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);


// Maximum element of the array
// let arr = [10, 20, 30 ,50];
// let max = arr[0];
// for(let i = 1; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// Minimum element of the array
// let arr = [10, 20, 30 ,50];
// let min = arr[0];
// for(let i = 1; i<arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// console.log(min);


// Find 2nd max element from the array
// let arr = [10, 20, 30 ,50, 50, 50];
// let max = Math.max(arr[0], arr[1]);
// let max2 = Math.min(arr[0], arr[1]);
// for(let i = 2; i<arr.length; i++){
//     if(arr[i] > max){
//         max2 = max;
//         max = arr[i];
//     }else if(arr[i] > max2 && max != arr[i]){
//         max2 = arr[i]
//     }
// }
// console.log(max2);

// Find 2nd minimum element of the array
// let arr = [10, 20, 30 ,50, 50, 50];
// let min = Math.min(arr[0], arr[1]);
// let min2 = Math.max(arr[0], arr[1]);
// for(let i = 2; i<arr.length; i++){
//     if(arr[i] < min){
//         min2 = min;
//         min = arr[i];
//     }else if(arr[i] < min2 && min != arr[i]){
//         min2 = arr[i]
//     }
// }
// console.log(min2);


// Reverse an Array with extra space
// let arr = [10, 20, 30, 50, 50];
// let temp = new Array(arr.length);
// let j = 0;
// for(let i = arr.length-1; i>=0; i--){
//     temp[j] = arr[i];
//     j++;
// }
// console.log(temp);


// Reverse an Array without extra space
// let arr = [10, 20, 30, 40, 50, 60];
// let i = 0;
// let j = arr.length-1;
// while(i < j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);


// move all 0's left side and 1's right side
// let arr = [0, 1,0, 1, 0, 0, 1, 1, 0];
// let i = 0, j = 0;
// while(i<arr.length){
//     if(arr[i]===0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr);



