// function sum (){
//     console.log(arguments.reduce((acc,cur)=> acc+cur));
// }
// sum(2,6)

function sum (...nums){
    console.log(nums.reduce((acc,cur)=> acc+cur));
}
sum(2,6)

function race(gold,silver,...everyone){
    console.log(`gold : ${gold}`);
    console.log(`silver : ${silver}`);
    console.log(`thanks to others : ${everyone}`);
}
race("oms","sbk","kyo","ldh","cjy");