document.querySelector("button").addEventListener("click", (evt) => {
    console.log(evt)
})

// const input = document.querySelector("input");
// input.addEventListener("keydown",(e) => {
//     console.log(e.key);
//     console.log(e.code);
// })
// input.addEventListener("keyup",() => {
//     console.log("keyup");
// })
window.addEventListener("keydown",(e) => {
    switch(e.code) {
        case "ArrowUp":
            console.log("UP!");
            break;
        case "ArrowDown":
            console.log("DOWN!");
            break;
        case "ArrowLeft":
            console.log("Left!");
            break;
        case "ArrowRight":
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED");
            break;
    }
})