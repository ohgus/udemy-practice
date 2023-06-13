// 함수 스코프

// function feedLiz(){
//     let todayFeed = 6;
//     console.log(todayFeed);
// }
// feedLiz();

// 함수 내부에서 선언된 변수는 함수 안에서만 유효하다.
// function feedLiz(){
//     let todayFeed = 6;
// }
// feedLiz();
// console.log(todayFeed); 

// let lizard = "leopard";
// function lizWatch(){
//     let lizard = "crested";
//     console.log(lizard);
//     // 함수 안에서 리자드를 호출하면 함수 안에 있는 리자드를 참조한다.
// }
// lizWatch();

// let lizard = "leopard";
// function lizWatch(){
//     let lizard = "crested";
// }
// console.log(lizard); // 함수 밖에서 리자드를 호출하면 밖에 있는 리자드를 참조한다.
// lizWatch();

// 블럭 스코프

let num = 5;
if(num > 0){
    let myNum = 8;
}
console.log(num);
// console.log(myNum); // 블럭 안에 생성된 변수는 블럭 밖에서 유효하지 않다.
// 만약 var를 이용해 변수를 선언했다면 이는 전역 범위를 사용하기에 블럭 밖에서도 유효하다.
// let , const 는 블럭 범위를 가지기에 범위를 벗어나면 유효하지 않다.

// 렉시컬 스코프

// 함수 안에서 생성된 자식 함수는 부모 함수의 변수를 참조할 수 있다.
// 반대로 자식 함수 안에서 생성된 변수는 부모 함수에서 참조할 수 없다.
function lizard(){
    const myLizard = ["leopard","crested"];
    function feed(){
        let color = "red";
        for(liz of myLizard){
            console.log(`${liz} eat bugs`);
        }
    }
    feed();
    // console.log(color); 
}
lizard();