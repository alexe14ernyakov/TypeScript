interface Observer{
    update(subject: Subject): void
}

class Subject{
    observers: Observer[]
    state: number

    constructor(){
        this.observers = []
        this.state = 0
    }
    
    attach(observer: Observer){
        this.observers.push(observer)
    }

    detach(observer: Observer){
        const observerIndex = this.observers.indexOf(observer)
        this.observers.splice(observerIndex, 1)
    }

    notify(){
        for(const observer of this.observers){
            observer.update(this)
        }
    }

    someBusinessLogic(){
        this.state = Math.floor(Math.random() * 2 + 1)
        this.notify
    }
}

class ObserverA implements Observer{
    update(subject: Subject){
        if(subject.state === 1){
            console.log('Event 1')
        }
    }
}

class ObserverB implements Observer{
    update(subject: Subject){
        if(subject.state === 2){
            console.log('Event 2')
        }
    }
}

const subject = new Subject
const observer1 = new ObserverA()
subject.attach(observer1)
const observer2 = new ObserverB()
subject.attach(observer2)
subject.someBusinessLogic()