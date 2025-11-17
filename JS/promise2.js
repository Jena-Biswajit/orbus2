function MyPromise() {
  let flag = Math.random() > 5
  return new Promise((resolve, reject) => {
    if (flag === true) {
      resolve();
    } else {
      reject();
    }
  });
}

MyPromise().then(() => {
  console.log("Promise is successful");
}).catch(function(){
    console.log("Promise failed!!")
})
