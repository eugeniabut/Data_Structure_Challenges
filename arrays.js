//Split array on chanks
const chanking = (arr, chankSize) => {
 let result = []
 for (let i = 0; i <= chankSize;i++){
  result.push(arr.slice(i, i+ chankSize))
 }
return result
};
console.log("chanks",chanking([1, 2, 3, 4, 5, 6, 7, 8], 2));

// sort one array // first loop:let minimumIndex =i, second loop inside:let minIndex j=i+1 ; if minIndex !== i swapping

const sortArray = (arr) => {
 
for (let i=0; i< arr.length; i++){
   minIndex = arr[0]

   
    for (let j =i+1; j< arr.length-1; j++){
       if( arr[j] < arr[minIndex]){
        minIndex =j
      }
    }
     
    let temp =arr[i]
    arr[i]= arr[minIndex]
    arr[minIndex] = temp
}
return arr
};
console.log("sorted array",sortArray([9, 7, 6, 5, 8, 7, 7, 8, 9, 1, 2, 3, 4]));

///sort two arrays 3 while loops
const sortTwoarrays = (arr1, arr2) => {
  let arr3 =[]

  let i =0;
  let j = 0;
  while (i < arr1.length && j< arr2.length){
    if (arr1[i] < arr2[j]){
      arr3.push(arr1[i])
      i++
    }
    else {
      arr3.push(arr2[j])
      j++
    }
  }

  while(i< arr1.length){
    arr3.push(arr1[i])
  i++}

  while (j < arr2.length){
    arr3.push(arr2[j])
    j++
  }

return arr3
};
console.log("sort two arrays",sortTwoarrays([1, 3, 5], [2, 3, 5, 6, 7, 8]));

/// Reverse array

const reverseArr = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};
console.log(reverseArr([1, 2, 3, 4, 5]));

//find maximum in array

const findMax = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > max) {
      max = arr[i];
    }
  return max;
};
console.log(findMax([1, 2, 3, 8, 5, 6]));

/// total of the matching integers

const totalOfMathching = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + !isNaN(parseInt(arr[i]));
  }
  return total;
};

console.log(totalOfMathching([1, 2, 3, 4, "a", " "]));

// remove duplicates from array

const removeDuplicates = (arr) => {
  const result = new Set(arr);

  return Array.from(result);
};
console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5, 6, 7, 8]));




//find intersection of two arrays

const findIntersections = (arr1, arr2) => {
let intersection = []
arr1.forEach((item)=>{
  if(arr2.includes(item)){
    intersection.push(item)
  }
})
return intersection
}
console.log("Intersections:", findIntersections([1, 2, 3, 4], [3, 4, 5, 6]));





// sum of elements inarray
const findSumOfElements =(arr)=>{
  let sum = 0

for (let i =0; i< arr.length; i++){
sum += arr[i]
}
return sum
}


console.log(findSumOfElements([1,2,3,4,5]));


//balanced parenteces

const ifBalanced =(str)=>{

  let opened = "("
  let closed =")"
  let stack =[]

  for (let i =0; i<str.length; i++)
    if( str[i] ===opened){
      stack.push(opened)
    }


   else if (str[i]===closed ){
    if ( stack.length ===0){
        return false
    }
    stack.pop()
    }

    return stack.length ===0
}
console.log(ifBalanced("abc)bgh"));


// move all zeroes in an array to the end while maintaining the order of non-zero elements.

const moveallZeroes = (arr)=>{
  let nonZeroIndex= 0
    for (let i=0; i<arr.length; i++)
    if (arr[i]!== 0){
let temp =arr[nonZeroIndex]
arr[nonZeroIndex]= arr[i]
arr[i] = temp
nonZeroIndex ++
}
return arr
}
  console.log("move all zeroes",moveallZeroes([4,0,5,0,6]))


  //Find Duplicates in Array
  const findDuplicates = (arr)=>{

  count ={}
  arrOfDoubles =[]
    for (i=0;i<arr.length; i++){
      char = arr[i]
      if (arr[i]){
        count[char] = (count[char] || 0) +1
        if (count[char] ===2)
          arrOfDoubles.push(char)
      }
    }
    return arrOfDoubles
  }
  console.log(findDuplicates([1,2,3,3,3,4,5,6,6,6]));


//total of matching integers

const totalOfMatch =(arr,target)=>{
  
  let count =0
  for(let i =0; i< arr.length; i ++)
    if(arr[i]===target){
      count++
    }
return count
}
console.log(totalOfMatch([1,3,4,5,5,5,7,7,7],7));

// the number of numericals 
const numericalsNumber =(str)=>{
 let count = 0;
  for (let i=0;i<str.length;i++){
   
if (!isNaN(parseInt(str[i]))){
  count ++
}
  }
  return count
}
console.log(numericalsNumber("abcd1234"));

// find the second latest 
const theSecondLatest = (arr)=>{
  let latest =0
  let secondLatest =0
  for (let i =0; i<arr.length; i++){
    if (arr[i]> latest){
      secondLatest = latest
      latest =arr[i]   
    }
    else if (arr[i] > secondLatest && arr[i] !== latest)
  {
    secondLatest =arr[i]
  }
 
} return secondLatest
}
console.log("secondLatest",theSecondLatest([2,6,7,8,9,10]));

// balanced parenteses 

const checkBalancedParenthesis = (str)=>{
let open ="([{"
let closed =")]}"
let stack =[]

for (let i=0; i< str.length; i++){
  if(open.includes(str[i])){
    stack.push(open)
  }

  else if (closed.includes(str[i])){
    if (stack.length===0){
      return false
    }
    const lastOpened =stack.pop()
    if(open.indexOf(lastOpened) !== closed.indexOf(arr[i])){
      return false
    }

  }
  return stack.length ===0
}
}

console.log(checkBalancedParenthesis("abcd(){}[]"))