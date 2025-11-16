function myArray() {
  let ar1 = [5, 5.5, true, "Rohit Sharma"]; //Generic way
  console.log(typeof ar1) //Object
  //let newAr1 = ar1; //Shallow copy
  let newAr1 = [...ar1] //Deep copy
  newAr1[3] = "Virat"

  console.log(ar1) // 5, 5.5, true, "Rohit Sharma"
  console.log(newAr1) // 5, 5.5, true, "Virat"


  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log(ar1[0]); //5
  console.log(ar1[1]); //5.5
  console.log(ar1[2]); //true
  console.log(ar1[3]); // Rohit sharma

  let ar2 = new Array(10, "Raj", false, 10.5); //Constructor way
  console.log(ar2[0]); //10
  console.log(ar2[1]); //Raj
  console.log(ar2[2]); //false
  console.log(ar2[3]); //10.5

  console.log("----------Loop----")
  for(let i=0;i<ar2.length;i++){
    console.log(ar2[i])
  }
  console.log("----------for of Loop----")
  for(let temp of ar2){
    console.log(temp)
  }
}

myArray()
