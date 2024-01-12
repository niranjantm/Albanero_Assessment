/*
Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
formed by reversing the digits of 'x' without using any built-in methods for reversal. After
reversing the digits, determine whether the resulting number has any prime factors. If it does
have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
Example 1:
Input - 123
reversed integer - 321
prime factors of 321 are 3 and 107
output - Yes - [3,107]
*/
function reverse_and_prime_factor(x){
    function reverse_number(number){
    let revNum = 0;
    while(x>0){
        let rem = x%10;
        x = Math.floor(x/10);
        revNum = rem + revNum*10;
    }
    return revNum;
}

function is_prime(number){
    if (number < 2){
        return false;
    } 
    for (let i = 2; i <= Math.floor(number/2); i++) {
      if (number % i === 0){
        return false;
      } 
    }
    return true;
}

function prime_factors(number){
    let factors = [];
    for(let i = 2;i<=number;i++){
        if(number%i===0 && is_prime(i)){
            factors.push(i);
            number = number/i
        }
    }
    return factors;
}
const reverseNum = reverse_number(x);
const factors = prime_factors(reverseNum);

return factors.length===0?"No":`Yes - [${factors}]`
}

/*
Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
*/
function group_anagrams(strs){
    if(strs===undefined || strs===null || strs.length===0 || (strs.length===1 && strs[0]=="")){
        return[[""]]
    }
    const map = {};
    for(let i=0;i<strs.length;i++){
        let item = strs[i].split("").sort().join("");
        if(!map[item]){
            map[item] = [strs[i]];
        }else{
            map[item] = [...map[item],strs[i]]
        }
    }
    let result = [];
    for(let key in map){
        result.push(map[key]);
    }
    return result;
}

/*
Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
space-separated sequence of one or more array words.
Note that the same word in the array may be reused multiple times in the segmentation.
Example 1:
Input: s = "leetcode", wordArray = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
*/
function string_in_array(s,wordArray){
    let resArray = [];
for(let k = 0; k < s.length; k++){
    resArray[k] = 0;
}
for(let i=0;i<s.length;i++){
    for(let j=0;j<=i;j++){
        let str = s.substring(j,i+1);
        if(wordArray.includes(str)){
            if(j>0){ 
            resArray[i] = resArray[i] + resArray[j-1];
            } else{
            resArray[i] = resArray[i] + 1;
            }
        }
    }
}
return resArray[resArray.length-1]>0;
}

/*
Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
number and return it.
Note return the result in the form of string
Example 1:
Input: nums = [10,2]
Output: "210"
Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330"
*/
function largest(nums){
    if(nums.length<2){
        return `${nums[0]}`
    }
    nums.sort((a,b)=>{
       return (`${b}`+`${a}`)-(`${a}`+`${b}`)
    })
    if(nums[0]===0){
        return "0"
    }
    return nums.join("");
}

/*
Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
Note - Do not use any sorting algorithm or library's sort method
Example-1:
Input: nums = [10,4,12,9,87,34], K = 2
Output: 34
*/
function Kth_largest(nums,k){
       
    let minValue = Number.MAX_VALUE;
    
    let maxValue= Number.MIN_VALUE;
    for (let num of nums) {
        minValue =Math.min(minValue,num);
        maxValue = Math.max(maxValue,num);
    }
    let count =new Array(maxValue-minValue+ 1).fill(0);
    for (let num of nums) {
        count[num-minValue]++;
    }
     let remain = k;
    for (let num =count.length-1; num>= 0; num--) {
        remain =remain-count[num];
        if (remain<= 0) {
            return num +minValue;
        }
    }
    
}
