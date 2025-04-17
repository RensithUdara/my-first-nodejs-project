const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('message', (message) => {
  console.log(`New message: ${message}`);
});

