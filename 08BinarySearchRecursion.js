// https://www.youtube.com/watch?v=EFXWgZJZqL8&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=19&ab_channel=Codevolution
function recursiveBinarySearch(arr, target) {
  return binarySearch(arr, target);
}

// Big-o --> O(log(n))
function binarySearch(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }
  if (arr[middleIndex] < target)
    return binarySearch(arr, target, middleIndex + 1, rightIndex);
  else return binarySearch(arr, target, leftIndex, middleIndex - 1);
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], -5)); // 0
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1


// target 30
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
//  ^                                   ^                                         ^
//                                      ^                     ^                   ^
//                                                               ^        ^       ^
//                                                                           ^  ^ ^
//                                                                                ^