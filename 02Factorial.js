function factorial(number) {
  if(number <= 0) return 1;
  return number * factorial(number - 1);
}

const fact0 = factorial(1); // 1
fact0;
const fact4 = factorial(4); // 24
fact4;


const fact5 = factorial(5);
fact5;