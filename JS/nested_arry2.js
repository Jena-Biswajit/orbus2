let myFunc1 = function () {
  return "This is myFunc1"
};

function main() {
  let arr = [10, "raj", true, undefined, null, [1, 2, 3], myFunc1];
  let arr2 = [
    10,
    "raj",
    true,
    undefined,
    null,
    [1, 2, 3],
    function () {
      return "I am inside arr2"
    },
    function testFunc(){
        return "This is test function"
    }
  ];

  console.log(arr[6]())

  console.log(arr2[6]())

  console.log(arr2[7]())
}

main()
