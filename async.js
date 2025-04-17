const timeout = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const haveClassWednesday = true; // Simulate whether you have class on Wednesday
            if (haveClassWednesday) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, time); // Simulate a delay of 2 seconds
    });
};

// setTimeout(() => {
//     console.log('Hello after 2 seconds!');
// }
// , 2000);

// timeout(2000).then(result => {
//     console.log(result); // Handle successful resolution
// }
// ).catch(error => {
//     console.log(error); // Handle rejection
// });


// const main = async () => {
//     // timeout(2000).then(result => {
//     //     console.log(result); // Handle successful resolution
//     // }
//     // ).catch(error => {
//     //     console.log(error); // Handle rejection
//     // });

//     const result1 = await timeout(2000);
//     console.log(result1); // Handle successful resolution
//     console.log('Next then block:', result1); // Handle the result from the previous then() block        

//     const result2 = await timeout(2000);
//     console.log(result2); // Handle successful resolution
//     console.log('Next then block:', result2); // Handle the result from the previous then() block

//     const result3 = await timeout(2000);
//     console.log(result3); // Handle successful resolution
//     console.log('Next then block:', result3); // Handle the result from the previous then() block

// }

//console.log('End of script!');



const main = async () => {
    timeout(10000).then(result1 => {
        console.log(result1); // Handle successful resolution
        console.log('Next then block:', result1); // Handle the result from the previous then() block        
    });

    timeout(2000).then(result2 => {
        console.log(result2); // Handle successful resolution
        console.log('Next then block:', result2); // Handle the result from the previous then() block       
    });

    timeout(3000).then(result3 => {
        console.log(result3); // Handle successful resolution
        console.log('Next then block:', result3); // Handle the result from the previous then() block           
    });
};

main();
