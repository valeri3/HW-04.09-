var EventEmitter = require('events');

var emitter = new EventEmitter();

emitter.on('start', () => {
    console.log('Обработчик 1: Событие start сработало');
});

emitter.on('start', () => {
    console.log('Обработчик 2: Событие start сработало');
});

emitter.once('start', () => {
    console.log('Обработчик 3 (once): Событие start сработало один раз');
});

emitter.emit('start');
emitter.emit('start');
