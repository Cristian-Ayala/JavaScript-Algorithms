// Determine if "n" is prime or not

// A prime number is a natural number greater than 1 that is not a product of 2 smaller natural number

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1){
    if (num % i === 0)  return false;
  }
  return true;
}

const res1 = isPrime(5); // true (1*5 or 5*1)
res1;
const res2 = isPrime(9); // false (1*4 or 2*2 or 4*1)
res2;

// Big-O = O(sqrt(n))