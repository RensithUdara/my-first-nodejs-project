const haveClassWednesday = true;

const promise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (haveClassWednesday) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});

console.log(promise); // This will log the Promise object