// document.querySelector('p').innerText = "lol";

const links = document.querySelectorAll("a");

// for(let link of links){
//     link.innerText = "I AM A LINK!!!";
// }

// document.querySelector("h1").innerHTML = "<i>HELLO!</i>";

// <<<<<>>>>>
// attributes
// <<<<<>>>>>

const h1 = document.querySelector("h1");
h1.style.color = "green";
h1.style.fontSize = "3em";
h1.style.border = "2px solid pink";

for(let link of links){
    link.style.color = "red";
    link.style.textDecorationColor = "green";
    link.style.textDecorationStyle = "wavy";
}

// <<<<<>>>>>
// classList
// <<<<<>>>>>

const h2 = document.querySelector("h2");
// h2.setAttribute("class","purple");
// let curClass = h2.getAttribute("class");
// h2.setAttribute("class",`${curClass} border`);
h2.classList.add("purple");
h2.classList.add("border");
h2.classList.remove("border");
h2.classList.contains("border"); // => false
h2.classList.contains("purple"); // => true
h2.classList.toggle("purple"); // => off
h2.classList.toggle("purple"); // => on