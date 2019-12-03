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

