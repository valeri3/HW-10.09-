var Person = require('./Person');

function Driver(name, age, car) {
    Person.call(this, name, age);
    this.car = car;
}

Driver.prototype = Object.create(Person.prototype);
Driver.prototype.constructor = Driver;

Driver.prototype.toString = function() {
    return `${Person.prototype.toString.call(this)}, Car: ${this.car}`;
};

module.exports = Driver;
