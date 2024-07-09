"use strict";
class TypedUser {
    constructor(otherName, otherAge) {
        this.name = otherName;
        this.age = otherAge;
    }
    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}
