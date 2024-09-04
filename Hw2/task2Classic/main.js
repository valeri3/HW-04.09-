var FileStream = require('./fileStreamClass');

var fileStream = new FileStream();

fileStream.readFile((message) => {
    console.log(message);
});

fileStream.writeFile((message) => {
    console.log(message);
});
