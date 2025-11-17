function async1(){
    console.log("Step 1")
    setTimeout(function(){
        console.log("Step 2")
    }, 2000)
    console.log("Step 3")
}

async1()