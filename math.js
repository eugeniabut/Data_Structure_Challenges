/// fibonacci sequence

const fibo = (n) => {
  if (n < 0) return undefined;
  if (n === 1) return [1];
  let sec = [1, 2];
  for (let i = 2; i <= n; i++) {
    let next = sec[i - 1] + sec[i - 2]; //sec[1]+sec[0] = 2+1 =3
    sec.push(next);
  }
  return sec;
};
console.log(fibo(7));

///  2.  Prime number  2,3,5,7...

const ifPrime = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i <= n; i++) {
    if (n % Math.sqrt(n) === 0) return false;
    if (n % 2 === 0) return false;
  }

  return true;
};
console.log(ifPrime(13));

// 3 Sum of digits . 1234 => 1+2+3+4 While loop, remeinder aftr dividing to 10, update n

const sumOfDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};
console.log(sumOfDigits(1234));

// 4 greatest commom deviser while loop, and temp . Euclidean algorithm |swapping =exchanging

const findCommonDeviser = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

console.log(findCommonDeviser(48, 18));

// Find all prime factors of n 1)divisibility by2; 2)by other from 3to Math.sqrt; 3)if >2, then itsenf is a prime

const findPrimeFactors = (n) => {
  let factors = [];


  while  (n % 2 === 0){
     factors.push(2);
      n = n / 2;
    }
  

  for (let i = 3; i <= Math.sqrt(n); i +=2) {
    if (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  return factors
};
console.log("Answer", findPrimeFactors(30));

//Find the largest prime factor of n . Intiate maxPrime = -1. Instread of pushing just update maxPrime with n
