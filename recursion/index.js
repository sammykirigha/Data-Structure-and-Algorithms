//a for loop function

function getOddnums(arr) {
  let results = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 !== 0) {
      results.push(arr[i]);
    }
  }
  return results;
}

//using a recursion helper function to get odd nums in a array
function collectOddValues(arr) {
  let results = [];
  function helper(input) {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {
      results.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(arr);
  return results;
}
