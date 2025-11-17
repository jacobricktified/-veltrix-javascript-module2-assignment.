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
/* 3. Ask the user for a number. If it’s:
 Even → print “Even number”
 Odd → print “Odd number”
 Not a number → print “Invalid input” */
console.log("4. Check if a number is even, odd, or invalid:");
let input = 7; // You can change this value to test different cases
if(input % 2 === 0) {
    console.log("Even number");
} else if(input % 2 !== 0) {
    console.log("Odd number");
} else {
    console.log("Invalid input");
}
console.log("--------------------------------------------------\n");
/*1. Given three numbers, write logic to determine and print the largest.  */
console.log("5. Find the largest of three numbers:");
let num1 = 10;
let num2 = 20;
let num3 = 15;

if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else {
    console.log("The largest number is: " + num3);
}
console.log("--------------------------------------------------\n");
/** 2. Write a program that checks if a password is strong:
 Must be at least 8 characters
 Must include a number
 Must include an uppercase letter
 Print “Strong Password” or “Weak Password”. */
console.log("6. Check password strength:");
let password = "Password1"; // You can change this value to test different cases
let hasUppercase = /[A-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);
if (password.length >= 8 && hasUppercase && hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}
console.log("--------------------------------------------------\n");
/** 1. Write a switch statement that prints the name of the day when given a number from 1–7 
(Sunday - Saturday)*/
console.log("7. Print day name based on number:");
let dayNumber = 3; // You can change this value to test different cases
switch (dayNumber) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break; 
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;  
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid day number");
}   
console.log("--------------------------------------------------\n");