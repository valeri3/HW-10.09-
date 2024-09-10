var Teacher = require('./objects/Teacher');
var Student = require('./objects/Student');
var Driver = require('./objects/Driver');
var { writeObjectToFile, readObjectFromFile } = require('./objects/fileHandler');

var teacher = new Teacher('Андрей Петров', 40, 'Математика');
var student = new Student('Мария Иванова', 20, '3 курс');
var driver = new Driver('Сергей Кузнецов', 35, 'BMW');

var filePath = './teacher.json';

writeObjectToFile(filePath, teacher);

writeObjectToFile(filePath, student, true);
writeObjectToFile(filePath, driver, true);

var readData = readObjectFromFile(filePath);
console.log(JSON.stringify(readData, null, 2));
