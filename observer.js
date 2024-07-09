"use strict";
class Subject {
    constructor() {
        this.observers = [];
        this.state = 0;
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    someBusinessLogic() {
        this.state = Math.floor(Math.random() * 2 + 1);
        this.notify;
    }
}
class ObserverA {
    update(subject) {
        if (subject.state === 1) {
            console.log('Event 1');
        }
    }
}
class ObserverB {
    update(subject) {
        if (subject.state === 2) {
            console.log('Event 2');
        }
    }
}
const subject = new Subject;
const observer1 = new ObserverA();
subject.attach(observer1);
const observer2 = new ObserverB();
subject.attach(observer2);
subject.someBusinessLogic();
