// node <FILE_NAME>
import Benchmark from "benchmark";
import {
  recursiveFibSeq,
  videoSolution,
  recursiveFibSeqMemo,
} from "../05Recursion.js";

var suite = new Benchmark.Suite();

// add tests
suite
  .add("recursiveFibSeq", recursiveFibSeq)
  .add("videoSolution", videoSolution)
  .add("recursiveFibSeqMemo", recursiveFibSeqMemo)
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });


/* FIRST RUN
recursiveFibSeq x 4,508,297 ops/sec ±0.63% (97 runs sampled)
videoSolution x 108 ops/sec ±0.77% (79 runs sampled)
recursiveFibSeqMemo x 919,524 ops/sec ±0.39% (91 runs sampled)
Fastest is recursiveFibSeq
*/

/* SECOND RUN
recursiveFibSeq x 4,604,276 ops/sec ±0.62% (100 runs sampled)
videoSolution x 107 ops/sec ±0.66% (79 runs sampled)
recursiveFibSeqMemo x 882,037 ops/sec ±0.36% (96 runs sampled)
Fastest is recursiveFibSeq
*/