{
  const getMinMax = function (arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
};

console.log(getMinMax([1, 2, 3, 489]));

const getArea = function (width, length) {
  const area = width * length;
  return area;
};
console.log(getArea(2, 4));

const rectangleArea = (width, length) => length * width;
console.log(rectangleArea(4, 8));




// IIFE

(function getCelcius(far) {
  const celcius = ((far - 32) * 5) / 9;
  console.log(celcius);
})(60);

const date = new Date(2024, 7, 17, 18, 4, 6);
const month = date.getMonth();
const hour = date.getHours();

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  default:
    console.log("Else");
}

switch (true) {
  case hour < 18:
    console.log("18");
    break;

  case hour > 5:
    console.log("5");
    break;

  default:
    console.log("neither 3 nor 5");
}

function calculator(num1, num2, operator) {
  if (operator === "+") {
    const sum = num1 + num2;
    console.log(sum);
  } else if (operator === "-") {
    const sub = num1 - num2;
    console.log(sub);
  } else if (operator === "*") {
    const mul = num1 * num2;
    console.log(mul);
  } else if (operator === "/") {
    const div = num1 / num2;
    console.log(div);
  } else {
    console.log("can not be calculated");
  }
}

calculator(2, 3, "*");

const calculatorTwo = (num1, num2, operator) => {
  switch (operator) {
    case operator === "+":
      console.log(num1 + num2);
      break;

    case operator === "-":
      console.log(num1 - num2);
      break;

    default:
      console.log("does not work");
  }
};
calculator(5, 6, "+");

function switchCalc(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + nim2;
      break;

    case "-":
      result = num1 - num2;
      break;

    default:
      result = "wrong operator";
  }
  console.log(result);
}
switchCalc(5, 7, "-");

