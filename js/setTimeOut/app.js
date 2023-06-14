
// console.log("hello!")
// setTimeout(()=>{
//     console.log("are you still there??");
// }, 3000);
// console.log("bye!")

const id = setInterval(()=>{
    console.log(`now : ${Math.floor(Math.random()*10)+1}`);
},3000);

clearInterval(id);