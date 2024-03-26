// JavaScript Algorithms - 12 - Recursive Fibonacci Sequence
// https://www.youtube.com/watch?v=wZNxLwqxu00&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=12&ab_channel=Codevolution

// const memoSeq = [];
// function recursiveFibSeq(n) {
//   if (n <= 0) return 0;
//   if (memoSeq.lenth >= n) return memoSeq[n];
//   for(let i =0; i < n; i+= 1) {
//     memoSeq.push[]
//     recursiveFibSeq();
//   }
// }

// FASTES OF ALL (CHECK BENCHMARK)
// Big-O notation using tail recursion --> O(n)
export function recursiveFibSeq(n = 30, prevVal = 0, currentVal = 1) {
  if (n <= 0) return prevVal;
  if (n === 1) return currentVal;
  return recursiveFibSeq(n - 1, currentVal, prevVal + currentVal);
}

// Big-O notation --> O(2^n), because it recalculates values leading to redundant computations.
export function videoSolution(n = 30) {
  if (n < 2) return n;
  return videoSolution(n - 1) + videoSolution(n - 2);
}

export function recursiveFibSeqMemo(n = 30, memo = {}) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = recursiveFibSeq(n - 1, memo) + recursiveFibSeq(n - 2, memo);
  return memo[n];
}

//  0,1,2,3,4,5,6,7, 8, 9, 10,11,12, 13, 14, 15, 16, 17,  18,  19,  20
// [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]
// const resFib = recursiveFibSeq(0); // 0
// resFib;
// const resFib1 = recursiveFibSeq(1); // 1
// resFib1;
// const resFib2 = recursiveFibSeq(2); // 1
// resFib2;
const resFib6 = recursiveFibSeq(1); // 8
resFib6;

const resFibMemo6 = recursiveFibSeqMemo(6); // 8
resFibMemo6;

// After n = 35 the fn starts to take a consider amount of time
// const res = videoSolution(40)
// res
