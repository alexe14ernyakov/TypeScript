class User{
    name: string
    age: number

    constructor (otherName: string, otherAge: number){
        this.name = otherName
        this.age = otherAge
    }

    hello(): void{
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`)
    }
}

interface IUser{
    user_obj: User
}