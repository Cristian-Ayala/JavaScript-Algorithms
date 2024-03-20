// JavaScript Algorithms - 10 - Power of Two
// https://www.youtube.com/watch?v=SZRG1bmDlx8&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=10&ab_channel=Codevolution

// Given a positive integer "n", determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer "x" such that "n" === 2^x

// If remainder is not zero in a any step, "n" is not a power of two
// If remainder is zero and "n" comes down to 1 eventually, "n" is a power of two

/**
 * n = 8
 * 8/2 = 4 (remainder 0)
 * 4/2 = 2 (remainder 0)
 * 2/2 = 1 (remainder 0)
 */

/**
 * FIRST SOLUTION - Big-o -> O(n)
 *function isPowerOfTwo(num) {
 *  for (let i = 0; i < num; i += 1) {
 *    if (Math.pow(2, i) === num) return true;
 *  }
 *  return false;
 *}
 **/

/*
 // VIDEO SOLUTION 1 - Big-o -> O(log(n))
function isPowerOfTwo(num) {
  if (num < 1) return false;
  while (num>1) {
    if(num%2 !== 0) return false;
    num /= 2
  }
  return true;
}
*/

// BitWise Big-o - O(1)
function isPowerOfTwo(n) {
  if (n < 1) return false;
  return (n & (n-1)) === 0;
}

const res1 = isPowerOfTwo(1); // true (2^0)
res1;
const res2 = isPowerOfTwo(2); // true (2^1)
res2;
const res3 = isPowerOfTwo(5); // false
res3;
