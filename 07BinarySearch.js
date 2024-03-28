/*
URL: https://www.youtube.com/watch?v=oVj5ZvZd-cU&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=16&ab_channel=Codevolution
Given a SORTED array of "n" elements and a target element "t",
find the indes of "t" in the array. Return -1 if the target element is not found
*/

/*
If the array is empty return -1 as the element cannot be found.

If the array has elements, find the middle element int he array.

If the target is equal to the middle element, return the middle element index.

If the target is less than the middle element, binary search left half of the array.

If the target is greater than middle element, binary search right half of the array.
*/

/*
function binarySearch(arr, target) {
  if (!arr.length) return -1;
  let searchCompleted = false;
  let middle = Math.floor(arr.length / 2);
  while (!searchCompleted) {
    if (middle === 0 || middle === arr.length - 1) searchCompleted = true;
    if (arr[middle] === target) {
      searchCompleted = true;
      return middle;
    } else if (target < arr[middle]) {
      // Binary search left half
      middle = Math.floor(middle / 2);
    } else if (target > arr[middle]) {
      // Binary search rigth half
      middle = Math.floor((middle + arr.length) / 2);
    }
  }
  return -1;
}
// It breaks if case --> console.log(binarySearch([-5, 2, 4, 6, 10], 5)); // -1
*/

/*
  YT Solution
  Big-O --> O(logn)
*/
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], -5)); // 0
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
