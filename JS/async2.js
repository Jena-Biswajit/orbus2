function greet(data){
    console.log("Good morning!",data.name)
}

function toDos(){
    console.log("This is my To do List --")
    console.log("1) Meeting with client 1\n 2) Coading in project 2")
}
let dataFromServer = {name:"john"}
setTimeout(greet,2000,dataFromServer) //Execute second
toDos() //Execute first