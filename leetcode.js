//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

const indecesOfTwo = (arr, target)=>{
 let result =[]
    for (let i =0;i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]+arr[j]===target){
            result.push({i,j}) 
        }
           
            }
       
    }
       return result.length >0 ? result:null
}
console.log(indecesOfTwo([2,7,11,15],9));

//Given an integer x, return true if x is a 
//palindrome, and false otherwise.

const isPalindrome =(x)=>{
    let str = x.toString()
    let palindrome =[]
    for (let i=str.length-1; i>=0; i--)
        palindrome.push(str[i])
  const reversed = palindrome.join("")
     return str ===reversed
  }


console.log(isPalindrome(121));

//roman to integers

const romanToIntegers =(s)=>{

    const romanMap={
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
    }

    let total =0;
 


    for(let i = 0; i<s.length; i++){

     let current = romanMap[s[i]]
     let next = romanMap[s[i+1]]


        if(next && current <next){
            total -=current
        }
        else{
            total +=current
        }
    
    }
    return total
}
console.log(romanToIntegers("IX"));