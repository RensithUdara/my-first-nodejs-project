const EventEmitter = require('node:events');

const emitter = new EventEmitter();

// Listen for the 'message' event
emitter.on('message', (message) => {  // <-- Add the `message` parameter here
  console.log(`New message: ${message}`);
});

// Emit the 'message' event and pass the message as an argument
emitter.emit('message', 'Hello, world!');
