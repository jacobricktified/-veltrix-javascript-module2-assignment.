/* 1. Write a program that checks if a number is positive, negative, or zero. */

console.log("1. Check if a number is positive, negative, or zero:");
numberToCheck = 10; // You can change this value to test different cases
let num = numberToCheck;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
console.log("--------------------------------------------------\n");

 /*2. Write a program that checks whether a user’s age is 18 or older and prints “Access 
Granted” or “Access Denied”*/
console.log("2. Check user age for access:");
let userAge = 20; // You can change this value to test different cases
if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}
console.log("--------------------------------------------------\n");
/*  1. A student score is stored in a variable: let score = 74;
 2. Use if...else if...else to print:
 A (>= 80)
 B (>= 70)
 C (>= 60)
 D (>= 50)
 F (below 50*/
console.log("3. Grade based on score:");
let score = 74; // You can change this value to test different cases
if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else if (score >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
console.log("--------------------------------------------------\n");    

