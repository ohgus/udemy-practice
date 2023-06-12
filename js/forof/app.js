// const something = ["carrot" , "tomato" , "potato" , "radish" , "dogs" , "cats"];

// for(let i = 0; i < something.length; i++){
//     console.log(`visit reddit.com/r/${something[i]}`);
// }

// for(let some of something){
//     console.log(some);
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

for(let row of seatingChart){
    for(let student of row){
        console.log(student);
    }
}