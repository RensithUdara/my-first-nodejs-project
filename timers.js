console.log('Hello World!');

const id = setTimeout(() => {
    console.log('Hello after 2 seconds!');
}
    , 2000);

clearTimeout(id);

console.log('End of script!');