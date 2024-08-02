// 01. Given an array of integers nums and an integer target, return indices of the two numbers 
//such that they add up to target.


const indecesOfTwo = (arr, target)=>{
 let result =[]
    for (let i =0;i<arr.length; i++){        //nested loop aproach
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]+arr[j]===target){
           return[i,j]
        }
           
            }
       
    }
       return result.length >0 ? result:null
}
console.log(indecesOfTwo([2,7,11,15],9));

// 02. Given an integer x, return true if x is a 
//palindrome, and false otherwise.

const isPalindrome =(x)=>{
    let str = x.toString()
    let palindrome =[]
    for (let i=str.length-1; i>=0; i--)
        palindrome.push(str[i])
  const reversed = palindrome.join("")
     return str === reversed
  }


console.log(isPalindrome(121));

// 03. roman to integers

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

// 04. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
//and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

const mergeSortedArrays =(nums1,nums2)=>{
let merged = []
let m = nums1.length
let n = nums2.length
let i=0;                      //two pointers
let j =0;

while(nums1[m-1]===0){  //to ignore 0 at the end of array
    m--
}

        while(i<m && j<n){
            if(nums1[i] < nums2[j]){
                merged.push(nums1[i])
                i++
            }
            else{
                merged.push(nums2[j])
                j++
            }
         
            
        }

        while(i<m){
            merged.push(nums1[i])
            i++
        }

        while(j<n){
            merged.push(nums2[j])
            j++
        }
return merged
}
console.log(mergeSortedArrays([1,2,3,0,0,0],[2,5,6]));

// 4 a. if we are not allowed to create a third array, instead asked to put data from the 2nd to the first array

const mergeSortedArrs = (nums1, m, nums2, n)=>{
    let i = m-1; //pointers starting fom the end
    let j= n-1;
    let k = m+n-1  // array num1 will have length m+n; k is the last element of it

    while(i >= 0 && j >=0){

      if ( nums1[i] > nums2[j]){
        nums1[k] = nums1[i]
        i--
        
      }
      else{
        nums1[k] = nums2[j]
        j--
    
      }
      k--
    }
    while(j>=0){      // // If there are remaining elements in nums2, copy them to nums1
        nums1[k]=nums2[j]
        j--
        k--
    }
        //since we are modifying nums1 in place, we do not need to return . to test use console.log
}


let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3; // Number of valid elements in nums1
let nums2 = [2, 5, 6];
let n = 3; // Number of elements in nums2

console.log(mergeSortedArrs(nums1,m,nums2,n))
console.log(nums1);

// 05. Squares of a Sorted Array
//Input: nums = [-4,-1,0,3,10]
//Output: [0,1,9,16,100]
//Explanation: After squaring, the array becomes [16,1,0,9,100].
//After sorting, it becomes [0,1,9,16,100].

const SquaresOfSortedArray = (arr)=>{
    const scuaredSorted = arr.map((num)=>num*num).sort((a,b)=>a-b)
    return scuaredSorted
}
console.log(SquaresOfSortedArray([-4,-1,0,3,10]));

const SquaresSortedArr = (arr)=>{
  let result = []
    for ( let i=0; i<arr.length; i++){
  result.push (Math.pow(arr[i],2))
  
    }
   
    return result.sort((a,b)=>a-b)
}
console.log(SquaresSortedArr([-4,-1,0,3,10]));

// 06. Remove Element. How many elements are in resulting array

const removeElement =(nums,val)=>{
    let k =0
    for (let i =0; i<nums.length;i++){
        if(nums[i]!==val){
          nums[k]=nums[i]
          k++      
        }
    }
    return k
}
console.log(removeElement([0,1,2,2,3,0,4,2],2)); ;

// 07  Remove Duplicates from Sorted Array. Return number of unique elements


const removeDuplicates = function(nums) {
   
    let i =0   //slow pointer indicates the position

    for (let j = 1; j<nums.length; j++){
     if(nums[j] !== nums[i]){
        i++  //move pointer
       nums[i]= nums[j] 
     }
    }
    return i+1  // number of duplicates
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// 08 Apply Operations to an Array
//if nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
//After performing all the operations, shift all the 0's to the end of the array.
//Input: nums = [1,2,2,1,1,0]  => Output: [1,4,2,0,0,0]
//Return the resulting array.

var applyOperations = function(nums) {
    
   
    for (let i =0; i<nums.length; i++){
       if (nums[i]===nums[i+1]){
        nums[i] *=2
        nums[i+1]=0
       }
// shift all zeroes to the end
let k =0 //pointer of non-zero
for (let i=0; i< nums.length; i++){
    if(nums[i] !== 0){
        nums[k]=nums[i]
        k++
    }
}

for (let i=k; i< nums.length; i++){
    nums[i]=0
}



    }
    return nums
}
let nums = [1,2,2,1,1,0]
console.log(applyOperations(nums)); 

// 09 Move ZEROES

var moveZeroes = function(nums) {
    let k =0
    for(let i =0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[k]=nums[i]
            k++ 
        
        }
    }
    for (let i=k; i<nums.length;i++){
        nums[i]=0
    }

       return nums
};
console.log(moveZeroes([0,1,0,3,12]));

// 10 Majority Element . Given an array nums of size n, return the majority element.

var majorityElement = function(nums) {
    
    let count ={}

    for (let i=0;i<nums.length;i++){
            let char = nums[i]
             count[char]= (count[char] ||0) +1
        }
      
 
    let major = nums[0] //first under index 0
    for (let char in count){    //iteration in object: in
      
        if (count[char] > count[major]){
            major = char        //never return inside a loop -> will stop loop immediately
          
        }
    }  
    return major
};
console.log( majorityElement([2,2,1,1,1,2,2]));


//*************************************************** */

// 11. Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
//Input: strs = ["flower","flow","flight"]
//Input: strs = ["flower","flow","flight"] Output: "fl"

const findLongestCommonPrefix =(strs)=>{

let prefix = strs[0]
for(let i =1; i<strs.length; i++){
while(strs[i].indexOf(prefix) !==0){
    prefix =prefix.substring(0, prefix.length-1)
    if(prefix===""){return ""}
}

}
return prefix
}
console.log(findLongestCommonPrefix(["flower","flow","flight"]));

//************************************************************************************************** */
// 12. Rotate array 
//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
//Input: nums = [-1,-100,3,99], k = 2
//Output: [3,99,-1,-100]
//Explanation: 
//rotate 1 steps to the right: [99,-1,-100,3]
//rotate 2 steps to the right: [3,99,-1,-100]

const rotateArNums = (nums,k)=>{

let n = nums.length 
k = k%n    //Handle cases where k is greater than n

reverse(nums,0,n-1 )
reverse(nums,0,k-1)
reverse(nums,k,n-1)
    
return nums


}
const reverse = (arr,start,end)=>{
        while(start < end){
            let temp = arr[start]
        arr[start] =arr[end]
        arr[end] =temp  
        start++
        end--
        }
      


    }

console.log(rotateArNums([-1,0,1,2],2));

///Another way: return nums.slice(-k).concat(nums.slice(0, -k));