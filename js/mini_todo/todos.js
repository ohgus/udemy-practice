let input = prompt("what are you going to do?");
const todos = ["feed liz" , "clean liz house"];
while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("**********");
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        } 
        console.log("**********");
    } else if (input === "new"){
        const newTodo = prompt("ok what do you want to add at list?");
        todos.push(newTodo);
        console.log(`${newTodo} added on list`);
    } else if(input === "delete"){
        const index = parseInt(prompt("ok enter a index to delete:"));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(`ok , deleted ${deleted[0]}`);
        } else {
            console.log("unknown index");
        }
    }
    input = prompt("what are you going to do?");
}
console.log("Ok you Quit");