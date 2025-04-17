const timeout = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            const haveClassWednesday = true; // Simulate whether you have class on Wednesday
            if (haveClassWednesday) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, time); // Simulate a delay of 2 seconds
    });
};

setTimeout(() => {
    console.log('Hello after 2 seconds!');
}
, 2000);

timeout(2000).then(result => {
    console.log(result); // Handle successful resolution
}
).catch(error => {
    console.log(error); // Handle rejection
});