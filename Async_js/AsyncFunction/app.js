// <<<<<>>>>>
// async function
// <<<<<>>>>>

// const sing = async () => {
//     // throw "oh no, problem";
//     return "lalala";
// }

// sing()
//     .then(data => {
//         console.log("resolved:", data);
//     })
//     .catch(err => {
//         console.log("uh oh, rejected");
//         console.log(err);
//     })

// const login = async (username,password) => {
//     if(!username || !password) throw "missing password";
//     if(password === "oms") return "welcome"
//     throw "uncorrect password";
// }

// login("oms","om")
//     .then(msg => {
//         console.log("logged in");
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// <<<<<>>>>>
// await
// <<<<<>>>>>    

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    });
}

// delayedColorChange("red",1000)
//     .then(() => delayedColorChange("orange",1000))
//     .then(() => delayedColorChange("olive",1000))
//     .then(() => delayedColorChange("magenta",1000))
//     .then(() => delayedColorChange("blue",1000))
//     .then(() => delayedColorChange("yellow",1000))
//     .then(() => delayedColorChange("violet",1000))

async function rainbow() {
    await delayedColorChange("red",1000);
    await delayedColorChange("orange",1000);
    await delayedColorChange("yellow",1000);
    await delayedColorChange("green",1000);
    await delayedColorChange("blue",1000);
    await delayedColorChange("indigo",1000);
    await delayedColorChange("violet",1000);
    return "all done";
}

// rainbow().then(() => console.log("rainbow!!"));

// async function printRainbow() {
//     await rainbow();
//     console.log("rainbow!!!");
// }
// printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try{
        let data1 = await fakeRequest("/page1");
        console.log(data1);
        let data2 = await fakeRequest("/page2");
        console.log(data2);
    } catch(e){
        console.log("error")
        console.log("error is:",e);
    }
}
makeTwoRequests();