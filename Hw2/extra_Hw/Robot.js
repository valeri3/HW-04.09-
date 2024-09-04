var Participant = require('./Participant');

// Класс Robot (наследует Participant)
function Robot(name) {
    Participant.call(this, name, 1000, 3); //макс бегает 1000 м и прыгает на 1 м
}
Robot.prototype = Object.create(Participant.prototype);

module.exports = Robot;
