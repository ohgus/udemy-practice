// function rollDie(numSides){
//     if(numSides === undefined){
//         numSides = 6;
//     }
//     return console.log(Math.floor(Math.random()*numSides)+1);
// }
function rollDie(numSides = 6){
    console.log(Math.floor(Math.random()*numSides)+1);
}
rollDie();

function greet(person,msg = "hey there",punc = "!!"){
    console.log(`${msg}, ${person}${punc}`);
}
greet("oms")