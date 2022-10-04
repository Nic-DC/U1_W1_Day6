// Variables exercises

// #1. Create an index.js file in a folder and open the folder with VSCode
// Follow the steps of the recipe and translate it into code.

// Spaghetti alla Carbonara Recipe:
const spaghetti = 400;
const guanciale = 250;
const eggYolks = 6;
const cheesePecorino = 50;
const blackPepper = 4;
const water = 2;
const salt = 1;
const mediumHeat = 3;
const highHeat = 1;
const setAside = 1;

// To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips.
// Combine the egg yolks with the finely grated Pecorino Romano.
// Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of
// it to the yolks and chees mixture, set aside the rest.
let stripsGuanciale = guanciale;
let dimensionlayerGuanciale = 1;
let yolksAndPecorino = eggYolks + cheesePecorino;
let quarterRoastedBlackPepper = blackPepper / 4;
let restOfRoastedBlackPepper = blackPepper - quarterRoastedBlackPepper;
let yolksPecorinoPepperMix = yolksAndPecorino + quarterRoastedBlackPepper;

// Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp,
// then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.
// Cook the pasta with a pinch of salt in the water (guanciale is already very salty);
// set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.
let greaseGuanciale = 20;
let brownStripsGuanciale =
  stripsGuanciale - greaseGuanciale + highHeat + mediumHeat;
let cookedSpaghetti = spaghetti + water + salt;
let drainedSpaghetti = spaghetti + salt + (1 / 20) * water;
let ladleSpaghettiWater = 1;

// Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:
// this will create a creamy sauce with the pasta starch contained in that water.
// TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.
// Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.
// It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.
// Add the remaining roasted black pepper and serve immediately.
let reservedSpaghettiWater = 2;
let cooledGuanciale = brownStripsGuanciale;
let creamySauce = reservedSpaghettiWater + cooledGuanciale;
let sauceAndSpaghettiMix = creamySauce + drainedSpaghetti + setAside;
let preCarbonara = sauceAndSpaghettiMix + yolksPecorinoPepperMix;
let carbonara = preCarbonara + restOfRoastedBlackPepper;
console.log({ carbonara });

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
