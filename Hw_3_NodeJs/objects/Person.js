function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return `Человек: ${this.name}, возраст: ${this.age}`;
};

module.exports = Person;
