// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



const movies = [
    {
        title: "alien",
        score: 99
    },
    {
        title: "x-men",
        score: 89
    },
    {
        title: "avengers",
        score: 100
    },
    {
        title: "transformer",
        score: 85
    }
]

// const movieReview = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })
const movieReview = movies.map( movie =>`${movie.title} - ${movie.score / 10}`);



console.log(movieReview);

// 화살표 함수 표현식
// const titles = movies.map((movie) =>{
//     return movie.title.toUpperCase();
// })

// console.log(titles);

// const add = (x,y) => {
//     return x + y;
// }
// console.log(add(3,7));

// // 인수가 하나만 존재한다면 ()를 사용하지 않아도 된다.
// const square = num => {
//     return num * num;
// }
// console.log(square(7));

// // 필수로 인수를 채울 필요는 없지만 인수의 위치는 있어야 한다.
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log(rollDie());

// // 암시적 반환 = 함수의 길이를 비교적 짧게 약식으로 적는다. 하나의 표현식만 사용가능

// // 일반적인 함수 표현식
// // const isEven = function (num) {
// //     return num % 2 === 0;
// // }

// // 화살표 함수 표현식
// // const isEven = (num) => {
// //     return num % 2 === 0;
// // }

// // 암시적 반환 표현식
// // const isEven = num => (
// //     num % 2 === 0;
// // )

// //암시적 반환 한줄로 
// const isEven = num => num % 2 === 0;
// console.log(isEven(4));