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

function countDown(num) {
  if (num == 0) {
    console.log("Done");
    return;
  }
  return countDown(num - 1);
}
// Here is an array containing both numbers as well as other arrays, which
// in turn contain numbers and arrays:
// Write a recursive function that prints all the numbers (and just numbers).

function printNums(arr) {
  for (value in arr) {
    if (arr instanceof Array) {
      printNums(arr);
    } else {
      console.log(value);
    }
  }
}

//printing the fibonacci with a time complexity of o(n2)
function getNthFibo(num) {
  if (num <= 1) return num;
  return getNthFibo(num - 1) + getNthFibo(n - 2);
}

//printing the fibonacci with a time complexity of o(n)
function getNthFiboBetter(num, lastNum, nextNum) {
  if (num == 0) return lastNum;
  if (num == 1) return nextNum;
  return getNthFiboBetter(num - 1, nextNum, lastNum + nextNum);
}

// implement palidrome using recursion

function isPalidrome(string){
  let str = string.toLowwerCase()
  if(str.length === 1) return true
  if(str[0] !== str[str.length - 1]) return false
  return isPalidrome(str.slice(1, str.length - 1))
}

//implement palidrome using two pointer
function getPalidron(string){
  let str = string.toLowwerCase();
 
  for(let i = 0; i < str.length; i++){
    let left = i;
    let right = str.length - 1 - i
    if(str[left] !== str[right]) return false
  }
  return true
}

//permutation implementation using recursion
 let array = [1,2,3]

function getPermutation(array){
  let foundPermutation = [];

  function perms(subArr, currentPerm){
    if(subArr.length === 0){
      foundPermutation.push(currentPerm)
    }

    for(let i = 0; i < subArr.length; i++){

      let newSubArr = subArr.slice(0, i).concat(subArr.slice(i + 1))
      
      let newCurrentPerm = currentPerm.concat(subArr[i])

      perms(newSubArr, newCurrentPerm)
    }
  }

  perms(array, [])
}
