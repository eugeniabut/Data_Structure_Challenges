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
   for(let i =str.length -1; i>= 0; i--)  {
       rev = rev + str.charAt(i)
   }

if  (rev === pal) return true
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

///4 Find the first non-repeted char

const findNonRep = (str)=>{

    let countChar = {}

    for ( let i=0; i<=str.length; i++){  //count each char
      const char = str[i]
      countChar[char] =(countChar[char]||0) +1
    }
    for ( let i=0; i<=str.length; i++){  //if char =1  return char
        const char = str[i]
        if (countChar[char] ===1){
            return char
        }
    }

return null
}
console.log(findNonRep("aaaaabbbbbc"));

////Count the munber of wowels

const numWowels =(str)=>{
    let count = 0
    const wowels = " aoueyi"

    for (let i =0; i< str.length; i++){
        if (wowels.includes(str[i])){
            count +=1
        }
    }
    return count
}
console.log(numWowels("helloworldgsshsjsuuuu"));

///Count the number or words
const countWords = (str)=>{

    let count =0;
    let arr = str.split(" ")
    for (let i =0; i<arr.length; i++){
        count ++
    }
    return count
}
console.log(countWords("Hello World Jupi"));

const toTitle = (str) =>{

    const title = str.toUpperCase()
    return title
}
console.log(toTitle("Abstract"));

///7 Find the longest word

const longestWord = (str)=>{
    let longest = ""
    const arr = str.split(" ")
    for (let i =0; i< arr.length; i++){
        if (arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    return longest
}
console.log(longestWord("i am here in Niedersachsen"));

//8 check if string contains only digits

const checkDigits = (str)=>{
let digits = "123456789"
  for (let i =0; i< str.length;i++){
   /* if (!isNaN(parseInt(str[i]))){
        return true
    }*/

        if(!digits.includes(str[i])){
            return false
        }
        
  }
  return true
}
console.log(checkDigits("123"));


///9 count the occurence of the character !!!

const countOccurence = (str)=>{

    let occurence = {}

    for (let i =0; i<str.length; i++)
{
     let char =str[i]
     occurence[char] =(occurence[char]||0) +1
}
return occurence
}
console.log(countOccurence("abcdefdddjjj"));

//11 remove duplicates

const removeDuplicates = (str)=>{

  setWithoutDuplicates = new Set(str)
  let result = Array.from(setWithoutDuplicates).join("")
  return result
}
console.log(removeDuplicates("abbbbcdefg"));

// check if string is a substring of another string

const checkstr = (str, anotherStr)=>{
for (let i = 0; i< str.length; i ++){
    if(anotherStr.includes(str))
        return true
}
return false
  
}
console.log(checkstr("123488", "123456789"));

//remove all white spaces

const removeWhitespaces = (str)=>{
let result = str.replace(" ", "")
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

    let count ={}
   
   for (let i =0; i<str.length; i++){
    let char =str[i]
    if(count[char]) return false
    else count[char] =1
   }
   return true
}
console.log(checkUnique("abcde"));

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