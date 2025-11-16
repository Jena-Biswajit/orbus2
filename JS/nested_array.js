function Xyz() {
  let ar1 = [
    [2, 4, 6],
    [11, 15, 20],
  ]

  //let ar2 = [...ar1]
  let ar2 = JSON.parse(JSON.stringify(ar1))

  ar2[0][0] = 200

  console.log(ar1)
  console.log(ar2)

}
Xyz()
