var arr = [];

function sumOfArray() {
  let elem = parseInt(document.getElementById("arr_elem").value);
  console.log(typeof elem);
  if (typeof elem === "number") {
    var sum = 0;

    arr.push(elem);
    console.log(arr);

    for (let temp of arr) {
      sum = sum + temp;
    }
    document.getElementById("display_array").innerHTML = sum;
    document.getElementById("err_msg").innerHTML = "";
  } else {
    document.getElementById("err_msg").innerHTML =
      "<h1 style='color:red;'>Pls enter numeric value</h1>";
  }
}
