'use strict';
console.log('app js file is connected.');

// prompt is assigned to the userName
//            <======
let userName = prompt('What is your name?');

console.log('The user name: ',userName);


let time = prompt('What time is it?');

console.log('the time is', typeof time);


let timeNumber = parseInt(time);

console.log('did it turn into a number? ',timeNumber);

alert('You entered the time ' + timeNumber);

let message;

if(time <= 11){
  message = 'Good Morning!';
} else if( time <= 18){
  message = 'Good Afternoon';
} else if(time <= 24){
  message = 'Good Night go to bed!';
} else {
  message = 'Time must not exist!';
}

console.log('our return message ',message);

document.write('Hello ' + userName + '! ' + 'The time is ' + timeNumber + ' ' + message);