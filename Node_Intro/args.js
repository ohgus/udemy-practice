// console.log("HELLO FROM ARGS FILE!");
// console.log(process.argv)
const args = process.argv.slice(2);
for(let arg of args){
    console.log(`Hi there, ${arg}`);
}