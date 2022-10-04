// To make practice with variables you should create what follows:

// - a variable for your name
let firstName = "Dan";

// - a variable for your last name
let lastName = "Costea";

// - if you have a middle name, create a variable for it
let middleName = "Nic";

// - a variable that will sum the first two variables into your full name, make sure there is a space in between name, middle name and last name.
let fullName = `${firstName} ${middleName} ${lastName}`;
console.log({ fullName });

// print on the console: hello, my name is [NAME HERE]. Make sure to use the variables!
let greeting = `Hello, my name is ${fullName}`;
console.log({ greeting });

// Save your age to a variable
let age = 34;

// Save the current year to a variable
let currentYear = 2022;

// Starting from this two information, print your birth year on the terminal, saving it to a variable.
let birthYear = currentYear - age;
console.log({ birthYear });

let homework = `${greeting}, I am ${age} years old, and I live in Malta`;
const text = document.querySelector("h1");
text.textContent = homework;
