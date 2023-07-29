//1.Given an array of integers, rearrange the elements in a way that all the even numbers come before the odd numbers.

function rearrangeEvenOdd(nums) {
  const eveNumbers = [];
  const oddNumbers = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      eveNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }
  return eveNumbers.concat(oddNumbers);
}

const arr = [5, 3, 9, 2, 7];
console.log("original array:", arr);
const rearrangedArr = rearrangeEvenOdd(arr);
console.log("Rearranges array:", rearrangedArr);

//2.Write a function to find the missing number in an array of integers from 1 to N.

function findMissingNumber(arr, N) {
  const expectedSum = (N * (N + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}
const N = 10;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const missingNumber = findMissingNumber(array, N);
console.log("The missing number is:", missingNumber);

//3. Given a string with parentheses, check if it is balanced (each opening parenthesis has a corresponding closing parenthesis).

function isBalancedParentheses(str) {
  const stack = [];
  const openingBrackets = "({[";
  const closingBrackets = ")}]";

  for (let char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const matchingOpening = openingBrackets[closingBrackets.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== matchingOpening) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
const balancedString = "{(a + b) * [c - d]}";
const unbalancedString = "[(a + b) * (c - d])";

console.log(isBalancedParentheses(balancedString));
console.log(isBalancedParentheses(unbalancedString));

//4. Implement a function to convert a decimal number to its binary representation.

function decimalToBinary(decimalNumber) {
  if (decimalNumber === 0) {
    return "0";
  }
  let binary = "";
  while (decimalNumber > 0) {
    const remainder = decimalNumber % 2;
    binary = remainder + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  return binary;
}
const decimalNumber = 42;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(
  `Binary representation of ${decimalNumber} is: ${binaryRepresentation}`
);

//5. Implement a function that returns the longest word in a sentence.

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log("The longest word is:", longestWord);

//9.Write a function that generates all possible combinations of a given string.

function generateCombinations(str) {
  const result = [];
  function backtrack(combination, index) {
    result.push(combination);
    for (let i = index; i < str.length; i++) {
      const char = str[i];
      backtrack(combination + char, i + 1);
      backtrack(combination, i + 1);
    }
  }

  backtrack("", 0);
  return result;
}
const inputString = "abc";
const combinations = generateCombinations(inputString);
console.log("All possible combinations:", combinations);
