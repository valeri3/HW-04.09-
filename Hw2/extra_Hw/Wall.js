var Obstacle = require('./Obstacle');

// Класс Wall (наследует Obstacle)
function Wall(height) {
    this.height = height;
}
Wall.prototype = Object.create(Obstacle.prototype);

Wall.prototype.overcome = function(participant) {
    const result = participant.jump(this.height);
    if (result) {
        console.log(`${participant.name} перепрыгнул стену высотой ${this.height} метров.`);
    } else {
        console.log(`${participant.name} не смог перепрыгнуть стену высотой ${this.height} метров.`);
    }
    return result;
};

module.exports = Wall;
