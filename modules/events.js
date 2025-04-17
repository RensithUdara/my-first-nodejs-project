const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('message', () => {
  console.log(`New message: ${message}`);
});

emitter.emit('message', 'Hello, world!');