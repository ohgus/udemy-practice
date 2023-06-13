const myMath = {
    square(num){
        return num * num;
    },
    cube(num){
        return num ** 3;
    }
}

console.log(myMath.cube(3)); // 27
console.log(myMath.square(3)); // 9

// use this

const dog = {
    name: "dabak",
    color: "white",
    breed: "mix",
    bark(){
        console.log(`${this.name} says 멍멍!!`);
    }
}

dog.bark();