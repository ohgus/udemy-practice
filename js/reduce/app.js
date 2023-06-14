const prices = [1500, 10000, 17000, 7500, 22000];

// let total = 0;
// for (let price of prices){
//     total += price;
// }

// const total = prices.reduce((acc,cur) => {
//     return acc + cur;
// })
const total = prices.reduce((acc,cur) => acc + cur);

console.log(total)

const minPrice = prices.reduce((min,price) => Math.min(min,price));

console.log(minPrice);

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

const bestMovie = movies.reduce((bestM,curM) => {
    if(curM.score > bestM.score){
        return curM;
    }
    return bestM;
});
console.log(bestMovie)

const evens = [2,4,6,8];
const totNum = evens.reduce((acc,cur) => acc + cur,10)
console.log(totNum);