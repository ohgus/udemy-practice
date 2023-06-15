const btn = document.getElementById("v2");
btn.onclick = () => {
    console.log("you clicked me!")
    console.log("i hope it worked!!");
}

function scream(){
    console.log("ahhhhhhh");
    console.log("stop touching me");
}
btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
    alert("clicked h1");
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener("dblclick",() => {
    alert("clicked v3");
})

function scream(){
    console.log("SCREAM");
}
function twist(){
    console.log("TWIST");
}
const tas = document.querySelector("#tas");

tas.addEventListener("click",scream)
tas.addEventListener("click",twist);