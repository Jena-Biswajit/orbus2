function MyObject() {
  let car = {
    color: "White",
    engine: 1200,
    make: "Maruti",
    model: "Swift",
  }

  console.log(car.color) //White
  console.log(car.engine) //1200

  //JSON: JavaScript Object Notation
  console.log("------------")
  for(let key in car){
    console.log(car[key])
  }
  console.log("------------")
  console.log(Object.keys(car))
  console.log(Object.values(car))
}

MyObject()

