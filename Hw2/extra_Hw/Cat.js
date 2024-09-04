var Participant = require('./Participant');

// Класс Cat (наследует Participant)
function Cat(name) {
    Participant.call(this, name, 300, 3); //макс бегает 300 м и прыгает на 3 м
}
Cat.prototype = Object.create(Participant.prototype);

module.exports = Cat;
