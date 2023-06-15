// document.querySelector('p').innerText = "lol";

// const links = document.querySelectorAll("a");

// for(let link of links){
//     link.innerText = "I AM A LINK!!!";
// }

// document.querySelector("h1").innerHTML = "<i>HELLO!</i>";

// <<<<<>>>>>
// attributes
// <<<<<>>>>>

// const h1 = document.querySelector("h1");
// h1.style.color = "green";
// h1.style.fontSize = "3em";
// h1.style.border = "2px solid pink";

// for(let link of links){
//     link.style.color = "red";
//     link.style.textDecorationColor = "green";
//     link.style.textDecorationStyle = "wavy";
// }

// <<<<<>>>>>
// classList
// <<<<<>>>>>

// const h2 = document.querySelector("h2");
// // h2.setAttribute("class","purple");
// // let curClass = h2.getAttribute("class");
// // h2.setAttribute("class",`${curClass} border`);
// h2.classList.add("purple");
// h2.classList.add("border");
// h2.classList.remove("border");
// h2.classList.contains("border"); // => false
// h2.classList.contains("purple"); // => true
// h2.classList.toggle("purple"); // => off
// h2.classList.toggle("purple"); // => on

// <<<<<>>>>>
// createElement
// <<<<<>>>>>

// const newImg = document.createElement("img");
// newImg.src = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80";
// document.body.appendChild(newImg);
// newImg.classList.add("square");

// const newH3 = document.createElement("h3");
// newH3.innerText = "I AM NEW!!";
// document.body.appendChild(newH3);

// const p = document.querySelector('p');
// p.append("I AM NEW TEXT YAY!!!");

// const newB = document.createElement("b");
// newB.append("HI");
// p.prepend(newB);

// const newH2 = document.createElement("h2");
// newH2.append("Are Lovely Chickens");
// const theH1 = document.querySelector("h1");
// theH1.insertAdjacentElement("afterend",newH2);

// const h3 = document.createElement("h3");
// h3.innerText = "i am h3";
// theH1.after(h3);

// <<<<<>>>>>
// removeElement
// <<<<<>>>>>

const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi); 

const b = document.querySelector("b");
b.parentElement.removeChild(b);

const img = document.querySelector("img");
img.remove();