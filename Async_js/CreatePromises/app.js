// <<<<<>>>>>
// first create promise
// <<<<<>>>>>

// const fakeRequest = url => {
//     return new Promise((resolve,reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand < 0.7){
//                 resolve("Got It!");
//             }
//             reject("Error")
//         },1000)
//     })
// }

// <<<<<>>>>>
// fakeRequest("/dog/1")
// <<<<<>>>>>

//     .then((data) => {
//         console.log("done");
//         console.log("data is:",data);
//     })
//     .catch((err) => {
//         console.log("fail",err);
//     })

// colorChange Promise
// const delayedColorChange = (color,delay,doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         doNext && doNext();
//     },delay)
// }
// delayedColorChange("olive",1000,()=>{
//     delayedColorChange("green",1000,()=>{
//         delayedColorChange("yellow",1000,()=>{
//             delayedColorChange("red",1000,()=>{
//                 delayedColorChange("blue",1000,()=>{
//                     delayedColorChange("indigo",1000,()=>{
//                         delayedColorChange("violet",1000,()=>{
    
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    });
}

delayedColorChange("red",1000)
    .then(() => delayedColorChange("orange",1000))
    .then(() => delayedColorChange("olive",1000))
    .then(() => delayedColorChange("magenta",1000))
    .then(() => delayedColorChange("blue",1000))
    .then(() => delayedColorChange("yellow",1000))
    .then(() => delayedColorChange("violet",1000))