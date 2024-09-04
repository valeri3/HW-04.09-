var Obstacle = require('./Obstacle');

// Класс RunningTrack (наследует Obstacle)
function RunningTrack(length) {
    this.length = length;
}
RunningTrack.prototype = Object.create(Obstacle.prototype);

RunningTrack.prototype.overcome = function(participant) {
    const result = participant.run(this.length);
    if (result) {
        console.log(`${participant.name} прошел беговую дорожку длиной ${this.length} метров.`);
    } else {
        console.log(`${participant.name} не смог пройти беговую дорожку длиной ${this.length} метров.`);
    }
    return result;
};

module.exports = RunningTrack;
