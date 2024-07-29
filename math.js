// 1. fibonacci sequence
// 2. Fibonacci number
// 3. Factorial
// 4. Check is number is prime
// 5. Find sum of digits
// 6. Find largest Prime Factor
// 7. Find all Prime Facrors
// 8. Find largest common diviser  (the biggest number on which a nd b can be devided)
// 9.Find least common multiple of two numbers (the smallest number that can be devided by both numbers a and b)
//
//******************************************************************************************************** */
//1 fibonacci sequence [0,1,1,3,5,]

const fibonacci = (n) => {
  if (n < 0) return false;
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    let next = seq[i - 2] + seq[i - 1];
    seq.push(next);
  }
  return seq;
};
console.log("fibonacci sequence", fibonacci(7));

//***************************************************************************************************** */
///2 fibonacci number

const fiboNum = (n) => {
  if (n < 0) return false;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prevPrev = 0;
  let prev = 1;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    current = prev + prevPrev; 
    prevPrev = prev; 
    prev = current;
  }

  return current;
};
console.log("fibonacci number:", fiboNum(4));

//*********************************************************************************** */
//3. factorial

const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};
console.log("factorial :", factorial(4));

//******************************************************************************************************** */
//  4.  Prime number

const ifPrime = (n) => {
  if (n <= 0) return false;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i = +2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log("prime number", ifPrime(8));

//************************************************************************************ */
// 5 Sum of digits

const sumOfDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};
console.log("sum of digits", sumOfDigits(1234));

//******************************************************************************************** */
// 6 Find Largest Prime Factor

const findLargestPrimefactor = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let largestPrime = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      largestPrime = i;
      n = n / i;
    }
  }
  if (n > 1) {
    largestPrime = n;
  }
  return largestPrime;
};
console.log(`largest prime number`, findLargestPrimefactor(25));

//**************************************************************************************************** */
// 7 Find all Prime factors

const findAllPrimeFactors = (n) => {
  if (n === 0) return [];
  if (n === 1) return [1];
  let primeFactors = [];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      primeFactors.push(i);
      n = n / i;
    }
  }
  if (n > 1) {
    primeFactors.push(n);
  }
  return primeFactors;
};

console.log("All prime factors", findAllPrimeFactors(25));

//**************************************************************************************** */
// 8. greatest commom deviser || Euclidean algorithm || using temp for swapping

const findGreatestCommonDeviser = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
console.log("greatest common deviser :", findGreatestCommonDeviser(27, 3));

// 9. least common multiplier

const leastcommomMultiple = (a, b) => {
  let originalA = a;
  let originalB = b;

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return (originalA * originalB) / a;
};
console.log("least common multiple", leastcommomMultiple(3, 6));

// 10 find all pairs with a given sum

const findAllPairs = (arr, sum) => {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--)
      if (arr[i] + arr[j] === sum) pairs.push([arr[i], arr[j]]);
  }
  return pairs;
};
console.log(findAllPairs([1, 2, 3, 4, 5, 6], 10));

// 11. calculate a raised to the power of b (a^b) using recursion or iteration.
//iteration
const raisedToThePower = (a, b) => {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  return result;
};
console.log("Power calculation", raisedToThePower(2, 4));

//recursion
const raisedToThepower2 = (a, b) => {
  if (b === 0) return 1; //base case for recursion algorithms . it is a condition where recursion must  stop
  return a * raisedToThepower2(a, b - 1);
};
console.log("Power calculation recursion", raisedToThepower2(2, 4));

// 12. Check Perfect Square: Write a function to check if a given number is a perfect square.

const isPerfectSquare = (n) => {
  if (n < 0) return false;
  let sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
};
console.log("Perfect square", isPerfectSquare(28));

const isPerfectSquare2 = (n) => {
  if (n < 1) return false;
  for (let i = 1; i <= Math.sqrt(n); i++)
    if (i * i === n) {
      return true;
    }
};
console.log(isPerfectSquare2(36));

// 13 Sum of First n Natural Numbers: // if(n<1)return 0; sum = n*(n+1)/2

const sumOfFirstNum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumOfFirstNum(3));

// 14.Binary to Decimal Conversion
// 1011 => from the end| 1*2^0  + 1*2^1 +  0*2^2 + 1*2^3

const binaryToDecimal = (binary) => {
  let decimal = 0;
  let power = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    decimal += parseInt(binary[i]) * Math.pow(2, power);
    power++;
  }
  return decimal;
};
console.log("decimal", binaryToDecimal("1011"));

