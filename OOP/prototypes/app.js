String.prototype.haha = () => alert("haha");
const say = "lol lol";

String.prototype.yel = function () {
    console.log(this.toUpperCase());
} 

const arr = [1,2,3,4];
Array.prototype.pop = function() {
    return "I CANT POP IT!!";
}