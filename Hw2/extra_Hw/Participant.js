var EventEmitter = require('events');

// Базовый класс Учасник
function Participant(name, maxRunDistance, maxJumpHeight) {
    this.name = name;
    this.maxRunDistance = maxRunDistance;
    this.maxJumpHeight = maxJumpHeight;
    EventEmitter.call(this);
}

Participant.prototype = Object.create(EventEmitter.prototype);

Participant.prototype.run = function(distance) {
    if (distance <= this.maxRunDistance) {
        console.log(`${this.name} пробежал ${distance} метров.`);
        return true;
    } else {
        console.log(`${this.name} не смог пробежать ${distance} метров.`);
        return false;
    }
};

Participant.prototype.jump = function(height) {
    if (height <= this.maxJumpHeight) {
        console.log(`${this.name} прыгнул на высоту ${height} метров.`);
        return true;
    } else {
        console.log(`${this.name} не смог прыгнуть на высоту ${height} метров.`);
        return false;
    }
};

module.exports = Participant;
