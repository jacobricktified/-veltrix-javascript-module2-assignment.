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
/* Create a variable trafficLight and assign a value “yellow.;
2. Use switch to print what the trafficLight should print:
 "Stop"
 "Get Ready"
 "Go */
console.log("8. Traffic light instructions:");
let trafficLight = "yellow"; // You can change this value to test different cases
switch (trafficLight) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Get Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid traffic light color");
}
console.log("--------------------------------------------------\n");
/* Write a switch program that takes a fruit name and prints its price:
 Apple → 200
 Banana → 150
 Orange → 100
 Default → “Fruit not available” */
console.log("9. Print fruit price based on name:");
let fruitName = "Banana"; // You can change this value to test different cases
switch (fruitName) {
    case "Apple": console.log("Price: 200"); break; 
    case "Banana": console.log("Price: 150"); break;
    case "Orange": console.log("Price: 100"); break;
    default: console.log("Fruit not available");
}   
console.log("--------------------------------------------------\n");
/* Declare a string variable containing your full name. Print:
 The length
 The first character
 The last character*/
console.log("10. String properties of full name:");
let fullName = "Jacob Gichira Mbuco";
console.log("Length: " + fullName.length);
console.log("First character: " + fullName.charAt(0));
console.log("Last character: " + fullName.charAt(fullName.length - 1));
console.log("--------------------------------------------------\n");  
/*Write a program to convert a string to uppercase and lowercase. */
console.log("11. Convert string to uppercase and lowercase:");
let sampleString = "Hello World!";
console.log("Uppercase: " + sampleString.toUpperCase());
console.log("Lowercase: " + sampleString.toLowerCase());
console.log("--------------------------------------------------\n");      
/*Do the following:
 Extract “JavaScript” using slice()
 Replace “awesome” with “powerful”
 Check if the string includes “Script”*/
console.log("12. String manipulations:");
let complexString = "JavaScript is awesome!";
let extracted = complexString.slice(0, 10);
console.log("Extracted using slice(): " + extracted);
let replaced = complexString.replace("awesome", "powerful");
console.log("After replacement: " + replaced);
let includesScript = complexString.includes("Script");
console.log("Includes 'Script': " + includesScript);
console.log("--------------------------------------------------\n");  
/*Split this string into an array of words: "Learn JavaScript step by step" */
console.log("13. Split string into array of words:");
let stringToSplit = "Learn JavaScript step by step";
let wordsArray = stringToSplit.split(" ");
console.log("Array of words: ", wordsArray);
console.log("--------------------------------------------------\n");    
/*Remove all spaces from a string and convert it to lowercase. */
console.log("14. Remove spaces and convert to lowercase:");
let stringWithSpaces = "   Hello World   ";
let modifiedString = stringWithSpaces.replace(/\s+/g, '').toLowerCase();// Using regex to remove all spaces by replacing them with empty string and converting to lowercase
console.log("Modified string: '" + modifiedString + "'");
console.log("--------------------------------------------------\n");  
/*Count how many times the letter “a” appears in a string (using a for-loop). */
console.log("15. Count occurrences of letter 'a':");
let stringToCount = "An apple a day keeps the doctor away";
let count = 0;
for (let i = 0; i < stringToCount.length; i++) {
    if (stringToCount.charAt(i).toLowerCase() === 'a') {
        count++;
    }
}
console.log("Number of 'a' letters: " + count);
console.log("--------------------------------------------------\n");
/*Create an array of 5 colors. Log:
 The first color
The last color
 The array length
 2. Add a new color to the end using push().
 3. Remove the first color using shift(). */
console.log("16. Array of colors operations:");
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
console.log("First color: " + colors[0]);
console.log("Last color: " + colors[colors.length - 1]);
console.log("Array length: " + colors.length);
colors.push("Orange");
console.log("After push: ", colors);
colors.shift();
console.log("After shift: ", colors);
console.log("--------------------------------------------------\n"); 
/* Given: let nums = [4, 8, 2, 15, 23, 7];
 2. Write logic to:
 Sort the array
 Filter numbers greater than 10
 Multiply each number by 2 using for-loop */
console.log("17. Array operations on nums:");
let nums = [4, 8, 2, 15, 23, 7];
nums.sort((a, b) => a - b);//i have sorted the numbers by doing a-b to get ascending order and (a, b) are the two elements being compared this is called a compare function
console.log("Sorted array: ", nums);
let filteredNums = nums.filter(num => num > 10);
console.log("Numbers greater than 10: ", filteredNums);
let multipliedNums = [];   
for (let i = 0; i < nums.length; i++) {
    multipliedNums.push(nums[i] * 2);
}
console.log("Numbers multiplied by 2: ", multipliedNums);
console.log("--------------------------------------------------\n");
/*Combine these arrays into one:
 4. let a = ["A", "B"];
 5. let b = ["C", "D"] */
console.log("18. Combine two arrays:");
let a = ["A", "B"];
let b = ["C", "D"];
let combinedArray = a.concat(b);
console.log("Combined array: ", combinedArray);
console.log("--------------------------------------------------\n");  
/*Write a program that counts how many times a value appears in an array */
console.log("19. Count occurrences of a value in an array:");
let sampleArray = [1, 2, 3, 2, 4, 2, 5];
let valueToCount = 2;   
let occurrenceCount = 0;
for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] === valueToCount) { 
        occurrenceCount++;
    }
}
console.log("The value " + valueToCount + " appears " + occurrenceCount + " times in the array.");
console.log("--------------------------------------------------\n");        
