/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
/*
I: integer
O: factorial integer
C: works for non-negative integers; must use recursion
E: if n < 0 return null
*/
var factorial = function(n) {
  // Edge case
  if (n < 0) {
    return null;
  }
  // Base case is n = 1;
  if (n === 0) {
    return 1;
  }
    // If n = 1
      // return 1
  // Use recursion
  // return n * factorial n-1
  return n * factorial(n - 1);

};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
/*
I: array of ints
O: sum integer
C: Use recursion
E: return zero for empty array
*/
var sum = function(array) {
  // Create a copy of the array
  var copy = array.slice();
  // if array.length === 0
  if (copy.length === 0) {
    return 0;
  }
    // return zero
  // create current integer variable with .pop
  var currentInt = copy.pop();
  // return recursive call add currentInt to sum of copy arry
  return currentInt + sum(copy);

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
/*
I: Array of nested arrays with integers inside
O: integer sum
C: Use recursion
E:
*/
var arraySum = function(array) {
  // Create copy array
  var copy = array.slice();
  // If copy length is zero
  if (copy.length === 0) {
    // return zero
    return 0;
  }
  // create currentElement variable equal to copy.pop
  var currentElement = copy.pop();
  // if current element is an array
  if (Array.isArray(currentElement)) {
    // set it equal to array sum called on it
    currentElement = arraySum(currentElement);
  }
  // return current element added to arraySum on copy
  return currentElement + arraySum(copy);


};
// 4. Check if a number is even.
/*
I: Integer
O: Boolean
C: Use Recursion
E:
*/
var isEven = function(n) {
  var stringN = n.toString().split().pop('');
  n = parseInt(stringN);
  n = Math.abs(n);
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false
  }
  n -= 2
  return isEven(n)
};


// 5. Sum all integers below a given integer.

// sumBelow(10); // 45
// sumBelow(7); // 21
/*
I: integer
O: integer sum
C: Use recursion
E:
*/
var sumBelow = function(n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  if (n > 0) {
    n = n - 1;
    return n + sumBelow(n);
  } else {
    n = n + 1;
    return n + sumBelow(n)
  }
};


// 6. Get the integers within a range (x, y).
// range(2, 5); // [3,4,5,6,7,8]
/*
I: two integers
O: array of numbers within the range
C: Use recursion
E: Starting integer greater than second int, negative integers
*/
// var range = function(x, y) {
//   var result = [];
//   if (x < y) {
//     var lower = x;
//     var higher = y;
//   } else if (y < x) {
//     var lower = y;
//     var higher = x;
//   }
//   if (x !== y && lower !== (higher - 1)) {
//     result = [lower + 1];
//     return result.concat(range(lower + 1, higher));
//   }
//   return result;
// };

