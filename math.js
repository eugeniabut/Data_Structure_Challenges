/// 1 fibonacci sequence

const fibo = (n) => {
  if (n < 0) return undefined;
  if (n === 0) return [0]
  if (n ===1) return [1]

  let sec = [0,1];

  for (let i = 2; i <= n; i++) {
    let next = sec[i - 1] + sec[i - 2]; //sec[1]+sec[0] = 2+1 =3
    sec.push(next);
 
  
  }

  return sec
};
console.log(fibo(7));


///1a fibonacci number

const fiboNum = (n)=>{
if (n<0) return false
  if (n===0) return 0
  if (n===1) return 1

let prevPrev =0
let prev =1
let current = 0

for ( let i =2; i<= n; i++){
  current = prev + prevPrev
  prevPrev=prev
  prev = current
}
return current
}
console.log("fibo number",fiboNum(3));

///  2.  Prime number 


const ifPrime = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i+=2) {
    if (n % i === 0) return false;
    if (n % 2 === 0) return false;
  }

  return true;
};
console.log("prime number",ifPrime(7));

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
let temp =b
b =a%b
a= temp

  }

  return a;
};

console.log("common deviser",findCommonDeviser(36, 24));

// 5 Find all prime factors of n 1)divisibility by2; 2)by other from 3to Math.sqrt; 3)if >2, then itsenf is a prime

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

  if (n > 2) {     //n itself is prime
    factors.push(n);
  }

  return factors
};
console.log("Answer", findPrimeFactors(30));

// 6 Find the largest prime factor of n . Intiate maxPrime = 1. Instread of pushing just update maxFactor

const findMaxPrimeFactor = (n)=>{
let maxFactor = 1

while( n%2===0){
  maxFactor =2
  n = n/2
}

for (i=3; i <=Math.sqrt(n); i+=2){
while(n%i === 0){
  maxFactor =i
  n=n/i


}
if (n>2)
   maxFactor = n
}

return maxFactor
}
console.log("MaxFactor",findMaxPrimeFactor(75));

// 7 find all pairs with a given sum

const findAllPairs = (arr, sum)=>{
let pairs = []
  for (let i =0; i< arr.length;i++){
    for (let j =arr.length-1; j>=0; j--)
    if (arr[i] +arr[j] === sum)
      pairs.push([arr[i], arr[j]])
  }
  return pairs
}
console.log((findAllPairs([1,2,3,4,5,6],10)))

///Factorial

const factorial = (n)=>{
let factorial = 1
  for (let i =2; i<=n; i++)
    {factorial *= i}
  return factorial

}
console.log(factorial(6));

