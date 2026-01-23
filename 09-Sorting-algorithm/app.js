let prompt = require("prompt-sync")();

//  Sorting Algorithms

// 1. Bubble sort :-

// Time Complexity for this n*n

// Ascending order
// let arr = [10, 5, 1, 12, 3];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if(arr[j]> arr[j+1]){
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//     }
//   }
// }
// console.log(arr);

// Descending order
// let arr = [10, 5, 1, 12, 3];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 -i; j++) {
//     if(arr[j]< arr[j+1]){
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//     }
//   }
// }
// console.log(arr);

// 2. Selection sort :-

// Time Complexity for this is n*n

// Ascending order
// let arr = [10, 5, 1, 12, 9];
// for(let i = 0; i<arr.length; i++){
//     let minIndex = i;
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[minIndex] > arr[j]) minIndex = j;
//     }
//     if(minIndex != i){
//         [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
//     }
// }
// console.log(arr);

// Descending order
// let arr = [10, 5, 1, 12, 9];
// for(let i = 0; i<arr.length; i++){
//     let minIndex = i;
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[minIndex] < arr[j]) minIndex = j;
//     }
//     if(minIndex != i){
//         [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
//     }
// }
// console.log(arr);

// 3. Insertion sort :-

// Time complexity for this is n*n

// Ascending Order
// let arr = [10, 5, 1, 12, 9];
// for (let i = 1; i < arr.length; i++) {
//   let key = arr[i];
//   let j = i - 1;
//   while (j >= 0 && arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = key;
// }
// console.log(arr);


// Descending Order
// let arr = [10, 5, 1, 12, 9];
// for (let i = 1; i < arr.length; i++) {
//   let key = arr[i];
//   let j = i - 1;
//   while (j >= 0 && arr[j] < key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = key;
// }
// console.log(arr);