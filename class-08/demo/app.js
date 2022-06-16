console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

for(let i = 0; i <= 1000; i++){
  console.log('counting i: ', i);
}

// While loops require a starting value, in this case we use 0 to start
let count = 0;
while(count <= 50){
  console.log(count);
  // count = count + 5;
  count += 5;
}

console.log("While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs");
// This loop counts down from 50 to 0, decreasing by -2 each time
count = 50;
while(count >= 40) {
  console.log(count);
  count = count - 2;
}

console.log("Count up from 0 to 60 by 10");
count = 0;
while(count <= 60) {
  console.log(count);
  count += 10;
}


// This loop will run forever, prompting the user to enter a number until they type 1. 
let stop = '1'; //SENTINAL
while(true){
  let input = prompt('Give a number. Type 1 to exit. ');
  if(input === stop) {
    break;
  }
}

console.log("For loops incorporate the 3 required parts of a loop on a single line: ");
console.log("(1) starting variable, ");
console.log("(2) an expression to end the loop, ");
console.log("(3) an expression to increment the starting variable. ");


for(let i = 0; i <= 15; i++){
  console.log( i );
}

// count-- 
// count = count - 1
// count -= 1;

for(let count = 1000; count >= 10; count--){
  console.log('counting ',count);
}