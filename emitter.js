var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('wish',function(){
	console.log('Namaskaram');
});

emitter.once('wish',function(){
	console.log('hello');
});

emitter.on('flower',function(){
	console.log('Rose');
});

emitter.on('flower',function(){
	console.log('marigold');
});

emitter.emit('wish');
emitter.emit('wish');
emitter.emit('flower');