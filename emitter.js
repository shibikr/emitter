var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('wish',function(){
	console.log('Namaskaram');
});

emitter.emit('wish');