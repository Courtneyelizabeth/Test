//JS Workshop Monday 9/14

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).
console.log("Kyle");
// Kyle

//2. Declare a variable called name, log it to the console.
var name = "Kyle Maxwell";
console.log(name);
// Kyle Maxwell

//3. Declare two variables with number values. Add, subtract, multiply and divide them.
var num = 7;
var number = 4;

console.log(num + number);
// 11
console.log(num - number);
// 3
console.log(num / number);
// 1.75
console.log(num * number);
// 28

//4. Declare two variables with string values. Create a third variable that concatenates them.
var greeting = "Salutations";
var subject = "Earthling";
var welcome = greeting +" "+subject;

console.log(welcome);
// Salutations Earthling	

//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.
var f = "5";
var t = "3";

console.log(f+t);
// 53
This combines the strings together to make one bigger number.

console.log(f-t);
// 2 
Just subracts the second string from the first.

console.log(f/t);
// 1.6666666666666667
Just divides the first string by the second.

console.log(f*t);
// 15
Multiplies the first number by the second number.

//6. Create a prompt that asks a user to pick a number. Double the answer.
var numbergame = prompt("Pick a Number.");
// 6
alert(numbergame * 2);
// 12

//7. Create a custom alert.
alert("How are you," + name + ", today?");

//8. Declare three variables called length, width and height. Calculate area and volume.
var length = 4;
var width = 7;
var height = 5;

var area = length * width;
console.log(area);
// 28

var volume = length * width * height;
console.log(volume);
// 140

//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."
var name = prompt("Insert Name Here");
var age = prompt("Insert Age Here");
var city = prompt("Insert City Here");

alert("My name is " + name + " I'm " + age + " years old, and I live in " + city);
// My name is Kyle I'm  19 years old, and I live in Denver

//10. Create an alert that uses the response from a prompt.
var color = prompt("What is your favorite color?");
alert(color + " is mine too!");

// Blue is mine too!
