// console.log('Hello World!');

// const id = setTimeout(() => {
//     console.log('Hello after 2 seconds!');
// }
//     , 2000);

// clearTimeout(id);

// console.log('End of script!');

console.log('Start of script!');

let count = 0;

setInterval(() => {
    console.log('Hello every 2 seconds! - ' + count);
    count++;
}
    , 2000);

console.log('End of script!');