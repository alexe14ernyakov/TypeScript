type name = string
type age =  number

class TypedUser{
    name: name
    age: age

    constructor(otherName: name, otherAge: age){
        this.name = otherName
        this.age = otherAge
    }

    hello(): void{
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`)
    }
}

type Usr = TypedUser