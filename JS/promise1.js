function waitAndPrint(message, delay) {
  
    let isSuccess = Math.random() > 0.5

  return new Promise((resolve, reject) => {
    if (isSuccess === true) {
      setTimeout(() => {
        console.log(message);
        resolve(); //it call then block
      }, delay);
    } else {
      reject(); //it calls catch block
    }
  });
}

waitAndPrint("Step 1", 2000)
  .then(() => waitAndPrint("Step 2", 2000))
  .catch(() => console.log("Error!"))
  .then(() => waitAndPrint("Step 3", 2000))
  .catch(() => console.log("Error!!"))
  .then(() => waitAndPrint("Step 4", 2000))
  .catch(() => console.log("Error!!!"));
