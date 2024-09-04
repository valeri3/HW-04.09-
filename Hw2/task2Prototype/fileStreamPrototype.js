var EventEmitter = require('events');

function FileStream() {
    this._file = "";
    EventEmitter.call(this);
}

FileStream.prototype = new EventEmitter();

FileStream.prototype.readFile = function(callback) {
    if (typeof callback === 'function') {
        this.on('fileRead', callback);
    }
    this._read();
};

FileStream.prototype.writeFile = function(callback) {
    if (typeof callback === 'function') {
        this.on('fileWritten', callback);
    }
    this._write();
};

FileStream.prototype._read = function() {
    console.log('Чтение файла начато...');
    var someDataFromFile = 'Файл прочитан';
    this.emit('fileRead', someDataFromFile);
    console.log('Чтение файла завершено.');
};

FileStream.prototype._write = function() {
    console.log('Запись файла начата...');
    var message = 'Файл записан';
    this.emit('fileWritten', message);
    console.log('Запись файла завершена.');
};

module.exports.FileStream = FileStream;
