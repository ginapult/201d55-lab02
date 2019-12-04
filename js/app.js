'use strict';

console.log('The JS file is linked correctly.');

var username = prompt('Tell me your name!');
console.log('username = ' + username);

// if the username is Gina, show a custom message, otherwise show a generic message

var lowerCaseUserName = username.toLowerCase();

if(lowerCaseUserName === 'gina') {
  alert('Well, helloooo there, ' + username + 'banina!!!');
} else {
  alert('Welcome to my site!');
}

// Q1: Is my middle name Barbara? Use y or n
var middleNameAns = prompt('Is my middle name Barbara? Use y or n');
var middleNameAnsToLower = middleNameAns.toLowerCase();

if (middleNameAnsToLower === 'y') {
  alert('Sorry, my middle name isn\'t Barbara');
  console.log('User guessed wrong');
} else if (middleNameAnsToLower === 'n') {
  alert('Yep, you are right, my middle name is not Barbara');
  console.log('User guessed right');
} else {
  alert('Better luck next time ;/');
  console.log('User did not guess y or n');
}

// Q2: Am I from Philadelphia? Use y or n
var fromPhilly = prompt('Am I from Philly? User y or n');
var fromPhillyAnsToLower = fromPhilly.toLowerCase();

if (fromPhillyAnsToLower === 'y') {
  alert('Yup, yup, yes.');
  console.log('User guessed right');
} else if (fromPhillyAnsToLower === 'n') {
  alert('Nope, I am definitely from PHILADELPHIA!');
  console.log('User guessed wrong');
} else {
  alert('I forgive you for not knowing where I\'m from!');
  console.log('User did not guess y or n');
}

// Q3: Do I like white rice? Use y or n
var likeWhiteRice = prompt('Do I like white rice?');
var likeWhiteRiceToLower = likeWhiteRice.toLowerCase();

if (likeWhiteRiceToLower === 'y') {
  alert('Yeah, white rice is pretty, pretty, pretty good.');
}

// Q4: Do I have 6 siblings? Use y or n

// Q5: Is the sky blue? Use y or n
// Generate the user's name back to them in the final message
