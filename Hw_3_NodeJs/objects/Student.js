var Person = require('./Person');

function Student(name, age, course) {
    Person.call(this, name, age);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.toString = function() {
    return `${Person.prototype.toString.call(this)}, Course: ${this.course}`;
};

module.exports = Student;
