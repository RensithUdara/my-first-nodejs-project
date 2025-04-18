const os = require('os');

console.log('OS Type:', os.type()); // Get the operating system type
console.log('OS Platform:', os.platform()); // Get the operating system platform
console.log('OS Release:', os.release()); // Get the operating system release
console.log('OS Architecture:', os.arch()); // Get the operating system architecture
console.log('OS CPU Info:', os.cpus()); // Get information about the CPUs
console.log('OS Free Memory:', os.freemem()); // Get the amount of free system memory
console.log('OS Total Memory:', os.totalmem()); // Get the total amount of system memory        
console.log('OS Home Directory:', os.homedir()); // Get the home directory of the current user
console.log('OS Uptime:', os.uptime()); // Get the system uptime in seconds
console.log('OS Network Interfaces:', os.networkInterfaces()); // Get network interfaces information
console.log('OS User Info:', os.userInfo()); // Get information about the current user