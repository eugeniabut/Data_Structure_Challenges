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
//1 fibonacci sequence

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
  if (n === 1) return1;

  let prevPrev = 0;
  let prev = 1;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    current = prev + prevPrev;
    prevPrev = prev; //update prevPrev first!
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
if(b===0) return 1 //base case for recursion algorithms . it is a condition where recursion must  stop
  return a * raisedToThepower2(a, b - 1);
};
console.log("Power calculation recursion", raisedToThepower2(2, 4));


// 12. Check Perfect Square: Write a function to check if a given number is a perfect square.

const isPerfectSquare = (n)=>{
  if(n<0) return false
let sqrt = Math.sqrt(n)
return Number.isInteger(sqrt)
}
console.log("Perfect square",isPerfectSquare(28));

const isPerfectSquare2 =(n)=>{
  if(n<1)return false
  for (let i =1; i<=Math.sqrt(n); i++ )
    if( i*i ===n ){
      return true
    }
}
console.log(isPerfectSquare2(36));



// 13 Sum of First n Natural Numbers: // if(n<1)return 0; sum = n*(n+1)/2


const sumOfFirstNum = (n)=>{
let sum =0
  for (let i=1; i<=n;i++){
    sum +=i
  }
  return sum
}
console.log(sumOfFirstNum(3));


// 14.Binary to Decimal Conversion   

const binaryToDecimal = ()=>{

}
console.log(binaryToDecimal(1011));
{
  /*




Decimal to Binary Conversion: Write a function to convert a decimal number to its binary equivalent.

Find Nth Prime Number: Implement a function to find the Nth prime number.

Check Armstrong Number: Write a function to check if a number is an Armstrong number (where the sum of its own digits each raised to the power of the number of digits is equal to the number itself).

Calculate Area of Shapes: Implement functions to calculate the area of different shapes such as circle, rectangle, triangle, etc.

Check Palindrome Number: Write a function to check if a number is a palindrome (reads the same backward as forward).

Calculate Factorial of Large Numbers: Extend your factorial function to handle very large numbers that exceed typical data type limits.

Fibonacci with Memoization: Implement the Fibonacci sequence using memoization to optimize performance.

Check Prime Numbers in a Range: Write a function to find and print all prime numbers less than or equal to a given number n.

Check if Two Numbers are Amicable: Implement a function to check if two numbers are amicable (where each number is the sum of the proper divisors of the other).

Check Happy Number: Write a function to check if a number is a happy number (where repeatedly replacing a number by the sum of the squares of its digits eventually reaches 1).*/
}
