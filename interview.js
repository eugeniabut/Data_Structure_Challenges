// 1. Is unique ? Algorithm to determine, if string has all unique characters

const isUnique = (str) => {
  const normStr = str.split("");
  const count = {};

  for (let i = 0; i < normStr.length; i++) {
    let char = normStr[i];
    count[char] = (count[char] || 0) + 1;

    if (count[char] > 1) {
      return false;
    }
  }
  return true;
};
console.log(isUnique("abcc"));

// 2. Check permutations. Given two strings, whrite a method to check, if one is permutation of other

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
console.log(checkPermutations("abc", "bca"));


// 3. URLify : write a method to replace all spaces in a string with "%20"

const urlify = (str)=>{

    let url = str.replace(" ", "%20")
    return url
}

console.log(urlify("gmail com"));

//4. palindrome permutation: given a string, write a function to check if it is a permutation of a palindrome
 // no need to make backword | remove spaces| make lowercase

const palindromePermutation = (str1,str2)=>{

    let normStr1= str1.replace(" ", "").toLowerCase()
    let normStr2 = str2.replace(" ", "").toLowerCase()


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

// One away There 3 types of edits that can be performed on strings:
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