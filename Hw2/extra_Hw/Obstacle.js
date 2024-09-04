var EventEmitter = require('events');

// Базовый класс Препятствие
function Obstacle() {
    EventEmitter.call(this); // Наследуем EventEmitter
}
Obstacle.prototype = Object.create(EventEmitter.prototype);

module.exports = Obstacle;
