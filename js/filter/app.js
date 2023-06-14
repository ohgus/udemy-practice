// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const newNum = numbers.filter(num => {
//     return num < 10;
// })
// console.log(newNum);

const movies = [
    {
        title: "alien",
        score: 81,
        year: 1990
    },
    {
        title: "x-men",
        score: 89,
        year: 2001
    },
    {
        title: "avengers",
        score: 95,
        year: 2008
    },
    {
        title: "transformer",
        score: 85,
        year: 2003
    },
    {
        title: "john Wick",
        score: 97,
        year: 2010
    },
    {
        title: "iron man",
        score: 93,
        year: 2005
    }
]

const goodMovies = movies.filter(m => m.score > 90);
const goodTitles = movies.filter(m => m.score > 90).map(m => m.title);
const badMovies = movies.filter(m => m.score < 90);
const recentMovies = movies.filter(m => m.year >= 2005);
console.log(goodMovies);
console.log(badMovies);
console.log(recentMovies);
console.log(goodTitles);