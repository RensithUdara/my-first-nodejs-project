// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// rl.question('What is your name? ', (name) => {
//     console.log(`Hello ${name}!`);
//     rl.question('What is your age? ', (age) => {
//         console.log(`You are ${age} years old.`);
//         rl.close();
//     });
// });


const readlinneSync = require('readline-sync');

const name = readlinneSync.question('What is your name? ');
console.log(`Hello ${name}!`);
const age = readlinneSync.question('What is your age? ');
console.log(`You are ${age} years old.`);
const color = readlinneSync.question('What is your favorite color? ');
console.log(`Your favorite color is ${color}.`); 