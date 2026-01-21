const prompt = require("prompt-sync")();

// Q. Left rotation by 1 element
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[0];
// for(let i = 0; i<arr.length-1; i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;
// console.log(arr);

// Q. Right rotation by 1
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length-1];
// for(let i = arr.length -1 ; i>0; i--){
//     arr[i] = arr[i-1];
// }
// arr[0] = copy;
// console.log(arr);

// Q. Left rotation by k element
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter value of k: "));
// k = k % arr.length;
// for(let j = 0; j<k; j++){
//     let copy = arr[0];
// for (let i = 0; i < arr.length-1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length -1 ] = copy;
// }
// console.log("Rotation value: " + k);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter value of k: "));
// k = k % arr.length;
// let temp = new Array(arr.length);
// for (let i = 0; i < temp.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log("Rotation value: " + k);
// console.log(temp);

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter value of k: "));
// reverse(0, k-1);
// reverse(k, arr.length-1);
// reverse(0, arr.length-1);
// function reverse(i, j){
//     while(i< j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }
// console.log(arr);



// Q. Right rotation by k element
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter value of k: "));
// k = k % arr.length;
// for (let j = 0; j < k; j++) {
//   let copy = arr[arr.length - 1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = copy;
// }
// console.log("Rotation value: " + k);
// console.log(arr);



// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter value of k: "));
// k = k % arr.length;
// let temp = new Array(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   temp[(i + k) % arr.length] =  arr[i];
// }
// console.log("Rotation value: " + k);
// console.log(temp);

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter value of k: "));
// reverse(0, arr.length-1);
// reverse(0, k-1);
// reverse(k, arr.length-1);
// function reverse(i, j){
//     while(i< j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }
// console.log(arr);


// Remove duplicate elements from an sorted array
// let arr = [0, 0, 1, 1, 1, 2, 2, 3];
// function removeDuplicate(arr){
//     let j = 1;
//     for(let i = 0; i < arr.length -1; i++){
//         if(arr[i] != arr[i+1]){
//             arr[j] = arr[i+1];
//             j++
//         }
//     }
//     return j;
// }
// console.log(removeDuplicate(arr));
// console.log(arr);

//Q.  Merge two sorted Array
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// let merge = new Array(arr1.length + arr2.length);
// let i = 0, j = 0, k = 0;
// while(i<arr1.length && j < arr2.length){
//     if(arr1[i]<arr2[j]){
//         merge[k] = arr1[i];
//         i++;
//         k++;
//     }else{
//         marge[k] = arr2[j];
//         k++;
//         j++;
//     }
// }
// while(j<arr2.length){
//     merge[k] = arr2[j];
//     k++;
//     j++;
// }
// while(i<arr1.length){
//     merge[k] = arr1[i];
//     k++;
//     i++;
// }
// console.log(merge);



// Q. Best time to buy and sell stocks
// let arr = [1, 2, 3, 7, 6, 5];
// let maxProfit = 0;
// let min = arr[0];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<min) return min = arr[i];

//     let profit = arr[i] - min;
//     maxProfit = Math.max(maxProfit, profit);
// }
// console.log(maxProfit);

// Q. Sort the color [0-red, 1-white, 2-blue]
// let arr = [1, 2, 0, 0, 2, 1, 2, 0, 1];
// let i = 0,
//   j = 0,
//   k = arr.length - 1;
// while (j <= k) {
//   if (arr[j] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j++;
//   }else if(arr[j] === 1){
//     j++;
//   }else{
//     [arr[j], arr[k]] = [arr[k], arr[j]];
//     k--;
//   }
// }
// console.log(arr);


// SubArray with the largest sum using Kadane's algorithm. (LeetCode)

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let sum = 0;
// let maxSum = -Infinity;
// for(let i = 0; i<arr.length; i++){
//     sum += arr[i];
//    maxSum = Math.max(maxSum, sum);
//     if(sum < 0){
//         sum = 0;
//     }
// }
// console.log(maxSum);


// Majority Element / Moore's voting algorithm (LeetCode)
// let arr = [2, 2, 1, 1, 1, 2, 2];
// let mjrty = arr[0];
// let count = 1;
// for(let i = 1; i<arr.length; i++){
//     if(arr[i]===mjrty){
//         count++
//     }else{
//         count--;
//     }
//     if(count === 0){
//         mjrty = arr[i]
//         count = 1;
//     }
// }
// console.log(mjrty);


// Trapping Rain Water (LeetCode)
// let arr = [4, 2, 0, 3, 2, 5];
// let left = new Array(arr.length);
// let right = new Array(arr.length);
// let maxLeft = arr[0], maxRight = arr[arr.length-1];
// left[0] = maxLeft, right[right.length-1] = maxRight;

// for(let i = 0; i<arr.length; i++){
//     maxLeft = Math.max(arr[i], maxLeft);
//     left[i] = maxLeft;
// }
// for(let i = arr.length-2; i>=0; i--){
//     maxRight = Math.max(arr[i], maxRight);
//     right[i] = maxRight;
// }
// let ans = 0;
// for(let i =0; i< arr.length; i++){
//     ans += Math.min(left[i], right[i]) - arr[i];
// }
// console.log(ans);
