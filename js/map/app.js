// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const doubles = numbers.map(function(num){
//     return num * 2;
// })
// console.log(doubles);

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

// 일반적인 함수 표현식
// const titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })
// 화살표 함수 표현식
const titles = movies.map((movie) =>{
    return movie.title.toUpperCase();
})

console.log(titles);