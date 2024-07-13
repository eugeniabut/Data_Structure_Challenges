// 1. Is unique ? Algorithm to determine, if string has all unique characters

const isUnique = (str) => {
  const arr = str.split("");
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    count[char] = (count[char] || 0) + 1;

    if (count[char] > 1) {
      return false;
    }
  }
  return true;
}
console.log("Unique string 1",isUnique("abc"));


// without counting
const isUnique2 = (str)=>{
let obj = {}
  for (let i =0;i<str.length; i++){
let char =str[i]
if (obj[char]) return false
obj[char] = true
 }
return true
}
console.log("Unique string 2", isUnique2("ABCCD"));


// if we are not allowed to use object (or hash tab) time complexity "O(n2)"

const isUnique3 = (str)=>{
  for (let i =0;i<str.length; i++){
    if(str[i]===str[i+1]){
      return false
    }
  }
  return true
}
console.log("Unique string 3", isUnique3("ABCCD"));

//if we are not allowed to use another data type, but we can use sort method
const isUnique4 =(str)=>{
  const arr = str.split("").sort()
  for (let i =0;i<str.length; i++){
    if (arr[i]===arr[i+1]) {return false}
  }
return true
}
console.log("Unique string 4 with sorting", isUnique4("abcde"));

//************************************************************************************************//
// 2. Check permutations. Given two strings, whrite a method to check, if one is permutation of other
// is case sensetive ? are white spaces significant?
            //.replace(/\s+/g,"")

const strSpaces = "asdfccc       bbb   nn"
console.log(strSpaces.replace(/\s+/g,""));
const checkPermutations = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let normStr1 = str1.split("");
  let normStr2 = str2.split("");

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < normStr1.length; i++) {
    let char = normStr1[i];
    count1[char] = (count1[char] || 0) + 1;
    console.log(count1);
 
  }
  for (let i = 0; i < normStr2.length; i++) {
    let char = normStr2[i];
    count2[char] = (count2[char] || 0) + 1;  
  console.log(count2);
  }
  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }

  return true

};
console.log("check permutations",checkPermutations("abc", "bca"));

// if we are not allows to use another data type,
//just use split("").sort().join("") and compare two resultin arrays
const checkPermutations2 =(str1, str2)=>{
const str1norm = str1.split("").sort().join()
const str2norm = str2.split("").sort().join()
if (str1norm !== str2norm){return false}
return true
}
console.log("check permutations with sorting",checkPermutations2("abcd", "bcda"));

//***********************************************************************/
// 3. URLify : write a method to replace all spaces in a string with "%20"

const urlify = (str)=>{
  let originalLength = str.length
  let spaceCount =0

for (let i = 0; i<str.length;i++){
  if (str[i] === " "){
    spaceCount++}
}

let newLength = originalLength + (spaceCount *2)

let arr = str.split("")

for (let i=originalLength -1, j = newLength-1; i>=0; i--){
  if (arr[i] ===" "){
    arr[j]="0";
    arr[j-1]="2"
    arr[j-2]= "%"
  j-=3
  }
  else {
    arr[j] =arr[i];
    j--
  }

}
    return arr.join("")
}

console.log(urlify("gmail com"));

//4. palindrome permutation: given a string, write a function to check if it is a permutation of a palindrome
 // no need to make backword | remove spaces| make lowercase

const palindromePermutation = (str1,str2)=>{

    let normStr1= str1.replace(/\s+/g, "").toLowerCase()
    let normStr2 = str2.replace(/\s+/g, "").toLowerCase()


    let countStr1 ={}
    let countStr2 = {}

    for(let i =0; i<normStr1.length; i++){
        let char = normStr1[i]
        countStr1[char] =(countStr1[char] ||0) +1

    }
    for(let i =0; i<normStr2.length; i++){
        let char = normStr2[i]
        countStr2[char] =(countStr2[char] ||0) +1

    }
    for (let char in countStr1){
        if(countStr1[char]!== countStr2[char]){
            return false
        }
    }
    return true
}
console.log(palindromePermutation("Tact Coa", " Cao Tact"));

// if not alowed to use another data type and use sort().

const palindromePermutation2 = (str1,str2)=>{ 
 count1 =0
 count2 =0

  for (let i =0; i<str1.length;i++) {
    char =str1[i]
   for (let j =0; j<str1.length; j++){
    if (str1[j]===char)
      count1++
   }
   for (let j =0; j< str2.length; j++){
    if (str2[j]===char)
      count2++
   }
if(count1 !== count2) return false
  }


  return true
}
console.log("palindrome permutation 2", palindromePermutation2("abcd", "dcbn"));


//**************************************************************************** */

// ONE AWAY (EDIT). There 3 types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given to strings, check if they are one edit (or zero edits) away.
//peter -peters ->true
//peter -pete -> true
//peter -poter -> true

const checkEdits =(str1,str2)=>{
if (Math.abs(str1.length - str2.length)>1) return false

let i =0
let j = 0
let isEdited = false
while (i<str1.length &&j< str2.length){
  
    if (str1[i] !==str2[j]){

        if (isEdited){
            return false
         }
        isEdited = true
   
    if (str1.length < str2.length){j++}
    else if (str1.length > str2.length){i++}
    else {i++
         j++}
 }
         else{
            i++ 
            j++
         }
}
 return true
}
console.log(checkEdits("peter", "pete"))


//****************************************************** */
// GENERATE PERMUTATIONS recursively


function generatePermutations(str) {
    const n = str.length;
    const result = [];

    if (n === 1) {return [str];}// Base case

    for (let i = 0; i < n; i++) {
    const currentChar = str[i];     // Extract the current character

        
        const restOfString = str.substring(0, i) + str.substring(i + 1);// substring excluding the current character
        const permutationsOfRest = generatePermutations(restOfString);

        
        for (let permutation of permutationsOfRest) {
            result.push(currentChar + permutation);
        }
    }

    return result;
}
console.log("generate permutations",generatePermutations("abc"));



