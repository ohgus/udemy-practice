// function sing(){
//     console.log("do");
//     console.log("re");
//     console.log("me");
// }
// sing();

// function greet(person){
//     console.log(`hi ${person}`);
// }
// greet("oms");

// function rant(message){
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
// rant("i hate beets");

// function greet(firstName , lastName){
//     console.log(`Hi ${firstName} ${lastName[0]}!`);
// }
// greet("Myoung-Seok" ,"Oh");

// function rpt(say,times){
//     let result = "";
//     for(let i = 0; i < times; i++){
//         result += say;
//     }
//     console.log(result);
// }
// rpt("say",5);

function add(x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        return false;
    }
    let sum = x + y;
    return sum;
}

function isShortsWeather(temperature){
    if(temperature >= 75){
        return true;
    } else return false;
}

isShortsWeather(80);

function lastElement(arr){
    if(arr.length === 0) return null;
    return arr[arr.length -1];
}
lastElement([3,5,7]);

function capitalize(str){
    let capStr = str.replace(str[0],str[0].toUpperCase());
    return capStr;
}
capitalize(str);