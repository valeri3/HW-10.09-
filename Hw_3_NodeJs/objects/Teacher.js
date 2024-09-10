var Person = require('./Person');

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.toString = function() {
    return `${Person.prototype.toString.call(this)}, Subject: ${this.subject}`;
};

module.exports = Teacher;
