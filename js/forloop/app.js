// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 2; i <= 20; i += 2){
//     console.log(i);
// }

// for(let i = 100; i >= 0; i -= 10){
//     console.log(i);
// }

// for(let i = 10; i <= 10000; i *= 10){
//     console.log(i);
// }

// const animals = ["dog" , "cat" , "lizard" , "elephant" , "tiger" , "killerwhale"]

// for(let i = 0; i < animals.length; i++){
//     console.log(i , animals[i]);
// }

// for(let i = animals.length -1; i >= 0; i--){
//     console.log(animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
// for(let i = 0; i < 5; i++){
//     console.log(people[i].toUpperCase());
// }

const seatingChart = [
    ["kristen" , "erik" , "namita"] , 
    ["geoffrey" , "juanita" , "antonio" , "kevin"],
    ["yuma" , "sakura" , "jack" , "erika"]
];

for(let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`)
    for(let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}