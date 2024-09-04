var Participant = require('./Participant');

// Класс Human (наследует Participant)
function Human(name) {
    Participant.call(this, name, 500, 2); //макс бегает 500 м и прыгает на 2 м
}
Human.prototype = Object.create(Participant.prototype);

module.exports = Human;
