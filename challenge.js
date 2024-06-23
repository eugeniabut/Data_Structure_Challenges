{
  /*const getMinMax = function (arr) {
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
    return [];
  }

  if (n === 1) {
    return [0];
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

//find in array
 
const findInArr = (arr, target)=>{
if (arr.lenfth < 1) return 
for ( let i =0; i<= arr.length;
  i++){
    if (arr[i]===target) return i

  }  return 0
}
console.log(findInArr([1,2,3,4,5,6,7],3));

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
const keyArr = arrayNum.keys()
for (let key of keyArr){
  console.log(key);
}

const entriesArr = arrayNum.entries()
for (let entry of entriesArr){
  console.log(entry);
}
const valuesErr = arrayNum.values()
for (let value of valuesErr){
  console.log(value);
}

const arrayLong  = ["ra", "ra", "sdsfs", "kooo"]
arrRemovedDuplicates= new Set(arrayLong)
console.log(arrRemovedDuplicates);

//QUICK SORT

const unsortedArr = [3,6,7,8,9,8,7,4,34,8,2,9,6,8,4,]

const sortArray = (arr)=>{

if (arr.length <1) return arr

let pivot = arr[Math.floor(arr.length/2)]
  let left = [];
  let rigth = [];
  let equal =[];

  for (let item of arr){
    if (item < pivot){
      left.push(item)
    }
    else if (item > pivot){
          rigth.push(item)
    }
  else equal.push(item)
  }


return sortArray(left).concat(equal,sortArray(rigth))
}

 console.log( sortArray(unsortedArr))

 const sorted = unsortedArr.sort((a,b)=>a-b)
 console.log(sorted);

const arr12 = [1,2,3,4,5,6,7,8,9,8,6,5,4,3,2,7,4,5,5,6,6,6,6]
const target =5
const found = arr12.findIndex((item)=>item ===target);
console.log(found);


