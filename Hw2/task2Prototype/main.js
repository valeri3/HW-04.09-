var fileStreamModule = require('./fileStreamPrototype');

var fileStream = new fileStreamModule.FileStream();

fileStream.readFile(function (responce) {
    console.log(responce);
});

fileStream.writeFile(function (responce) {
    console.log(responce);
});
