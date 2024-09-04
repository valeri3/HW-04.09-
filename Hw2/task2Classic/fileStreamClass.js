var EventEmitter = require('events');

class FileStream extends EventEmitter {
    readFile(callback) {
        if (typeof callback === 'function') {
            this.on('fileRead', callback);
        }
        this._read();
    }

    writeFile(callback) {
        if (typeof callback === 'function') {
            this.on('fileWritten', callback);
        }
        this._write();
    }

    _read() {
        console.log('Чтение файла начато...');
        this.emit('fileRead', 'Файл прочитан');
        console.log('Чтение файла завершено.');
    }

    _write() {
        console.log('Запись файла начата...');
        this.emit('fileWritten', 'Файл записан');
        console.log('Запись файла завершена.');
    }
}

module.exports = FileStream;