var range = function(x, y) {
  var result = [];
  if (x !== y) {
    if (x < y) {
      if (x !== (y - 1)) {
        result = [x + 1];
        return result.concat(range(x + 1, y));
      }
    } else if (x > y) {
      if (x !== (y + 1)) {
        result = [x - 1];
        return result.concat(range(x - 1, y));
      }
    }
  }
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
/*
I: base number and exponent
O: Number
C:
E: Positive vs negative exponent
For negative exponents, put base in denominator
*/
var exponent = function(base, exp) {
  // Create total variable equal to one
  var result = 1;
  // If exponent is not zero
  if (exp !== 0) {
  //  If exponent is even
    // if (exp % 2 === 0) {
    //   result = (base * exponent(base, exp / 2)) * 2;
    // }
    if (exp > 0) {
      result = base * exponent(base, exp - 1);
    }
    if (exp < 0) {
      result = 1 / (base * exponent(base, -exp - 1));
    }
  }
  return result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
/*
I: integer
O: Boolean
C:
E: if n is zero, return false; if n is 1 return true
*/
var powerOfTwo = function(n) {
  if (n === 1 || n === 2) {
    return true;
  } else if (n % 2 === 1 || n === 0) {
   return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
/*
I: string
O: string reversed
C:
E:
*/
var reverse = function(string) {
  if (string.length === 0) {
  return '';
  }
  var newString = string.slice(0, string.length - 1);
  return string.slice(string.length - 1) + reverse(newString);
};

// 10. Write a function that determines if a string is a palindrome.
/*
I: string
O: boolean
C:
E: Ignore captital letters - set equal to lowerCase; allow spaces, empty string
   Return true if string length equals 1
*/
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string.length === 1 || string.length === 0) {
    return true;
  }
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  string = string.slice(1, string.length - 1);
  return palindrome(string);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
/*
I: 2 integers
O: number
C:
E:
*/
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  }
  if (x === y || x === -y) {
    return 0;
  }
  if (x > 0 && y > 0) {
    if (x < y) {
      return x;
    }
    return modulo(x - y, y);
  } else if (x < 0) {
    if (y > 0) {
      if (x > -y) {
        return x;
      }
      return modulo(x + y, y);
    } else if (y < 0) {
      if (x > y) {
        return x;
      }
      return modulo(x - y, y);
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
/*
I: 2 integers, positive or negative
O: Number
C:
E: If either number is zero, return zero
*/
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x > 0) {
    if (y > 0) {
      return y + multiply(x - 1, y);
    }
    if (y < 0) {
      return y + multiply(x - 1, y);
    }
  } else if (x < 0) {
    if (y > 0) {
      return x + multiply(x, y - 1);
    }
    if (y < 0) {
      return -x + multiply(-x, -y - 1);
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
/*
I: Two numbers
O: number answer
C: Don't use / divider or math methods; ignore decimal endings
E: If one number is negative; if both are negative; x is zero or y is zero


*/
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  var result = 0;
  if (x < 0 && y > 0) {
    if (x <= -y) {
      result--;
      result += divide(x +y, y);
    }
  } else if (x > 0 && y < 0) {
    if (x >= -y) {
    result --;
    result += divide(x + y, y);
    }
  } else if (x < 0 && y < 0) {
    if (x <= y) {
      result++;
      result += divide(x - y, y);
    }
  } else {
    if (x >= y) {
      result++;
      result += divide(x - y, y);
  }
}
  return result;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
/*
I: 2 positive ints
O: GCD (integer)
C:
E: Same number - would be returning the number, 0? 


*/
// var gcd = function(x, y, divisor) {
//   if (x < 0 || y < 0) return null;
//   if (x === 0 || y === 0) {
//     return 0
//   } else if (x === 1 || y === 1) return 1
//   debugger;
//   divisor = divisor || Math.min(x, y);
//   if ((x % divisor === 0) && (y % divisor === 0)) {
//     return divisor
//   } else {
//     return gcd(x, y, divisor - 1)
//   }
// };
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
/*
I: 2 strings
O: Boolean
C:
E:
*/

var compareStr = function(str1, str2) {
  // if string1[0] & str2[0] are null return true
  if (str1 === '' && str2 === '') return true;
  if (str1 === '' && str2 !== '') return false;
  if (str1 !== '' && str2 === '') return false;
  return compareStr(str1.slice(1), str2.slice(1))
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
/*
I: string
O: array of letters
C:
E:
'bee'
[b]
*/
var createArray = function(str) {
  if (str === '') return []
  let arr = [str[0]];

  return arr.concat(createArray(str.slice(1)))
};

// 17. Reverse the order of an array
/*
I: array
O: reversed array
C:
E:
*/
var reverseArr = function(array) {
  if (array.length === 0) return [];
  let newArray = [array.at(-1)];
  return newArray.concat(reverseArr(array.slice(0, array.length -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) return [];
  let arr = [value];
  return arr.concat(buildList(value, length -1))
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
/*
I: integer
O: array of string representations of 1 to n
C:
E:
*/
var fizzBuzz = function(n) {
  let current = n.toString();
  if (n === 0) return [];
  if (n % 3 === 0 && n % 5 === 0) {
    current = 'FizzBuzz';
  } else if (n % 3 === 0) {
    current = 'Fizz';
  } else if (n % 5 === 0) current = 'Buzz';

  return fizzBuzz(n-1).concat([current])
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
/*
I: 
O: 
C:
E:
*/
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
/*
I: 
O: 
C:
E:
*/
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
/*
I: Object of values and nested object values
O: number
C: Use recursion
E:
Stop recursing when at the end of my object, and when the value is not an object
*/
var countKeysInObj = function(obj, targetKey) {
  // Create total variable set to zero
  var total = 0;
  if (typeof obj === 'object') {
     // Iterate over keys with a for in loop
    for (var key in obj) {
    //  If key is equal to target
      if (key === targetKey) {
    //    Add one to total
        total++;
      }
    //    Set total plus equal to using countKeysInObj on value
      total += countKeysInObj(obj[key], targetKey);
    //
    }
  }
  // Return total
  return total;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
/*
I: Object of values and nested object values
O: number
C: Use recursion
E:
*/
var countValuesInObj = function(obj, value) {
  var total = 0;
  if (typeof obj === 'object') {
    // Iterate with a for in loop
    for (var key in obj) {
      if (obj[key] === value) {
        total++;
      }
      // create current element variable
      var currentElement = obj[key];
      // if value is an object,

        //use recursion
      total += countValuesInObj(currentElement, value);
    }
  }
  return total;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
/*
I: Object possiblly with nested objects, target key, new key values
O: Object mutated
C: Use recursion
E:
*/
var replaceKeysInObj = function(obj, oldKey, newKey) {
  // Iterate over object with for in loop
  for (var key in obj) {
  //   If value is an object
    if (typeof obj[key] === 'object') {
  //     Call replaceKeysInObj on the value
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  //   Check if obj key is equal to old key
    if (key === oldKey) {
  //     If yes, set newKey equal to oldKey value
  //     Delete old key
      obj[newKey] = obj[key];
      delete obj[key];
    }
  }
  // Return obj
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
/*
I: 
O: 
C:
E:
*/
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
/*
I: 
O: 
C:
E:
*/
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
/*
I: 
O: 
C:
E:
*/
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
/*
I: 
O: 
C:
E:
*/
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
/*
I: 
O: 
C:
E:
*/
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
/*
I: 
O: 
C:
E:
*/
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
/*
I: 
O: 
C:
E:
*/
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
/*
I: 
O: 
C:
E:
*/
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
/*
I: 
O: 
C:
E:
*/
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
/*
I: 
O: 
C:
E:
*/
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
/*
I: 
O: 
C:
E:
*/
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
/*
I: 
O: 
C:
E:
*/
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
/*
I: 
O: 
C:
E:
*/
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
/*
I: 
O: 
C:
E:
*/
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
/*
I: 
O: 
C:
E:
*/
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
/*
I: 
O: 
C:
E:
*/
var clone = function(input) {
};
