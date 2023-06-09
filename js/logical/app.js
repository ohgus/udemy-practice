// && and
// const password = prompt("enter");

// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("good");
// } else {
//     console.log("wrong password");
// }

// || or
// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

// const age = -30;
// if(age >= 0 && age <= 5 || age > 65) {
//     console.log("free");
// } else if(age > 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("you cant pass");
// }

// ! not

// let firstName = prompt("enter first name");

// if(!firstName) {
//     firstName = prompt("try again");
// }

const age = 45;

if(!(age >= 0 && age <= 5 || age > 65)) {
        console.log("you are not a baby");
    }