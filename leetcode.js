// 01. Given an array of integers nums and an integer target, return indices of the two numbers
//such that they add up to target.

const indecesOfTwo = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    //nested loop aproach
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return result.length > 0 ? result : null;
};
console.log(indecesOfTwo([2, 7, 11, 15], 9));

// 02. Given an integer x, return true if x is a
//palindrome, and false otherwise.

const isPalindrome = (x) => {
  let str = x.toString();
  let palindrome = [];
  for (let i = str.length - 1; i >= 0; i--) palindrome.push(str[i]);
  const reversed = palindrome.join("");
  return str === reversed;
};

console.log(isPalindrome(121));

// 03. roman to integers

const romanToIntegers = (s) => {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romanMap[s[i]];
    let next = romanMap[s[i + 1]];

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
};
console.log(romanToIntegers("IX"));

// 04. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

const mergeSortedArrays = (nums1, nums2) => {
  let merged = [];
  let m = nums1.length;
  let n = nums2.length;
  let i = 0; //two pointers
  let j = 0;

  while (nums1[m - 1] === 0) {
    //to ignore 0 at the end of array
    m--;
  }

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    merged.push(nums1[i]);
    i++;
  }

  while (j < n) {
    merged.push(nums2[j]);
    j++;
  }
  return merged;
};
console.log(mergeSortedArrays([1, 2, 3, 0, 0, 0], [2, 5, 6]));

// 4 a. if we are not allowed to create a third array, instead asked to put data from the 2nd to the first array

const mergeSortedArrs = (nums1, m, nums2, n) => {
  let i = m - 1; //pointers starting fom the end
  let j = n - 1;
  let k = m + n - 1; // array num1 will have length m+n; k is the last element of it

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    // // If there are remaining elements in nums2, copy them to nums1
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  //since we are modifying nums1 in place, we do not need to return . to test use console.log
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3; // Number of valid elements in nums1
let nums2 = [2, 5, 6];
let n = 3; // Number of elements in nums2

console.log(mergeSortedArrs(nums1, m, nums2, n));
console.log(nums1);

// 05. Squares of a Sorted Array
//Input: nums = [-4,-1,0,3,10]
//Output: [0,1,9,16,100]
//Explanation: After squaring, the array becomes [16,1,0,9,100].
//After sorting, it becomes [0,1,9,16,100].

const SquaresOfSortedArray = (arr) => {
  const scuaredSorted = arr.map((num) => num * num).sort((a, b) => a - b);
  return scuaredSorted;
};
console.log(SquaresOfSortedArray([-4, -1, 0, 3, 10]));

const SquaresSortedArr = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.pow(arr[i], 2));
  }

  return result.sort((a, b) => a - b);
};
console.log(SquaresSortedArr([-4, -1, 0, 3, 10]));

// 06. Remove Element. How many elements are in resulting array

const removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// 07  Remove Duplicates from Sorted Array. Return number of unique elements

const removeDuplicates = function (nums) {
  let i = 0; //slow pointer indicates the position

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++; //move pointer
      nums[i] = nums[j];
    }
  }
  return i + 1; // number of duplicates
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//REMOVE DUPLICATES II . Leave all integers that occur once or twice

const removeDuplicatesII = (nums) => {
  let i = 1; //slow pointer indicates the position
  let count = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[i]) {
      //If the current element is the same as the previous one, increment the count
      count++;
    } else {
      count = 1; // If the current element is different, reset the count to 1
    }
    if (count <= 2) {
      nums[i] = nums[j]; // Place the current element at the position indicated by `i`
      i++; // Move the slow pointer to the next position
    }
  }

  return i + 1; //Return the length of the modified array
};
console.log(removeDuplicatesII([1, 1, 1, 2, 2, 3, 7, 7]));

// 08 Apply Operations to an Array
//if nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
//After performing all the operations, shift all the 0's to the end of the array.
//Input: nums = [1,2,2,1,1,0]  => Output: [1,4,2,0,0,0]
//Return the resulting array.

var applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
    // shift all zeroes to the end
    let k = 0; //pointer of non-zero
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[k] = nums[i];
        k++;
      }
    }

    for (let i = k; i < nums.length; i++) {
      nums[i] = 0;
    }
  }
  return nums;
};
let nums = [1, 2, 2, 1, 1, 0];
console.log(applyOperations(nums));

// 09 Move ZEROES

var moveZeroes = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // array with non-zero numbers
      nums[k] = nums[i];
      k++;
    }
  }
  for (let i = k; i < nums.length; i++) {
    //all zeroes at the end
    nums[i] = 0;
  }

  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));

// 10 Majority Element . Given an array nums of size n, return the majority element.

var majorityElement = function (nums) {
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    count[char] = (count[char] || 0) + 1;
  }

  let major = nums[0]; //first under index 0
  for (let char in count) {
    //iteration in object: in

    if (count[char] > count[major]) {
      major = char; //never return inside a loop -> will stop loop immediately
    }
  }
  return major;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

//*************************************************** */

// 11. Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
//Input: strs = ["flower","flow","flight"]
//Input: strs = ["flower","flow","flight"] Output: "fl"

const findLongestCommonPrefix = (strs) => {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // indexOf() is <1 (negative) if does not exist, 0 means starts from 0 position
      prefix = prefix.substring(0, prefix.length - 1); //we shorten prefix from the end
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
};
console.log(findLongestCommonPrefix(["flower", "flow", "flight"]));

//************************************************************************************************** */
// 12. ROTATE ARRAY
//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
//Input: nums = [-1,-100,3,99], k = 2
//Output: [3,99,-1,-100]
//Explanation:
//rotate 1 steps to the right: [99,-1,-100,3]
//rotate 2 steps to the right: [3,99,-1,-100]

const rotateArNums = (nums, k) => {
  let n = nums.length;
  k = k % n; //Handle cases where k is greater than n

  reverse(nums, 0, n - 1); //reverse entite array
  reverse(nums, 0, k - 1); //reverse first k elements
  reverse(nums, k, n - 1); //reverse remaining elements

  return nums;
};
const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

console.log(rotateArNums([-1, 0, 1, 2], 2));

///Another way: return nums.slice(-k).concat(nums.slice(0, -k));

const reverseArr = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  return nums;
};
console.log(reverseArr([-1, 0, 1, 2]));
//----------------------------
const reverseArr2 = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

console.log(reverseArr2([-1, 0, 1, 2]));

//-----------------------------------

const reverseArr3 = (nums, k) => {
  return nums.slice(-k).concat(nums.slice(0, -k));
};
console.log(reverseArr3([-1, 0, 1, 2], 2));

// FIND PROFIT
//Best Time to Buy and Sell Stock I

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let potentialProfit = prices[i] - minPrice;
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
      }
    }
  }
  return maxProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Best Time to Buy and Sell Stock II. !!!On each day, you may decide to buy and/or sell the stock.
//Input: prices = [7,1,5,3,6,4]  Output: 7
//Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
//Total profit is 4 + 3 = 7.

const maxProfit2 = (prices) => {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

//Jump Game
//You are given an integer array nums. You are initially positioned at the array's first
// index, and each element in the array represents your maximum jump length at that position.
//Return true if you can reach the last index, or false otherwise.

const jump = (nums) => {
  let maxReach = 0; // max index we can reach

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]); //Math.max is needed to check reachibality globally
  }
  return maxReach >= nums.length - 1;
};
console.log(jump([2, 3, 1, 1, 4]));

// Jump Game . Each element nums[i] represents the maximum length of a forward jump from index i.
//Return the minimum number of jumps to reach nums[n - 1]

var jumps = function (nums) {
  let jump = 0;
  let maxRange = 0; //farthest index
  let currentEnd = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxRange = Math.max(maxRange, i + nums[i]);
    if (i === currentEnd) {
      currentEnd = maxRange;
      jump++;
    }
    if (currentEnd >= nums.length - 1) {
      break;
    }
  }
  return jump;
};
console.log(jumps([2, 3, 1, 1, 4]));

