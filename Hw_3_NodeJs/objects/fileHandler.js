var fs = require('fs');

function writeObjectToFile(filePath, object, append = false) {
    let data = [];

    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
    }

    if (append) {
        data.push(object);
    } else {
        data = [object];
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), { encoding: 'utf-8' });
    console.log('Данные записаны в файл.');
}

function readObjectFromFile(filePath) {
    if (fs.existsSync(filePath)) {
        var data = fs.readFileSync(filePath, { encoding: 'utf-8' });
        return JSON.parse(data);
    } else {
        console.log("Файл не найден.");
        return [];
    }
}

module.exports = { writeObjectToFile, readObjectFromFile };
