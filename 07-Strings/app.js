
let prompt = require('prompt-sync')();


                    // Stings //

// It is nothing but group of characters or collection of characters.
// String is immutable
// immutable:- Doesn't change the original state.
// Mutable:- Change the original state.

// Methods of String
// 1. Length: It returns the string length.
// let str = 'Hello';
// console.log(str.length);

// 2. Slice: It extract the substring.
// let str = 'Hello';
// console.log(str.slice(1, 5));  // ello
// console.log(str.slice(-5, -1)); //Hell


// 3. Substring :- Similar to slice, but no negative indexes.
// let str = 'Hello';
// console.log(str.substring(1, 5));   // ello
// console.log(str.substring(0));  // Hello


// 4. toUpperCase: It converts string to uppercase.
// 5. toLowerCase: It converts string to lower case.

// 6. concat() :- It concat multiple string into one string.
// let str = 'Hello';
// console.log(str.concat(" ", "world"));  // Hello world


// 7. trim():- It removes the spaces from both sides.
// let str = ' Hello ';
// console.log(str.trim());    // Hello


// 8. indexOf(substring) :- Return first index of substring.
// 9. lastIndexOf(substring) :- Return last index of substring
// 10.includes(substring) :- It checks if substring exists.
// 11. startsWith(substring) :- It checks if string starts with substring or not.
// 12. endWith(substring) :- It checks if string ends with substring or not.
// 13. replace(old, new) :- It replaces the first occurrence of substring.
// 14. replaceAll(old, new) :- It replaces all the occurrences of substring.
// 15. split(separator) :- It splits string into an array.

// 16. charAt(index)    :- It returns the character at index.
// let str = 'Hello';
// console.log(str.charAt(2)); // l

// 17. charCodeAt(index) :- It returns unicode value of character.
// let str = 'AHello';
// console.log(str.charCodeAt(0)); // 65


// Q. print each character of string on a new line
// let str = 'Hello';
// for(let i = 0; i<str.length; i++){
//     console.log(str[i]);
// }


// Q. Print the string in reverse order
// let str = 'Hello';
// let rev = " ";
// for(let i = str.length-1; i>=0; i--){
//     rev += str[i];
// }
// console.log(rev);


// Q. Print the largest word from the string 
// let str = "How are you";
// let words = str.split(" ");
// let max = " ";
// for(let i = 0; i<words.length; i++){
//     if(words[i].length>max.length){
//         max = words[i];
//     }
// }
// console.log(max);


// Q. Check the string is palindrome or not
// Palindrome is nothing but string is same if we read it from front-side or back-side.

// let str = prompt("Enter a String: ");
// let rev = "";
// for(let i = str.length-1; i>=0; i--){
//     rev += str[i];
// }
// if(str===rev){
//     console.log("It is a Palindrome string");
// }else{
//      console.log("It is not Palindrome string");
// }

// let str = prompt("Enter a String: ");
// let i = 0;
// let j = str.length-1;
// let palindrome = true;
// while(i<j){
//     if(str[i]!==str[j]){
//         palindrome = false;
//         break;
//     }
//     i++;
//     j--;

// }
// if(palindrome){
//     console.log("Palindrome");
// }else{
//     console.log("Not Palindrome");
// }


// Q. Toggle each character
// let str = prompt("Enter a string: ");
// console.log("Original String: "+ str);
// let toggle = " ";
// for(let i = 0; i<str.length;i++){
//     let ch = str.charCodeAt(i);
//     if(ch>=65 && ch<=90){
//         toggle += String.fromCharCode(ch + 32);
//     }else if(ch>=97 && ch<=122){
//         toggle += String.fromCharCode(ch - 32);
//     }
// }
// console.log("String after toggle: " + toggle);


// Q. Find the frequency of each character.
// let str = prompt("Enter a String: ");
// let arr = new Array(128).fill(0);
// for(let i = 0; i<str.length; i++){
//     let idx = str.charCodeAt(i);
//     arr[idx] = arr[idx] + 1;
// }
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCode(i)+ " : " + arr[i]);
//     }
// }


// Q. Find the score of a given string
// hello :- (h-e) + (e-l) + (l-l) + (l-o)
// let str = 'hello';
// let score = 0;
// for(let i = 0; i<str.length-1; i++){
//     score += Math.abs(str.charCodeAt(i) - str.charCodeAt(i+1));
// }
// console.log(score);


// Not added in the book

// Q. Reverse the words of a strings
// let str = prompt("Enter string: ");
// let s = str.trim().split(/\s+/);
// let rev = [];
// for(let i = s.length-1; i>=0; i--){
//     rev.push(s[i]);
// }
// let res = rev.join(" ");
// console.log(res);