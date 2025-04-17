const haveClassWednesday = true;

const checkClass = new Promise((resolve, reject) => {
    const promise = new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        if (haveClassWednesday) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected.");
        }
    });
    return promise;
});

checkClass.then(result => {
    console.log(result); // Handle successful resolution
}).catch(error => {
    console.log(error); // Handle rejection
});


// const promise = new Promise((resolve, reject) => {
//     const success = true; // Simulate success or failure
//     if (haveClassWednesday) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected.");
//     }
// });

// console.log(promise); // This will log the Promise object