//Length of the last word
const lengthTheLastWord = (str) => {
  const arr = str.split(" ");
  return arr[arr.length - 1].length;
};
console.log(lengthTheLastWord("Hello World"));
//*****/ //Length of the last word

var lengthOfLastWord = function (s) {
  let length = 0; // To count the length of the last word
  let inWord = false; // To track if we are in a word

  // Iterate from the end of the string to the beginning
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      // If it's a non-space character, we are in a word
      inWord = true;
      length++;
    } else if (inWord) {
      // If we encounter a space after being in a word, stop counting
      break;
    }
  }

  return length;
};
// Test the function
console.log("lengthOfLastWord", lengthOfLastWord("Hello World")); // Output: 5

// Valid parenthesis . Given a string s containing  '(', ')', '{', '}', '[' and ']',
//determine if the input string is valid.

const validParenthesis = (s) => {
  let open = "(,{,[";
  let closed = "),},]";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    } else if (closed.includes(s[i])) {
      if (stack.length !== 0) {
        let top = stack[stack.length - 1];
        if (
          (s[i] === ")" && top === "(") ||
          (s[i] === "]" && top === "[") ||
          (s[i] === "}" && top === "{")
        )
          stack.pop();
        else return false; // Mismatched parenthesis
      } else return false; // stack was empty
    }
    return true;
  }
};
console.log(validParenthesis("()[]{}"));

//FIRST OCCURENCE
// Given two strings needle and haystack,
//return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const firstOccurence = (haystack, needle) => {
  return haystack.indexOf(needle);
};
console.log(firstOccurence("sadbutsad", "nut"));

//******************************** */
//Search Insert Position
//Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.

const insertPosition = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length; //will be at the end of the array
};
console.log(insertPosition([1, 2, 3, 4, 6, 7, 8], 5));

//To achieve O(log n) runtime complexity, you should use a binary search algorithm.

const insertPos = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);

    if ((target = nums[middle])) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left; //target not found, return the insertion point
};
console.log(insertPos([1, 2, 3, 4, 6, 7, 8], 5));

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (target === nums[middle]) {
      return middle;
    }
    if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
};
console.log("search insert", searchInsert([1, 3, 5, 6], 5));

//PLUS ONE
//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
//Increment the large integer by one and return the resulting array of digits.
//Input: digits = [1,2,3] Output: [1,2,4] Explanation: The array represents the integer 123.
//Incrementing by one gives 123 + 1 = 124.Thus, the result should be [1,2,4].

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([1, 2, 9]));

//Happy number
//Starting with any positive integer, replace the number by the sum of the squares of its digits.

const getSumOfSquares = (num) => {
  let sum = 0;
  const digits = num.toString().split(""); //convert numbrs to string and to array
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), 2); // parseInt converts each digits back to integer
  }
  return sum;
};

const happyNum = (num) => {
  let slow = num;
  let fast = getSumOfSquares(num);

  while (slow !== fast && fast !== 1) {
    slow = getSumOfSquares(slow); //updated with the result of the respective sum!
    fast = getSumOfSquares(getSumOfSquares(fast)); //updated with the result of the respective sum"
  }

  return fast === 1;
};

console.log("happy num", happyNum(19));

//SUMMARY OF RANGES. You are given a sorted unique integer array nums.
//Return the smallest sorted list of ranges that cover all the numbers in the array exactly.

const sumaryOfRanges = (num) => {
  let range = [];
  let start = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i + 1] !== num[i] + 1 || i + 1 === num.length) {
      if (start === i) {
        range.push(`${num[start]}`);
      } else {
        range.push(`${num[start]} -> ${num[i]}`);
      }
      start = i + 1;
    }
  }
  return range;
};

console.log(sumaryOfRanges([1, 2, 3, 5, 6, 9]));
