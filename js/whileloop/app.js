// let count = 0;
// while(count < 10){
//     count++;
//     console.log(count);
// }

// const Secret = "Bokyoung";

// let guess = prompt("enter the secret code!!");
// while(guess !== Secret){
//     guess = prompt("enter the secret code!!");
// }
// console.log("congrats you got it!!");

// let input = prompt("hey say something!");
// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === "stop") break;
// }
// console.log("you win !!");

let maximum = parseInt(prompt("enter the maximum number!"));

while(!maximum){
    maximum = parseInt(prompt("enter the real number!"));
}

const target = Math.floor(Math.random() * maximum) + 1;
// console.log(target);

let guess = parseInt(prompt("enter your guess!"));
let cnt = 1;

while(parseInt(guess) !== target){
    if(guess === "q") break;
    cnt++;
    if(guess > target){
        guess = prompt("too high! enter new guess!");
    } else {
        guess = prompt("too low! enter new guess!");
    }
}
if(guess === "q"){
    console.log("ok,you quit");
} else {
    console.log("congrats buddy!");
    console.log(`you got it ${cnt} guesses`);
}