let ar = [5, 6, 10, 4, 3, 12, 51];

function doAdd(callback) {
  let sum = 0;
  for (let el of ar) {
    sum += el;
  }
  console.log("Sum is ", sum);
  setTimeout(callback, 2000, sum);
  console.log("End");
}
function getAvg(sum) {
  console.log("Average is:", sum / ar.length);
}
function evenOddCounter() {
  let even = 0,
    odd = 0;
  for (let el of ar) {
    if (el % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log("Total Even Nos:", even, "Total odd Nos", odd);
}

doAdd(getAvg);
doAdd(evenOddCounter);

//HOF and Callback