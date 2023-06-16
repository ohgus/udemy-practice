// fetch("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("RESOLVE",res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data)
//     return fetch("https://swapi.dev/api/people/2 /");
// })
// .then((res) => {
//     console.log("2nd RESOLVE",res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log("error",e);
// })

const loadStarWarsPeople = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/5/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("error!!",e);
    }
}
loadStarWarsPeople();