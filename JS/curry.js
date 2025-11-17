function add(x){
    return function (y){
        return function(z){
            return x+y+z
        }
    }
}

console.log(add(5)(3)(10)) //18

//-----------------------------
function add(x,y,z){
    return x+y+z
}

add(5,3,10)