{
  // 15. Find Nth Prime Number: Implement a function to find the Nth prime number.

  const findNthPrimeNumber = (limit) => {
    const sieve = new Array(limit + 1).fill(true);

    sieve[0] = sieve[1] = false;
    for (let i = 2; i <= limit + 1; i++) {
      if (sieve[i]) {
        for (let j = i * i; j <= limit; j += i) {
          sieve[j] = false;
        }
      }
    }
    let primes = [];
    for (let i = 2; i <= limit; i++) {
      if (sieve[i]) {
        primes.push(i);
      }
    }
    return primes;
  };

  console.log(findNthPrimeNumber(100));

  const showNthNum = (n, limit) => {
    if (n < 2 || n > limit.length) return false;

    const primes = findNthPrimeNumber(limit);

    return primes[n - 1];
  };

  console.log(showNthNum(5, 100));

  // 16. Check Armstrong Number (where the sum of its own digits each raised to the power of the number of digits
  //is equal to the number itself).//153 =>  1^3+5^3+3^3=1+125+27 = 153.

  const isArmstrong = (number) => {
    let digits = number.toString();
    let n = digits.length;
    let sumOfPower = 0;

    for (let digit of digits) {
      sumOfPower += Math.pow(parseInt(digit), n);
    }

    return sumOfPower === number;
  };
  console.log(isArmstrong(153));


// 17. Calculate Area of circle, rectangle, triangle

const areaCircle = (radius)=>{
  const result = (Math.PI*Math.pow(radius,2)).toFixed(2)
  return result
}
console.log(areaCircle(4));

const areaSquare = (a,b)=>{
  const result = a*b
  return result
}
console.log(areaSquare(4,6));


const areaTriangle = (base,heigth)=>{

  const result = 0.5*base*heigth
  return result
}
console.log(areaTriangle(4,6))


// 18. Calculate Factorial of Large Numbers (BigInt)

const factorialBigInt = (n)=>{

  if (n<1) return undefined
  if(n==0 || n===1) return 1n
  let fact = 1n
  for (let i=2n; i<=n; i++){
    fact *= i
  }
return fact
}
console.log(factorialBigInt(6n));


// 19. Fibonacci with Memoization

const fibonacciMemo =(()=>{

  let memo = {};

  const fibo = (n)=>{
if ( n<=0) return 0;
if (n===1) return 1

if (memo[n] !== undefined){
    return memo[n]              //if memo contains memo[n], return it
}
memo[n] = fibo(n-1)+fibo(n-2)
     return memo[n]             //if does not contain, create it
  }
return fibo                     //returns fibo
}) ()                          //IEFE
console.log("fibonacci memo",fibonacciMemo(7));

}

//**
const fibon =(n)=>{
  if(n<=0)return 0
  if(n===1)return 1

  const res = fibon(n-1)+ fibon(n-2)
  return res
}
console.log("fibonacci recursive",fibon(7));

//** 

const fiboImplem = (n)=>{
  
  if( n<=0) return 0
  if (n===1) return 1

  let fibo = [0,1]

  for( let i =2; i<=n; i++){
    fibo[i] = fibo[i-1] +fibo[i-2]
     
  }
  
return fibo[n]
}

console.log("fibonacci loop implementation",fiboImplem(7));


// 20. Check Prime Numbers in a Range: Write a function to find and print
//all prime numbers less than or equal to a given number n.

const primeNumRange =(n)=>{
if (n<=1) return false

 let arr = []

for (let i = 2; i<=n; i++){
let isPrime =true
for(let j =2; j<= Math.sqrt(i);j++){
  if(i%j === 0){
    isPrime = false
    break
  }
}
if( isPrime){
arr.push(i)
}

  }
return arr
}
console.log("prime numbers in a range:",primeNumRange(65));

// 21. Check if number is a happy number A happy number is a number which eventually reaches 1 when 
//replaced by the sum of the square of each digit. This process is repeated over and over until 
//the number reaches 1 (where it will stay), or it loops endlessly in a cycle 
//let check 19
//1^2 +9^2 =82;  8^2 + 2^2 =68;  6^2 + 8^2=100 ; 1^2+0^2+0^2 =1  (reach 1)    thus, 19 is happy! 

const isHappyNumber =(num)=>{

const sumOfDigitsSquares = (n)=>{

  let sum =0;
 
  while(n> 0){
    let digit = n%10
    sum+= digit*digit
    n= Math.floor(n/10)
  }
  return sum
}
let slow =num;
let fast = sumOfDigitsSquares(num)

while(fast !== 1 && slow !== fast){
  slow = sumOfDigitsSquares(slow)
  fast = sumOfDigitsSquares(sumOfDigitsSquares(fast))
}
return fast===1
}
console.log(isHappyNumber(19));


//22. Perfect Number
//perfect number is a positive integer that is equal to the sum of its proper divisors 
//(excluding the number itself). For example 28 = 1+2+4+7+14

const isPerfect = (num)=>{
  let sum =0
  for(let i =0; i<=num/2; i++){
    if (num%i===0){
    sum += i
    }
  }
return sum===num && num !==0
}
console.log("is perfect number", isPerfect(29));