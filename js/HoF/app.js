// 고차 함수
// 함수는 인수로 또 다른 함수를 받을 수 있다. 이때 인수로 들어오는 함수는 () 포함하지 않는다.

function callTwice(func){
    func();
    func();
}

function callTenTimes(f){
    for(let i = 0; i < 10; i++){
        f();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

// callTwice(rollDie);
// callTenTimes(rollDie);

// 반환 함수

function myMystery(){
    const rand = Math.random();
    if (rand > 0.5){
        return function(){
            console.log("you win!!");
        }
    } else {
        return function(){
            console.log("you lose...");
        }
    }
}

const mystery = myMystery();

// mystery();

// 팩토리 함수

function between(min,max){
    return function(num){
        return min <= num && max >= num;
    }
}

const isChild = between(0,18);
const isAdult = between(19,64);
const isSenior = between(65,120);

console.log(isChild(9));
console.log(isAdult(9));
console.log(isSenior(79));