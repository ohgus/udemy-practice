const nums = [1,5,9,302,1997,2001,2008,190923];
console.log(...nums);
console.log(..."hello")

const dogs = ["dabak" , "leo"];
const lizs = ["koko" , "krong" , "kiki"];

const allPets = [...dogs,...lizs];
console.log(allPets);

const feline = { legs: 4, family: "Felidae"};
const canine = { idFurry: true, family: "Caninae"};

const catDog = {...feline,...canine};