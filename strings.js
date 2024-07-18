//1. Reverse string

const reverseStr = (str)=>{

let rev = "";

for (let i = str.length-1; i >= 0; i--){
    rev = rev + str.charAt(i)
    
}
return rev
}
console.log(reverseStr("hello"));



//2. Check if palindrome

const checkPalindrome =(str, pal)=>{
  
    let rev = ""
    for (let i =str.length-1; i>=0; i--){
        rev = rev + str.charAt(i)
    }
   
  if (pal ===rev){return true}
}
console.log(checkPalindrome("hello", "olleh"));

// check if anogramm 

const checkAnogramm = (str, ano)=>{

    let strSorted = str.split("").sort().join("")
    let anosorted = ano.split("").sort().join("")

    if (strSorted === anosorted){
        return true
    }
}

console.log(checkAnogramm("dddaaa","aaaddd"));
//3a
const isAna =(str1, str2)=>{

    let objStr1 = {}
    let objStr2 ={}
   

    for (let i=0; i<str1.length; i++){
        let char = str1[i]
         objStr1[char]=(objStr1[char] ||0)+1
      
    }
    for (let i=0; i<str2.length; i++){
        let char = str2[i]
         objStr2[char]=(objStr2[char] ||0)+1
      
    }
   for (let char in objStr1){
    if (objStr1[char] !== objStr2[char]){
        return false
    }
   }
return true
}
console.log("3a anagramm");
console.log(isAna("abcd","bdcl"));

///4 Find the first non-repeted char

const findNonRep = (str)=>{

    let countChar ={}
    for(let i =0; i<str.length; i++){   //first iteration to count occurence of each char
       let char = str[i]
 countChar[char] = (countChar[char] || 0)+1
    }
    for(let i =0; i<str.length; i++){ //second iteration to find first char ===1
        let char = str[i]
        if( countChar[char] ===1){
             return char             //return char
        }
                      
    }
 return null
}
console.log("first non-repeating:");
console.log(findNonRep("aaaaabbbbbc"));

////Count the munber of wowels

const numWowels =(str)=>{
 let wowels = "aoyieu"
 let count =0;
 for (let i=0; i<str.length; i++){
    if (wowels.includes(str[i])){
        count++
    }
 }
 return count
}
console.log(numWowels("hey"));

///Count the number or words
const countWords = (str)=>{

  let count =0;
  let words = str.trim().split(/\s+/)
  for (let i=0; i< words.length; i++){
    count += 1
  }
  return count
}
// more simple: const count = word.length (no need in loop)
console.log("count words in string");
console.log(countWords("Hello World haha Jupi"));

/////////////////

const toTitle = (str) =>{

    const title = str.toUpperCase()
    return title
}
console.log(toTitle("Abstract"));

///7 Find the longest word

const longestWord = (str)=>{
let longest = ""
let arr = str.split(" ")
for (let i = 0; i < arr.length; i++){
    if( arr[i].length > longest.length){
      longest = arr[i]
    }
}
return longest
}
console.log(longestWord("i am here in Niedersachsen"));

//8 check if string contains only digits

const checkDigits = (str)=>{
for (let i =0; i<str.length; i++){
    if (isNaN(parseInt(str))){
        return false
    }
}
return true
}
console.log(checkDigits("123"));


///9 count the occurence of the character !!!

const countOccurence = (str)=>{

   let occurence = {}
   for (let i =0; i<str.length; i++){
   char = str[i]
   occurence[char]= (occurence[char] || 0) +1

   }
   return occurence
}
console.log("occurence of characters")
console.log(countOccurence("abcdefdddjjj"));



//11 remove duplicates


const removeDuplicates = (str)=>{

const withoutDuplicates = new Set(str)
res = Array.from(withoutDuplicates).join(" ")
return res
}
console.log(removeDuplicates("abbbbcdefg"));


// 12 check if string is a substring of another string

const checkstr = (str1, str2)=>{

if(str2.includes(str1))
 return true

}
console.log("string is a substring");
console.log(checkstr("123", "123456789"));

//remove all white spaces

const removeWhitespaces = (str)=>{
let result = str.replace(/\s+/, "")
return result
}
console.log(removeWhitespaces("1234   567   "));

//find the most frequent character

