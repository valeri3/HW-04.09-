var Human = require('./Human');
var Cat = require('./Cat');
var Robot = require('./Robot');
var RunningTrack = require('./RunningTrack');
var Wall = require('./Wall');

// Участники
var participants = [
    new Human('Валера '),
    new Cat('Барсик '),
    new Robot('R4-ik ')
];

// Препятствия
var obstacles = [
    new RunningTrack(400), // Бег. дор. 400 м
    new Wall(2),           // Стена 2 м
    new RunningTrack(800), // Бег. дор. 800 м
    new Wall(1)            // Стена 3 м
];

// Участники проходят каждое препятствие
participants.forEach(function (participant) {
    console.log(`\nУчастник: ${participant.name} `);

    var passedAllObstacles = true;

    for (var i = 0; i < obstacles.length; i++) {
        var obstacle = obstacles[i];
        var result = obstacle.overcome(participant);

        if (!result) {
            passedAllObstacles = false;
            console.log(`${participant.name} выбыл из соревнования.`);
            break;
        }
    }

    if (passedAllObstacles) {
        console.log(`${participant.name} успешно прошел все препятствия!`);
    }
});
