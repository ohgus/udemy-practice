const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// function print(element){
//     console.log(element);
// }
// numbers.forEach(print);

numbers.forEach(function(el){
    if(el % 2 === 0){
        console.log(el);
    }
})

// for of 활용
// for(let el of numbers){
//     console.log(el);
// }

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
    }
]

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
})