const mostFrequent = (str)=>{

let count = {}
for (let i =0; i<str.length; i++){
    let char = str[i]
    count[char] =(count[char]|| 0) +1
} 
//find the maximum frequency
let maxCount = 0;
let maxChar =" ";

for (let i in count){
    if (count[i] > maxCount){
        maxCount = count[i]
        maxChar =i
    }
}
return maxChar
}
console.log(mostFrequent("aaabccccccdfretzjk"));

///19 to camelCase

const toCamelCase = (str)=>{

let words = str.split(" ")
let camel = words[0].toLowerCase()

for (let i =1; i< words.length; i++){
  camel +=  words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
}
return camel
}
console.log(toCamelCase("Hello world"));

//convert to snake_case

const toSnakeCase =(str)=>{

let words = str.split(" ")
    let snake = ""
    for (let i =0; i<words.length; i++){
        words[i] = words[i].toLowerCase()
    }
    snake = words.join("_")
    return snake
}
console.log(toSnakeCase("Hello World"));

//21 check if all characters are uniqie

const checkUnique = (str)=>{
  let obj ={}
  
   for (let i=0; i<str.length; i++){
    let char = str[i]
   if(obj[char]){  // If the character already exists in the object, it's not unique
    return false
    }
     obj[char] =1 //mark the character as seen 
   }
  
   return true
}
console.log("check unique");
console.log(checkUnique("abcdedd"));



//REturn array of string into arry object

const transfotm = (arr)=>{
    const transformed = arr.map((name,index)=>{
        return {id:index +1, name:name}
    })
    return transformed
}
console.log(transfotm(["mary", "sam","kim"]));



///Manipulate arrays

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

person.gender = "M"
delete person.age 



const getKeysAndValues =(obj)=>{
  let  keys=[]
 let   values =[]

Object.entries(obj).forEach(([key,value])=>{
    
keys.push(key)
values.push(value)
    })
  return {keys,values}
}
console.log(getKeysAndValues(person));




// find non-matching characters in string

const findNotMatching = (str,target)=>{

    
    let count =0
    for (let i = 0; i< str.length; i++){
        if (target !== str[i]){
       
            count ++

        }
    }
    return count
}
console.log(findNotMatching("abcdefGGGGGg"),"G");

// number of numericals in string 

const numOfNumericals = (str)=>{
    let count =0
    for ( let i = 0; i< str.length; i++){
        if ( !isNaN(parseInt(str[i])) ){
            count ++
        }
    }
    return count
}

console.log(numOfNumericals("1234567assddffgghgj"));


// check for missing number
const checkMissing = (arr)=>{
const actualSum = arr.reduce((total,curr)=>total+curr,0)
const n = arr.length +1
const expectedSum = n*(n+1)/2
const missing = expectedSum - actualSum
return missing
}
console.log(checkMissing([1,2,3,5,6]));

///check if string is anagram

const checkAnagramm = (str1, str2)=>{
if( str1.length !== str2.length) return false
let charCount1 = {}
let charCount2 ={}

for (let i =0; i<str1.length; i++){
    charCount1[str1[i]]= (charCount1[str1[i]] ||0 ) +1
}
for (let i =0; i<str2.length; i++){
    charCount2[str2[i]]= (charCount2[str2[i]] ||0 ) +1
}

for (char in charCount1){
    if(charCount1[char] !== charCount2[char]) return false
}
return true
}
console.log(checkAnagramm("abcd", "dcab"));

// find the length of the longest word

const findTheLongestWord = (str)=>{

    const arr = str.split (" ")
    let longest = ""
    let secondLongest = ""
   
   
    for (let i =0; i < arr.length; i++){
        if ( arr[i].length > longest.length){
             secondLongest =longest
             longest = arr[i]
        }
        else if ( arr[i].length > secondLongest.length && arr[i].length !== longest.length){
            secondLongest = arr[i]
        }
    }
       
return secondLongest
}
console.log(findTheLongestWord( "Hello I am here"));

//count al characters in string

const countCharacters = (str)=>{

    let result = {}
    let arr = str.split("")
    for (let i=0; i<arr.length; i++){
      char = arr[i]
    result[char] =( result[char] ||0 )+1

    }
    return result
}
console.log(countCharacters("hello word"));