for (let i = 0; i < 10; i++) {
  console.log(`Number ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(` ${i}*${j} = ${i * j}`);
  }
}

const arr = ["apple", "banana", "kivi"];
for (const fruit of arr) {
  console.log(fruit);
}

const arr2 = [{ name: "john" }, { name: "sam" }, { name: "lara" }];
for (const line of arr2) {
  console.log(line.name);
}

const str = "Hello";
for (const letter of str) {
  console.log(letter);
}

const data = [
  {
    name: "Sam",
  },
  {
    name: "Lew",
  },
];
for (key in data) {
  console.log(data[key]);
}

const arr3 = ["fish", "dog", "cat"];
for (key in arr3) {
  console.log(arr3[key]);
}

const people = [
  { name: "John", surname: "Smith", age: 60 },
  { name: "Jonny", surname: "Bear", age: 23 },
  { name: "Sam", surname: "Zeloos", age: 55 },
];

const jungPeople = people
  .filter((names) => names.age < 25)
  .map((person) => person.name);
console.log(jungPeople);

const numbersArray = [1, 3, 6, 7, 888, -34, -28, -4];

const sumOfPositive = numbersArray
  .filter((posNum) => posNum > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(sumOfPositive);

const words = ["coder", "programmer", "developer"];
const capitalizedWords = words.map(
  (word) => word[0].toUpperCase() + word.slice(1)
);
console.log(capitalizedWords);

const fibonacci = (n) => {
  if (n < 0) {
    return undefined;
  }

  if (n === 1) {
    return [1];
  }

  const fibsec = [0, 1];
  for (let i = 2; i < n; i++) {
    fibsec.push(fibsec[i - 1] + fibsec[i - 2]);
  }
  return fibsec;
};
console.log(fibonacci(6));

// binary search- serch the position of item within array

const postion = (arr, target) => {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let mid = Math.floor((last + first) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) first = mid + 1;
    else last = mid - 1;
  }
  return -1;
};
console.log(postion([1, 2, 3, 4, 5, 6, 87, 90], 90));

//reverce string

const reverceStr1 = (str) => {
  if (str === "") return "";
  else {

    return reverceStr1(str.slice(1)) + str[0];
  }
};
console.log(reverceStr1("hello"));

//find target in array
 
const findInArr = (arr, target)=>{
if (arr.lenfth < 1) return 
for ( let i =0; i<= arr.length;
  i++){
    if (arr[i]===target) return i

  }  return 0
}
console.log(findInArr([1,2,3,4,5,6,7],3));

//search trget using binary search

const findAgain =(arr, target)=>{
let firstPos = 0;
let lastPos = arr.length;


while (firstPos <= lastPos){
let mid = Math.floor((firstPos+lastPos)/2)
if (arr[mid]===target) return mid;
else if ( arr[mid]>target)  lastPos = mid -1;
else firstPos = mid +1

}
return -1


}
console.log( findAgain([1,2,3,4,5,6,7,555],555));

//remove duplicates

const arrayNum = [2,4,5,6,17,38,9,7,6,5,5]
const newAr = new Set(arrayNum)
const finalArr = Array.from(newAr)
console.log(finalArr);


const arr4 = finalArr.sort((a,b)=>b-a)
console.log(arr4);
const arr6 = [9,8,7,6,"(", "(", "()", "()", "[]", "]"]
const arr5 = arr6.filter(x =>x !== "(" &&")")
console.log(arr5);

const finder = (arr,target)=>{
if(arr.length ===0) return

for (num of arr){
  if (num === target) return  true
}
}
console.log(finder([3,4,5,6,7,8,9], 8));

const array9 = ["apple","potato", "lemon", "grass"];

const findGrass = array9.includes("grass")
console.log("hi",findGrass);

const array9K = array9.keys()
    for (let key of array9K){
    console.log(key);
  }

const foodEntries = array9.entries()
for (let entr of foodEntries ){
  console.log(entr);
}

console.log( Array.isArray(array9)? "true":"false");*/
}

const ar = ["strowberry"];
const array = ["apple", "banana", "potato", "kiwi"];

array.forEach((item) => console.log(item));

const res1 = array.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
console.log(res1);

const res2 = array.filter((item) => item === "banana");
console.log(res2);

const res3 = array.concat(ar);
console.log(res3);

const res4 = array.find((item) => item === "kiwi");
console.log(res4);

const res5 = array.findIndex((item) => item === "kiwi");
console.log(res5);

console.log(array.indexOf("kiwi"));

const arr6 = array.some((item) => item === "kiwi");
console.log(arr6);
const arr7 = array.every((item) => item === "dodg");
console.log(arr7);

console.log(array.includes("kiwi"));

array.push("tomato");
array.pop();
array.shift(); //removes first el
array.unshift("garlic");
console.log(array);
const stringifiedArr = array.toString();

console.log(stringifiedArr);

const joinedArr = array.join("+");
console.log(joinedArr);

const filledArr2 = array.fill("exit", 1, 3);

console.log(filledArr2);

console.log(array.copyWithin(2, 3));

const slicedArr = array.slice(2);
console.log(slicedArr);
array.push("tomato", "garlic", "nuts");
console.log(array);
//const spliced = array.splice(2)
//console.log(spliced);

const sortedArray = array.sort((a, b) => a - b);
console.log(sortedArray);

const reversed = sortedArray.reverse();
console.log("hello", reversed);

const string = "hello, haha";
const res6 = Array.from(string);
console.log(res6);
const arr8 = res6.join("").split(",");
console.log(arr8);

const arrayNum = [
  { name: "John" },
  {
    name: "Sara",
  },
];
const keyArr = arrayNum.keys();
for (let key of keyArr) {
  console.log(key);
}

const entriesArr = arrayNum.entries();
for (let entry of entriesArr) {
  console.log(entry);
}
const valuesErr = arrayNum.values();
for (let value of valuesErr) {
  console.log(value);
}

const arrayLong = ["ra", "ra", "sdsfs", "kooo"];
arrRemovedDuplicates = new Set(arrayLong);
console.log(arrRemovedDuplicates);

//QUICK SORT

const unsortedArr = [3, 6, 7, 8, 9, 8, 7, 4, 34, 8, 2, 9, 6, 8, 4];

const sortArray = (arr) => {
  if (arr.length < 1) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let rigth = [];
  let equal = [];

  for (let item of arr) {
    if (item < pivot) {
      left.push(item);
    } else if (item > pivot) {
      rigth.push(item);
    } else equal.push(item);
  }

  return sortArray(left).concat(equal, sortArray(rigth));
};

console.log(sortArray(unsortedArr));

const sorted = unsortedArr.sort((a, b) => a - b);
console.log(sorted);

const arr12 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6, 5, 4, 3, 2, 7, 4, 5, 5, 6, 6, 6, 6,
];
const target = 5;
const found = arr12.findIndex((item) => item === target);
console.log(found);

//REVERSE STRING

const revereceString = (str) => {
  if (str.length < 1) return str;

  return str.split("").reverse().join("");
};
console.log(revereceString("Hello Bob"));

// STRING IS PALINDROME

const checkPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed ? true : false;
};
console.log(checkPalindrome("AzORA"));

for (let i = 0; i <= 100; i++) {
  if (i % 15 === 0) console.log(`${i},"FIZZBUZZ"`);
  else if (i % 5 === 0) console.log(`${i},"FIZZ"`);
  else if (i % 3 === 0) console.log(`${i},"BUZZ"`);
  else console.log(i);
}

const findMax = (arr) => {
  return Math.max(...arr);
};
console.log(findMax([1, 2, 3, 4, 5]));

const findMin = (arr) => {
  return Math.min(...arr);
};
console.log(findMin([8, 9, 99]));

//FIND PRIME NUMBERS

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(17));

const findPrime = (arr) => {
  arr.forEach((num) => {
    if (isPrime(num)) console.log(num);
  });
};
findPrime([1, 2, 3, 4, 5, 6, 11]);

//Fibonacci ***Fibonacci sequence is a series of numbers
// where each number is the sum of the two preceding ones,
// usually starting with 0 and 1.

const fibonacci = (num) => {
  let seq = [];
  seq[0] = 0;
  seq[1] = 1;

  for (let i = 2; i < num; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq.slice(0, num + 1);
};
console.log(fibonacci(10));
//FIBINACCI WITH ARRAY

const fibonacchiTwo = (num) => {
  fibArr = [1, 2];

  for (let i = 2; i <= num; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr.slice(0, num + 1);
};
console.log(fibonacchiTwo(10));

//INTERSECTIONS

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8, 9];

const intersection = () => {
  return arr1.filter((item) => arr2.includes(item));
};
console.log(intersection());

const intersection2 = () => {
  return arr1.reduce((acc, curr) => {
    if (arr2.includes(curr) && !acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
};

console.log(intersection2(arr1, arr2));

const intersection3 = () => {
  set1 = new Set(arr1);
  set2 = new Set(arr2);
  return [...set1].filter((item) => set2.has(item));
};
console.log(intersection3());

const int = () => {
  return arr1.filter((item) => arr2.includes(item));
};
console.log(int());

const int2 = () => {
  set1 = new Set(arr1);
  set2 = new Set(arr2);
  return [...set1].filter((item) => set2.has(item));
};
console.log(int2());

const arr3 = [1, 2, 3, 4, 5, 6];
const arr4 = [3, 4, 5, 6, 7];
const int3 = (arr3, arr4) => {
  return arr3.reduce((acc, curr) => {
    if (arr4.includes(curr) && !acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};
console.log(int3(arr3, arr4));

// THE LONGEST WOrd LENGTH

const sentence = "Hello my beatuful dog ";

const longestLengthOfWord = (word) => {
  const lengths = sentence.split(" ").map((word) => word.length);
  return Math.max(...lengths);
};
console.log(longestLengthOfWord());

//THE LONGEST WORD

const longestWord = (sentence) => {
  const words = sentence.split(" ");
  let longestWord = "";
  let wordLength = 0;

  words.forEach((word) => {
    word.length;
    if (word.length > wordLength) {
      wordLength = word.length;
      longestWord = word;
    }
  });
  return longestWord;
};
console.log(longestWord(sentence));

///COUNT WOWELS IN STRING

const strW = "Hello from Goettingen";
const countWowels = () => {
  const wowels = "AOUEIYaoueiy";
  let count = 0;

  for (char of strW) {
    if (wowels.includes(char)) count++;
  }
  return count;
};
console.log(countWowels());

//Intersection

const array7 = [1, 2, 3, 4, 5, 6];
const array8 = [3, 7, 8, 9, 1, 5];
const common = array7.filter((item) => array8.includes(item));
console.log(common);

const fibonacchi3 = (num) => {
  arrF = [1, 2];
  for (let i = 2; i <= num; i++) {
    arrF.push(arrF[i - 1] + arrF[i - 2]);
  }
  return arrF.slice(0, num + 1);
};
console.log(fibonacchi3(6));

const fibonacchi4 = (num) => {
  newArr = [1, 2];
  for (let i = 2; i <= num; i++) newArr.push(newArr[i - 1] + newArr[i - 2]);

  return newArr.slice(0, num + 1);
};
console.log(fibonacchi3(8));

///PRIME NUMBERS

const primeNum = (num) => {
  if ((num = 0)) return false;
  else if ((num = 1)) return false;
  else if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(primeNum(20));

///FACTORIAL (n=5; 5*4*3*2*1)

const findFactorial = (num) => {
  if (num < 1) return 1;

  return findFactorial(num - 1) * num;
};
console.log(findFactorial(5));

///FIND PAIRS WITH GIVEN SUM

const findPairs = (arr, num) => {
  let pars = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === num) pars.push([arr[i], arr[j]]);
  }
  return pars;
};
console.log(findPairs([2, 3, 4, 5, 6, 7, 8, 9], 8));

const checkbalanced = (str) => {
  const opened = "(";
  const closed = ")";
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === opened) stack.push(opened);

    else if (str[i] === closed) {
      if (stack.length === 0) {return false}
  
      stack.pop();
    }
  
  }
   return stack.length === 0;
};
console.log(checkbalanced("ccfgj(a((a)))"));

const checkbalanced2 =(str)=>{
  const opened = "({["
  const closed = ")}]"
  let stack = [  ]

    for (let i =0; i<str.length; i ++){
      if (opened.includes(str[i]))
        stack.push(str[i])
      

      if (closed.includes(str[i])){
        if (stack.length===0) {return false}

       const lastOpened= stack.pop()

       if(opened.indexOf(lastOpened) !== closed.indexOf(str[i]))
       return false
      }
}return stack.length === 0
}
    



console.log(checkbalanced2("CGH([])"));


const checkBal = (str)=>{
  const opened = "(";
  const closed = ")";
  const stack = [];

  for(let i = 0; i<str.length; i++){

if (str[i]===opened) 
  {stack.push(opened)}

else if (str[i]===closed) {
if(stack.length === 0){return false}
stack.pop()
}

  }
  return stack.length === 0;

}
console.log(checkBal("KKK())))UUUUU"));

const checkBal2 =(str)=>{
  const opened = "({[";
  const closed = ")}]"
  const stack = []

  for( let i = 0; i < str.length; i++){
    if (opened.includes(str[i])) {stack.push(opened)}

    else if (closed.includes(str[i])){

      if (stack.length === 0 ) {return false}

      const lastOpened = stack.pop()

      if(opened.indexOf(lastOpened) !== closed.indexOf(str[i])) {return false}


    }
  }
  return stack.length === 0;
}
console.log(checkBal2("Dvb((("));

const primeNumber =(n)=>{

  if (n===1) return false
 

  for ( let i = 2; i <= Math.sqrt(n); i++){
    if (n % i ===0) return false
  }
return true
}
console.log(primeNumber(3));

const fibo = (n)=>{
 
  let fiboArr = [0,1]

  for (let i=2; i<n; i++){
  fiboArr.push(fiboArr[i-1] + fiboArr[i-2])
  }
  return fiboArr
}
console.log(fibo(9));

const factorial = (n) =>{

  if ( n===0 || n===1) return 1
  let result =1

  for (let i =n; i >=1; i--){
result *=i
  }
return result
}
console.log(factorial(5));

const fizzBuzz = (n)=>{

for (let i =0; i<n; i++){

  if (i%15===0) console.log("FizzBuzz");
  else if(i%3 === 0) console.log("Buzz");
 else if( i%5=== 0) console.log("Fizz");
 else console.log(i);


}

}
fizzBuzz(65)



const reverceStr = (str)=>{
  return str.split("").reverse().join("")

}


console.log(reverceStr("Hello"));

const isPalindrome = (str)=>{
  const revStr = str.split("").reverse().join("")
  if (revStr !==str){
    return false
  }
  return true
}
console.log(isPalindrome("AROuRA"));


const isAnogram = (str, oppositeStr)=>{
if (str.length !== oppositeStr.length){
  return false

}
const sortedStr= str.split("").reverse().sort().join("")
const soretedOppStr = oppositeStr.split("").sort().join("")
if (sortedStr !==soretedOppStr){return false} 
else return true
}
console.log(isAnogram("ola", "lol"));

const findMax1 = (arr)=>{
if(arr.length ===0) return undefined
  let min = arr[0];
  for(i=0; i <=arr.length;i++){
    if(arr[i]<min)
      min=arr[i]

  }return min
}
console.log(findMax1([-2,-6,-7,987]));

const findMax3 = (arr)=>{

return Math.max(...arr)
}
console.log(findMax3([2,-3,4,5,6]));

const findMax4 = (arr)=>{
  const sorted = arr.sort((a,b)=>a-b)
  return sorted[sorted.length-1]

}
console.log(findMax4([456,6,7,8]));

const removeDuplicates = (arr)=>{
 return new Set(arr)
  
}
console.log(removeDuplicates([9,5,5,5,7,8]));

///1. the length of the largest word //
const finfTheLengthOfTheLargestWord =(sent)=>{
const words = sent.split(" ")
let largestlength = 0
for(let i=0; i <words.length;i ++){
  if (words[i].length>largestlength) 
    largestlength=words[i].length
}
  
return largestlength
  }
console.log(finfTheLengthOfTheLargestWord("Hello World I am here"));


//2. which word is the largest  => position ?

const largest =(sent)=>{
const words = sent.split(" ")
let largestLength = 0;
let position =0;

for (let i =0; i<words.length; i++)
{
  if (words[i].length > largestLength){
    largestLength = words[i].length
    position = i
  }
}return position
}

console.log(largest("Hello Globally I am here"));

const sum = (arr)=>{
  const result = arr.reduce((total,current)=>total + current)
return result
}
console.log(sum([1,2,3,4,5,6,7,8,9]));

const summArr =(arr)=>{
let summ =0;
for (let i =0; i<arr.length;i++){
  summ += arr[i]}
  return summ
}
console.log(summArr([1,2,3,4,5,6,7,8,9]));

//the second largest

const largestElement = (arr)=>{
  let largest = 0;
  let secondLargest =0
  for(let i =0; i<=arr.length; i++){
    if(arr[i]>largest) largest = arr[i]
secondLargest= i-1
  }
  
return secondLargest
}
console.log(largestElement([1,2,3,4,10]));

//count wowels in string

const countWowels2 = (str)=>{
let count = 0;
const wowels ="aoueyi"
for (i=0; i <= str.length; i++)
  {
if(wowels.includes(str[i])){
  count ++
}
  }
  return count
}
console.log(countWowels2("hellooooo"));

///intersection

const findIntersection =(arr1,arr2)=>{
  
  const common = []
  for( i=0; i<=arr1.length; i++)
    if(!arr1.includes(arr2[i]))
      common.push(arr2[i])
    return common
}
console.log(findIntersection([1,2,3,4,5],[4,5,6,7,8,9]));

const mergeTwoSortedArrays = (arr1,arr2)=>{
const sortedArr1 = arr1.sort((a,b)=>a-b)
const sortedArr2 = arr2.sort((a,b)=>a-b)

const arr3 =[];

let i = 0; 
let j = 0;

while (i < sortedArr1.length && j < sortedArr2.length){
if(sortedArr1[i] < sortedArr2[j]){
  arr3.push(arr1[i])
  i++
}
else arr3.push(arr2[j])
j++

}
while(i<sortedArr1.length){
  arr3.push(sortedArr1[i])
  i++
}

while(j<sortedArr2[j]){
  arr3.push(sortedArr2[j])
  j++
}
return arr3
}
console.log(mergeTwoSortedArrays([1,2,3,6,7,8],[-9,10,11]));

//sort an array

const sortArr =(arr)=>{

  for(let i =0; i<arr.length;i++){
    let minIndex = i

    for(let j = i+1; j<arr.length;j++){
      if(arr[j]<arr[minIndex]){
        minIndex=j
      }
    }

    if(minIndex !== i){
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] =temp
    }
  }
  return arr
}
console.log(sortArr([5,6,7,8,97,6,3,-2]));

//combine two sorted arrays

const combine =(arr1,arr2)=>{
const arrS1 = arr1.sort((a,b)=>a-b)
const arrS2 = arr2.sort((a,b)=>a-b)
let arrS3 = []
let i =0;
let j =0;

while (i < arrS1.length || j<arrS2.length){
if (arrS1[i] < arrS2[j]){
arrS3.push(arrS1[i])
i++
} else{
  arrS3.push(arrS2[j])
  j++
}
}

while (i<arrS1.length){
  arrS3.push(arrS1[i])
  i ++
}
while (j<arr2.length){
  arrS3.push(arrS2[j])
  j++
}
return arrS3
}
console.log(combine([1,2,3,4,0,-1],[5,0,6,7,8]));

//find the largest word 

const theLargest = (str) => {
const arr = str.split( " ")
let largest = ""
let position = 0
for (let i =0; i<arr.length; i++){
if(arr[i].length > largest.length){
  largest = arr[i]
  position = i
}
}

return {largest, position}

}
console.log(theLargest("Hello hikkkkkkkk I am here"));

const countWow = (str) => {

  let wow = "aoueyi";
  let count = 0;
  for (let i = 0; i<str.length; i++){
    if(wow.includes(str[i])){
      count ++
    }
  }
  return count
}
console.log(countWow ("tralala"));

// find all pairs with a given sum

const Pairs = (sum) => {

  


}
console.log(Pairs(20));

//calculate missing number in array
const missing = (arr)=>{

  const n = arr.length +1;
  const expectedSum = (n*(n+1)/2)
  let realSum = 0

  for (item of arr){
    realSum += item
  }
  const missing =expectedSum - realSum
  return missing
}
console.log(missing([1,2,3,4,6,7,8]));

//compute the number of numericals in string
const num =(str)=>{
let count =0
  for (let i =0; i < str.length; i++){
    if(!isNaN(parseInt(str[i]))){
       count++
    }
     
  }

return count
}
console.log(num("d 5 6 7 8 9 "));

//non-matching char in string

const nonMatching =(str,char)=>{
  let arr =[]
  for (let i =0;i<=char; i++){
if (str[i] ===char){
  arr.push(str[i])
}

  }
return arr
}
console.log(nonMatching("abcd1","1"));

//total of matching int in arr
const matchInt = (arr,matching)=>{
  let count =0
  for (let i =0; i < arr.length; i ++){
if ( arr[i] === matching ){
  count ++
}

  }
return count
}
console.log(matchInt([1,2,3,4,5,"t","z",6,7,8,8,8, ],8));

const revArr = (arr)=>{
 let  reversed =[]
for (let i = arr.length-1; i>=0; i--){
  reversed.push(arr[i])
}
return reversed
}
console.log(revArr([1,2,3,4,5,6,7,8]));

const revStr = (str)=>{
  let res = ""
for (let i = str.length-1; i>=0; i--)
{
res += str[i]

}

return res
}
console.log(revStr("hello"));

const fibon = (n)=>{
if (n<0)return undefined;
if ( n === 1) return [1]
if (n===2) return[1,1]

let f = [1,1]

for (let i =2; i< n; i++){
  let next = f[i-1] + f[i-2]
  f.push(next)
}
return f
}
console.log(fibon(10));
// n +(n-1)// 1,1,2,3,5,8,13,21,34,55

const binarySearch = (arr, target)=>{


let left =0;
let right = arr.length-1 ///index of the last element

while (left <= right) {
  let middle = Math.floor((left+right)/2)

  if(arr[middle]===target) {
    return middle}
  if (arr[middle] < target ){ 
    left = middle +1 }
  if (arr[middle] > target){
    right= middle -1
  }  
 }
 return -1
}
console.log(binarySearch([1,2,3,4,5],5));

const fib = (n)=>{

  if (n<0) return undefined;
  if (n ===1) return [1];
  if (n===2) return [1,1]

  let fibArr = [1,1]

 for (let i =2; i<n;i++){
  let next = fibArr[i-1]+ fibArr[i-2]
  fibArr.push(next)
 }
 return fibArr
}
console.log(fib(10));


//factorial
let factor =(n)=>{
if (n<1) return undefined
let result = 1

  for(let i =2; i<n; i++){
 result = result *i
  }
return result
}
console.log(factor(10));
//10*9*8*7 // n*(n-1)
/////1 

/////STRINGS
const reverceString =(str)=>{

let rev = ""
for( let i =str.length-1; i >= 0; i--){
  rev = rev +str.charAt(i)
  

}  
return rev
}
console.log(reverceString("hello"));

