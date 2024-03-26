/*
Given an array of "n" elements and a target element "t", find the index of "t" in the array. Return -1 if the target element is not found.

arr = [-5,2,10,4,6] -> Should return 2
*/

function findIndex(arr, searchVal) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchVal) return i;
  }
  return -1;
}

console.log(findIndex([-5, 2, 10, 4, 6], 10)); // 2
console.log(findIndex([-5, 2, 10, 4, 6], 6)); // 4
console.log(findIndex([-5, 2, 10, 4, 6], 20)); // -1
