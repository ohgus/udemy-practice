// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "green";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "blue";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "yellow";
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

const delayedColorChange = (color,delay,doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext && doNext();
    },delay)
}
delayedColorChange("olive",1000,()=>{
    delayedColorChange("green",1000,()=>{
        delayedColorChange("yellow",1000,()=>{
            delayedColorChange("red",1000,()=>{
                delayedColorChange("blue",1000,()=>{
    
                })
            })
        })
    })
})