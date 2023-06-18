class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!!!`;
    }
}

class Dog extends Pet {    
    bark() {
        return "wooff!!";
    }
    eat() {
        return `${this.name} is scarfs his face!!`;
    }
}
class Cat extends Pet {
    constructor(name,age,livesLeft = 9){
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "meow!!!";
    }
}

const dabak = new Dog("Dabak",5);
const silky = new Cat("Silky",4);