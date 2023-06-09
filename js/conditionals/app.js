// let random = Math.random();
// if(random < 0.5) {
//     console.log("your number is less than 0.5!!!");
// } else {
//     console.log("your number is larger than 0.5!!!");
// }
// console.log(random);

// const dayOfWeek = prompt("enter a day").toLowerCase();

// if(dayOfWeek === "monday") {
//     console.log("i hate monday");
// } else if (dayOfWeek === "tuesday") {
//     console.log("i love tuesday");
// } else if (dayOfWeek === "thursday") {
//     console.log("i love thursday");
// } else if (dayOfWeek === "wednesday") {
//     console.log("i really love wednesday");
// } else {
//     console.log('meh');
// }

// const age = 80;

// if(age < 5) {
//     console.log("you are a baby, you are free");
// } else if(age < 10) {
//     console.log("you are a child. you pay 10");
// } else if (age < 65) {
//     console.log("you are a adult. you pay 20");
// } else {
//     console.log("you are senior. pay 10");
// }

const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("good boy!");
    } else {
        console.log("password cannot cotain spaces!");
    }
} else {
    console.log("too short password. must be 6+ characters");
}