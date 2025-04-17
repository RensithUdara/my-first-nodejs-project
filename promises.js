//const haveClassWednesday = true; // Simulate whether you have class on Wednesday

// const checkClass = new Promise(() => {
//     const promise = new Promise((resolve, reject) => {
//         const success = true; // Simulate success or failure
//         if (haveClassWednesday) {
//             resolve("Promise resolved successfully!");
//         } else {
//             reject("Promise rejected.");
//         }
//     });
//     return promise;
// });

// checkClass.then(result => {
//     console.log(result); // Handle successful resolution
// }).catch(error => {
//     console.log(error); // Handle rejection
// });


// const promise = new Promise((resolve, reject) => {
//     const success = true; // Simulate success or failure
//     if (haveClassWednesday) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected.");
//     }
// });

// console.log(promise); // This will log the Promise object


const checkClass = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            const haveClassWednesday = true; // Simulate whether you have class on Wednesday
            if (haveClassWednesday) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, 2000); // Simulate a delay of 2 seconds
    });
};

console.log('Start of script!');

checkClass().then(result => {
    console.log(result); // Handle successful resolution
    return result; // Return the result for the next then() block
}).then(result => {
    console.log('Next then block:', result); // Handle the result from the previous then() block
});

console.log('End of script!');