// Variables exercises

// #1. Create an index.js file in a folder and open the folder with VSCode
// Follow the steps of the recipe and translate it into code.
// You’re going to create a variable for each step of the recipe, and you’re naming it with a meaningful name representing the recipient used or the step itself.
// In each variable you’re going to sum the quantities of the ingredients used.
// In the end you should have a variable containing the sum of all the ingredients in a variable called “carbonara”
// display the value of carbonara in a console.log()

// Spaghetti alla Carbonara Recipe:
// Ingredients for 4 persons:
//          spaghetti 400g,
//          guanciale 250g,
//          very fresh egg yolks 6,
//          aged grated Pecorino Romano cheese 50g,
//          raw black pepper 4g

// #2. To make practice with variables you should create what follows:
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

let homework = `${greeting}, I am ${age} years old, was born in Romania, and currently live in Malta`;
const text = document.querySelector("h1");
text.textContent = homework;
