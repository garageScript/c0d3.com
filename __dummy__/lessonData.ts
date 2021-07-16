import { Lesson } from '../graphql'

const dummyLessonsData: Lesson[] = [
  {
    id: 5,
    title: 'Foundations of JavaScript',
    description: 'A super simple introduction to help you get started!',
    docUrl:
      'https://www.notion.so/garagescript/JS-0-Foundations-a43ca620e54945b2b620bcda5f3cf672',
    githubUrl: '',
    videoUrl:
      'https://www.youtube.com/watch?v=H-eqRQo8KoI&list=PLKmS5c0UNZmewGBWlz0l9GZwh3bV8Rlc7&index=1',
    order: 0,
    challenges: [
      {
        id: 107,
        title: 'Sum of 2 Numbers',
        description:
          "Write a function that takes in 2 numbers and returns their sum.\n\nHere's how another developer might use your function:\n\n```\nsolution(5,9) // Should return 14\nsolution(4,1) // Should return 5\n```",
        order: 1,
        lessonId: 5
      },
      {
        id: 108,
        title: 'Sum of 3 Numbers',
        description:
          "Write a function that takes in 3 numbers and returns their sum.\n\nHere's how another developer might use your function:\n\n```\nsolution(5,9,2) // Should return 16\nsolution(4,1,9) // Should return 14\n```",
        order: 2,
        lessonId: 5
      },
      {
        id: 105,
        title: 'Greater than 5',
        description:
          "Write a function that takes in a number and returns true if that number is greater than 5. Otherwise, return false.\n\nHere's how another developer might use your function:\n\n```\nsolution(9) // Should return true\nsolution(4) // Should return false\n```",
        order: 3,
        lessonId: 5
      },
      {
        id: 127,
        title: 'Biggest Num out of 2',
        description:
          "Write a function that takes in 2 numbers and return the largest out of them.\n\nHere's how another developer might use your function:\n\n```\nsolution(5,9) // Should return 9\nsolution(4,1) // Should return 4\n```",
        order: 4,
        lessonId: 5
      },
      {
        id: 106,
        title: 'Biggest Num Out of 3',
        description:
          "Write a function that takes in 3 numbers and return the largest out of them.\n\n\nHere's how another developer might use your function:\n\n```\nsolution(5,9,14) // Should return 14\nsolution(4,5,1) // Should return 5\n```",
        order: 5,
        lessonId: 5
      },
      {
        id: 109,
        title: 'Is First Num Bigger',
        description:
          "Write a function that takes in 2 numbers and returns true if the first number is greater than the second, false otherwise.\n\nHere's how another developer might use your function:\n\n```\nsolution(5,9) // Should return false\nsolution(4,1) // Should return true\n```",
        order: 6,
        lessonId: 5
      },
      {
        id: 110,
        title: 'Is Sum > 10',
        description:
          "Write a function that takes in 2 numbers and returns true if their sum is greater than 10.\n\nHere's how another developer might use your function:\n\n```\nsolution(5,9) // Should return true\nsolution(4,1) // Should return false\n```",
        order: 7,
        lessonId: 5
      },
      {
        id: 101,
        title: 'Functional Sum',
        description:
          'Takes in 2 numbers, return a function that returns the sum when the function is called \n\nExample:\n\n```\nconst a = solution(5,6) // a is a function, and a() will return 11\n```',
        order: 8,
        lessonId: 5
      },
      {
        id: 102,
        title: 'Functional 3 Sum',
        description:
          'Write a function that takes in 2 numbers, return a function that takes in a number that returns the sum of all 3 numbers when called. \nExample:\n\n``` \nconst a = solution(1,2); // a is a function\n// a(1) returns 4 because 1+2+1\n// a(5) returns 8 because 1 + 2 + 5 \n// a(2) returns 5 because 1 + 2 + 2\n```',
        order: 9,
        lessonId: 5
      },
      {
        id: 104,
        title: 'Functional Sums',
        description:
          'Write a function that takes in 2 functions and returns the sum of the result of the 2 functions\nExample:\n\n```\nconst a = () => {  return 5; }\nconst b = () => {  return 6; }\nconst c = solution(a, b) // c should be 11 because a() + b()\n```',
        order: 10,
        lessonId: 5
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js1-variablesfunction'
  },
  {
    id: 2,
    title: 'Variables & Functions',
    description:
      'Learn how to solve simple algorithm problems recursively with the following exercises. ',
    docUrl:
      'https://www.notion.so/garagescript/JS-1-Functions-01dd8400b85f40d083966908acbfa184',
    githubUrl: 'https://git.c0d3.com/song/curriculum',
    videoUrl:
      'https://www.youtube.com/watch?v=H-eqRQo8KoI&list=PLKmS5c0UNZmewGBWlz0l9GZwh3bV8Rlc7&index=1',
    order: 1,
    challenges: [
      {
        id: 146,
        title: 'Incremental Closure',
        description:
          'Write a function called solution that takes in a number and returns a function. \n\nwhenever the returned function is called, the next incremental number will be returned\n\nExample:\n\n``` \nlet resf = solution(5)\nresult = resf() // 6\nresult = resf() // 7\n\nresf = solution(-5)\nresult = resf() // -4\nresult = resf() // -3\n```',
        order: 1,
        lessonId: 2
      },
      {
        id: 145,
        title: 'Closure x times',
        description:
          'Write a function called solution that takes in 2 parameters, a number and a function, and returns a function\n\nThe returned function can only be called the input number of times.\n\nWhenever the returned function is called, it returns whatever the input function returns.  \nAfter the returned function has been called up to the first parameter number of times, calling returned function will always return null.  \n\n```\nresf = solution(3, () => {\n  return "hello"\n})\nresult = resf() // "hello"\nresult = resf() // "hello"\nresult = resf() // "hello"\nresult = resf() // null\n...\nresult = resf() // null\n\nresf = solution(1, () => {\n  return 100\n})\nresult = resf() // 100\nresult = resf() // null\n...\nresult = resf() // null\n```',
        order: 2,
        lessonId: 2
      },
      {
        id: 143,
        title: 'Repeated String',
        description:
          'Write a function called solution that takes in 2 parameters, a number and string and returns the string repeated input parameter number of times\n\n```\nresult = solution(3, "abc") // "abcabcabc"\nresult = solution(0, "hello") // ""\n```\n\nReminder for students with prior experience: you are not allowed to use `for` and `while` loops. [Reason](https://www.notion.so/garagescript/Recursion-973993e8ed144d8a87cb5695fd1ea8b1)',
        order: 3,
        lessonId: 2
      },
      {
        id: 82,
        title: 'Calling input function',
        description:
          'Write a function called solution that takes in a function. \n\nThe function will be called with increasing indexes (starting from 0) until the function returns false\n\n```\nsolution((e) => {\n  // this function will be run 7 times with e: 0,1,2,3,4,5,6\n  return e < 6\n})\n\nsolution((e) => {\n  // this function will be run 1 time with e: 0\n  return false\n})\n\ncounter = solution((e) => {\n  // this function will be run 3 times with e: 0,1,2\n  return e < 3\n})\n```\n\nReminder for students with prior experience: you are not allowed to use `for` and `while` loops. [Reason](https://www.notion.so/garagescript/Recursion-973993e8ed144d8a87cb5695fd1ea8b1)',
        order: 4,
        lessonId: 2
      },
      {
        id: 79,
        title: 'Call function X Times',
        description:
          "Write a function called solution that takes in 2 parameters, a number X and a function, and calls the function X number of times and then returns null.\n\nBasically, `solution` should run the user provided function X times.\n\n```\nsolution(88, () => { console.log('hello') }) // 'hello' should be printed out 88 times.\n\nsolution(9, () => { alert('hello') }) // alert('hello') should be ran 9 times.\n```\n\nReminder for students with prior experience: you are not allowed to use `for` and `while` loops. [Reason](https://www.notion.so/garagescript/Recursion-973993e8ed144d8a87cb5695fd1ea8b1)",
        order: 5,
        lessonId: 2
      },
      {
        id: 80,
        title: 'isPrime',
        description:
          "Write a function called solution that takes in a number and returns true if it's prime, false otherwise. \n\nA prime number is a number that is greater than 1, and not divisible by any number other than itself. \n\nThere are a number of approaches to do this, but the simplest is to start a number `i` at 2, and keep using `%` to check if the input number is divisible by i.\n\n```\nresult = solution(2) // true\nresult = solution(1) // false\nresult = solution(8) // false\nresult = solution(13) // true\n```\n\nReminder for students with prior experience: you are not allowed to use `for` and `while` loops. [Reason](https://www.notion.so/garagescript/Recursion-973993e8ed144d8a87cb5695fd1ea8b1)",
        order: 6,
        lessonId: 2
      },
      {
        id: 83,
        title: 'Letter Find',
        description:
          "Write a function called solution that takes in 2 parameters, a string and a letter, and returns true if the character exists in the string, false if the character does not exist in the string. \n\n```\nresult = solution('abc', 'a') // true\nresult = solution('abc', 'd') // false\n```\n\nReminder for students with prior experience: you are not allowed to use `for` and `while` loops. [Reason](https://www.notion.so/garagescript/Recursion-973993e8ed144d8a87cb5695fd1ea8b1)",
        order: 7,
        lessonId: 2
      },
      {
        id: 76,
        title: 'Letter Count',
        description:
          "Write a function called solution that takes in 2 parameters, a string and a letter, and returns the number of times the character shows up in the string\n\n```\nresult = solution('abc', 'a') // 1\nresult = solution('bccbccb', 'b') // 3\n```\n\nReminder for students with prior experience: you are not allowed to use `for` and `while` loops. [Reason](https://www.notion.so/garagescript/Recursion-973993e8ed144d8a87cb5695fd1ea8b1)",
        order: 8,
        lessonId: 2
      },
      {
        id: 77,
        title: 'Letter Map',
        description:
          "Write a function called solution that takes in 2 parameters, a string and a function, and returns combined result of the function being called with every character in the string.\n\n```\nfun = (e) => {\n  return '9'\n}\nresult = solution('hello', fun) // \"99999\"\n\nfun = (e) => {\n  return e + '123'\n}\nresult = solution('blah', fun) // \"b123l123a123h123\"\n```\n\nReminder for students with prior experience: you are not allowed to use `for` and `while` loops. [Reason](https://www.notion.so/garagescript/Recursion-973993e8ed144d8a87cb5695fd1ea8b1)",
        order: 9,
        lessonId: 2
      },
      {
        id: 144,
        title: 'Letter Loop',
        description:
          "Write a function called solution that takes in 2 parameters, a string and a function, and returns a function.\n\n1. When the returned function is called for the first time, the input function will be called with the first character of the string.\n\n2. When the returned function is called for the second time, the input function will be called with the second character of the string.\n\nAfter the input function is called with the last character of the string, calling the returned function will repeat #1, then #2, etc.\n\n```\nfun = solution('hel2', (e) => {\n  console.log(e)\n})\nfun() // prints-> 'h'\nfun() // prints-> 'e'\nfun() // prints-> 'l'\nfun() // prints-> '2'\nfun() // prints-> 'h'\nfun() // prints-> 'e'\n```",
        order: 10,
        lessonId: 2
      },
      {
        id: 201,
        title: 'Delayed Closure',
        description:
          "Write a function called solution takes in 2 parameters, a number and a function, and returns a function.\n\nWhen the returned function is called, the input function will execute after input number milliseconds.\n\n```\nfun = solution(1800, (e) => {\n  console.log('hello')\n})\nfun() // 'hello' will be printed out 1800ms after this function is called\nfun() // 'hello' will be printed out 1800ms after this function is called\n```",
        order: 11,
        lessonId: 2
      },
      {
        id: 200,
        title: 'Delay 1 and 2',
        description:
          "Write a function called solution that takes in 2 parameters, a number and a function. \n\n1. solution should execute the input function (which returns a number) after first input parameter milliseconds. \n2. The input function should be run again after waiting the returned number of milliseconds\n\n```\nsolution(2000, () => {\n  // This function will be run 2000ms after solution is called,\n  //   and after that, it will be run after another 3000ms\n  console.log('hello')\n  return 3000\n})\n```",
        order: 12,
        lessonId: 2
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js2-arrays'
  },
  {
    id: 1,
    title: 'Arrays',
    description:
      'These exercises will help you gain a better understanding of what it means for a data structure to be non-primitive.',
    docUrl:
      'https://www.notion.so/garagescript/JS-2-Arrays-8601f89c64164f188286df7b1e6d0ad9',
    githubUrl:
      'https://github.com/garageScript/curriculum/tree/master/curriculum/js2',
    videoUrl:
      'https://www.youtube.com/watch?v=rem796-hPY8&index=3&list=PLKmS5c0UNZmewGBWlz0l9GZwh3bV8Rlc7',
    order: 2,
    challenges: [
      {
        id: 84,
        title: 'Array Generator',
        description:
          'Write a function called solution that takes in a number and returns an array with the length equal to the input number.\n\nEvery element in the array must numbered with the correct index: 0,1,2,3,4...\n\n```\nsolution(5) // returns [0,1,2,3,4]\nsolution(3) // returns [0,1,2]\n```',
        order: 1,
        lessonId: 1
      },
      {
        id: 85,
        title: 'Array Callback Generator',
        description:
          'Write a function called solution that takes in a function and returns an array. \n\nAs long as the input function returns false, array keeps growing with the index.\n\n```\nsolution((e) => {\n  return e > 10\n}) // returns [0,1,2,3,4,5,6,7,8,9,10]\n\nsolution((e) => {\n  return true\n}) // returns []\n\nsolution((e) => {\n  return e % 7 === 0 && e !== 0\n}) // returns [0,1,2,3,4,5,6]\n```',
        order: 2,
        lessonId: 1
      },
      {
        id: 86,
        title: '2D Array Generator',
        description:
          'Write a function called solution that takes in 2 numbers and returns an array with the length equal to the first input number\n\nEvery element in the array is an array that is equal to the length of the second input number. All values in the array is 0.\n\n```\nsolution(5,2) // returns [[0,0], [0,0], [0,0], [0,0], [0,0]]\nsolution(3, 3) // returns: [ [0,0,0], [0,0,0], [0,0,0] ]\n```',
        order: 3,
        lessonId: 1
      },
      {
        id: 87,
        title: 'Closure iterator',
        description:
          'Write a function called `solution` that does the following: \n\n```\nresf = solution([5,2,1,3], (e) => {\n  return e+1\n})\nresf() // returns 6\nresf() // returns 3\nresf() // returns 2\nresf() // returns 4\nresf() // returns 6\n\nresf = solution(["hello", "what", "a", "day"], (e) => {\n  if (e.length < 2) return ""\n  return e\n})\nresf() // returns "hello"\nresf() // returns "what"\nresf() // returns ""\nresf() // returns "day"\nresf() // returns "hello"\nresf() // returns "what"\n...\n```',
        order: 4,
        lessonId: 1
      },
      {
        id: 88,
        title: 'Delayed function calls',
        description:
          "Write a function called solution that takes in an array of functions and a number, and calls every function input milliseconds later\n\n```\nconst func = () => {\n  console.log('hello')\n}\nsolution([func,func,func], 300) \n// console.log('hello') will be run 3 times, after 300ms\n```",
        order: 5,
        lessonId: 1
      },
      {
        id: 89,
        title: 'Sequential delayed function calls',
        description:
          "Write a function called solution that that takes in an array of functions and a number, and calls each function input milliseconds after another\n\n```\nconst func = () => {\n  console.log('hello')\n}\nsolution([func,func,func], 300) \n// console.log('hello') will be run after 300ms\n// console.log('hello') will be run after 300ms\n// console.log('hello') will be run after 300ms\n```",
        order: 6,
        lessonId: 1
      },
      {
        id: 90,
        title: 'cForEach',
        description:
          'Write a function called solution that replicates Array.prototype.forEach and call it cForEach\n\nCallback takes 3 input parameters, element, index and original array.\n[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)\n\n```\n[5,8,7].cForEach( (e, i, arr) => {\n  console.log(e, i, arr)\n})\n// console.log will be called 3 times:\n//    5, 0, original array\n//    8, 1, original array\n//    7, 2, original array\n```',
        order: 7,
        lessonId: 1
      },
      {
        id: 130,
        title: 'cMap',
        description:
          'Write a function called solution that replicates Array.prototype.map function and call it cMap\n\nCallback takes 3 input parameters, element, index and original array. \n[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)\n\n```\nresult = [5,8,7].cMap( (e, i, arr) => {\n  console.log(e, i, arr)\n  return e + i\n})\n// console.log will be called 3 times:\n//    5, 0, original array\n//    8, 1, original array\n//    7, 2, original array\n// result will be [5, 9, 9]\n```',
        order: 8,
        lessonId: 1
      },
      {
        id: 129,
        title: 'cReduce',
        description:
          "Write a function called solution that replicates Array.prototype.reduce and call it cReduce.\n\nCallback takes 4 input parameters, accumulator, element, index and original array. \n[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)\n\n```\nresult = [5,8,7].cReduce( (acc, e, i, arr) => {\n  console.log(acc, e, i, arr)\n  return acc + e + i\n}, 'hi')\n// console.log will be called 3 times:\n//    'hi', 5, 0, original array\n//    'hi50', 8, 1, original array\n//    'hi5081', 7, 2, original array\n// result will be 'hi508172'\n```\n\nIt is best practice to pass in 2 arguments into `reduce` function. Therefore, for this challenge, you can assume that when your function, `cReduce`, will always be called with 2 arguments: a function and initial value.",
        order: 9,
        lessonId: 1
      },
      {
        id: 131,
        title: 'cFilter',
        description:
          'Write a function called solution that replicates Array.prototype.filter and call it cFilter.\n\nCallback takes 3 input parameters, element, index and original array. \n[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)\n\n```\nresult = [5,8,7,6,9].cFilter( (e, i, arr) => {\n  console.log(e, i, arr)\n  return e % 2 === 0\n})\n// console.log will be called 5 times:\n//    5, 0, original array\n//    8, 1, original array\n//    7, 2, original array\n//    6, 3, original array\n//    9, 4, original array\n// result will be [8,6]\n```',
        order: 10,
        lessonId: 1
      },
      {
        id: 171,
        title: 'cFind',
        description:
          'Write a function called solution that replicates Array.prototype.find and call it cFind.\n\nCallback takes 3 input parameters, element, index and original array. \n[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)\n\n```\nresult = [5,8,7].cFind( (e, i, arr) => {\n  console.log(e, i, arr)\n  return e % 2 === 0\n})\n// console.log will be called 2 times:\n//    5, 0, original array\n//    8, 1, original array\n// result will be 8\n```',
        order: 11,
        lessonId: 1
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js3-objects'
  },
  {
    id: 4,
    title: 'Objects',
    description:
      'These exercises will test your understanding of objects, which includes linked lists and trees',
    docUrl:
      'https://www.notion.so/garagescript/JS-3-Objects-3df846eaf0404fe6b012208773063a04',
    githubUrl:
      'https://github.com/garageScript/curriculum/tree/master/curriculum/js3',
    videoUrl:
      'https://www.youtube.com/watch?v=Npn275pNXYw&index=4&list=PLKmS5c0UNZmewGBWlz0l9GZwh3bV8Rlc7',
    order: 3,
    challenges: [
      {
        id: 91,
        title: 'Return array of values',
        description:
          "Given an array of strings (keys) and object, return a new array of values using the given array elements as keys to access the given object. \n\n```\nsolution(['123', 'abc'], {123: 'hi', 345: 'world', abc: 'world'});\n// will return ['hi', 'world']\n```",
        order: 1,
        lessonId: 4
      },
      {
        id: 92,
        title: 'Create 2d Array of Objects',
        description:
          'Given 2 integers, create 2d arrays of objects. First integer represents the amount of nested arrays, 2nd integer represents the amount of objects within each nested array.\n\n```\nsolution(3,2)\n// will return the following:\n[\n    [{x: 0, y:0}, {x:1, y: 0}],\n    [{x: 0, y: 1}, {x:1, y: 1}],\n    [{x: 0, y: 2}, {x:1, y: 2}],\n]\n\nsolution(99,2)\n// will return the following:\n[\n    [{x: 0, y:0}, {x:1, y: 0}],\n    [{x: 0, y: 1}, {x:1, y: 1}],\n    [{x: 0, y: 2}, {x:1, y: 2}],\n    ...\n    [{x: 0, y: 98}, {x:1, y: 98}],\n]\n```',
        order: 2,
        lessonId: 4
      },
      {
        id: 96,
        title: 'Return function from array of strings',
        description:
          "Write a function called solution that takes in an array of strings and returns a function.\n\nreturned function will return an object with only keys that exist in the input array.\n\n```\nconst resp = solution(['apollo', 'bella', 'cinderella'])\nconsole.log(resp({'apple': 25, 'apollo': 45, 'cindy': 84}))\n// will console.log this object: {\"apollo\": 45}\n\nconsole.log(resp({orange: 80, 'apollo': 95}))\n// will console.log this object: {'apollo': 95}\n\nconsole.log(resp({iron: 'man', billy: 'joel'}))\n// will console.log this object: {}\n```",
        order: 3,
        lessonId: 4
      },
      {
        id: 94,
        title: '2 sum',
        description:
          'Write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (The numbers in the array is not unique, meaning there may be duplicate numbers)\n\n```\nsolution([1,2,22,333,23], 25)   // returns true\nsolution([1,2,22,333,23], 24)   // returns true\n```',
        order: 4,
        lessonId: 4
      },
      {
        id: 93,
        title: 'Function call between Objects',
        description:
          'Given object of key-string values and an object of key - function values, call the functions in 2nd object (if possible) using the values in 1st object as function params. Return new object.\n\n```javascript\nsolution ({\n   "name": "drake",\n   "age": "33",\n   "power": \'finessing\',\n   "color": "platinum"\n}, {\n   "name": (e) => { return e + "kendrick" },\n   "power": (e) => { return "motivating" + e }\n});\n\n// will return : \n   {\n      "name": "drakekendrick",\n      "age": "33",\n      "power": "motivatingfinessing",\n      "color": "platinum"\n   }\n```',
        order: 5,
        lessonId: 4
      },
      {
        id: 95,
        title: 'Duplicate Numbers',
        description:
          'Write a function that takes in an array of numbers, and returns a new array of all duplicate numbers.\n\n```\nsolution([1, 2, 2, 3, 1])  // should return [1, 2]\nsolution([1, 1, 1, 1, 2, 3, 3])  // should return [1, 3]\n```\n',
        order: 6,
        lessonId: 4
      },
      {
        id: 97,
        title: 'Map Objects',
        description:
          "Write a map function for objects\n\n```\nconst info = {\n   ironman: 'arrogant',\n   spiderman: 'naive',\n   hulk: 'strong',\n}\nconst result = info.map( (key, value, i) => {\n   return key + i + value\n})\nconsole.log(result)\n\n// will print out ['ironman0arrogant', 'spiderman1naive', 'hulk2strong']\n```",
        order: 7,
        lessonId: 4
      },
      {
        id: 98,
        title: 'Call function values of an Object',
        description:
          'Write a function that takes in an object and a number (milli-seconds). \n\n   * you must call each function value of the object: \n     * Given an object: `{"nVal": (k) => {...}}`\n     * `{"nVal": (k) => {...When this function runs, k is "nVal"...}}`\n\n```\nconst a = {\n   "jayZ": (key) => console.log(key),\n   "tupac": (key) => console.log(key + 2),\n   "name3": (key) => console.log(key === "name3"),\n   "level": (key) => console.log(key + key + key)\n}\nsolution(a, 500)\n\n// should print out: \n"jayZ"\n... 500 millieseconds later...\n"tupac2"\n...500 millieseconds later...\n"true"\n...500 millieseconds later...\nlevellevellevel\n```',
        order: 8,
        lessonId: 4
      },
      {
        id: 99,
        title: 'Send a request',
        description:
          'Create a JavaScript file `9.js` so that when you run it with `node 9.js`, the computer will output an HTML file `9.html` that has displays each pokemon\'s name and image. There cannot be any JavaScript in the generated html file. \n\n1. Send a request to [https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/). \n2. Look at the response, you will notice that each pokemon has a url. You need to send another request for each pokemon to get the image url. It is located under `sprites` key of the object.\n3. Use the responses to create an HTML string to display the name and pokemon\'s image. \n4. Write the resulting string into a file using `fs.writeFile` \n\nThe `img` tag with the `src` attribute are instructions for the browser to get the image data from the url and display it. Put this tag into an html file to display a picture of a cat. \n\nExample: Put this tag into an html file to display a picture of the cat.\n```\n< img src="https://placekitten.com/g/200/300" />\n```',
        order: 9,
        lessonId: 4
      },
      {
        id: 100,
        title: 'Build this Pokemon Viewer',
        description:
          'Send a request to https://pokeapi.co/api/v2/pokemon/ and create [a Pokemon Viewer](https://songz.c0d3.com/js3/pokeview.html) . Have the viewer include previous and next buttons at the top of the page, and display 20 images and names of pokemon per page. ',
        order: 10,
        lessonId: 4
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js5-htmlcssjs'
  },
  {
    id: 24,
    title: 'Front End Engineering',
    description:
      'Create challenging front-end mini-projects and build an understanding of Web Development. Covers the last fundamental JavaScript concept: (Complex Objects)',
    docUrl:
      'https://www.notion.so/garagescript/JS-4-Front-End-Engineering-c59fbdd58dcc4214956f7856e0892b52',
    githubUrl: '',
    videoUrl: '',
    order: 4,
    challenges: [
      {
        id: 177,
        title: 'Smart Watch UI',
        description:
          'Create a smart watch UI. [Demo](https://c0d3.com/challenges/watch.html)\n\n1. To embed an iFrame of google maps, go to [google maps](https://www.google.com/maps) and search for a location. Then click on the hamburger menu on the left and select `share or embed map`. Copy the embed iframe code.\n\n2. The watch asset is located in [https://c0d3.com/challenges/assets/watch.jpg](https://c0d3.com/challenges/assets/watch.jpg). Watch image is `600x800` pixels, Font size for Time: `5em` with margin-top of `30px`. Day and date are simple `h2` tags.\n\n4. **Acceptance Criteria** Make sure to pick a specific location so the red marker shows up!\n  * When user clicks anywhere on the white background that has the time, the white background must slide up. On another click, it must slide back down and toggle back and forth based on user clicks.\n  * The info box (including direction and rating etc.) should not appear (because it doesn\'t fit the screen and it creates a bad user experience). The solution is pure css, you do not have to do anything with the iframe.\n  * When the page loads, the time must reflect the current time (does not have to update)\n\n5. Steps and Points:\n  * (20 points) Make a watch show up on the bottom left of the page.\n  * (20 points) Create a div that is positioned where the watch face is supposed to be.\n  * (30 points) Put in the map and the content that slides up and down when clicked.\n  * (30 points) Add in the JavaScript to get the correct date. \n\nSample Code:\n```\nconst d = new Date();\n["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()]; // Get Day\n["January", "February", "March", "April", "May", "June",\n"July", "August", "September", "October", "November", "December"][d.getMonth()]; // Get Month\n```',
        order: 1,
        lessonId: 24
      },
      {
        id: 178,
        title: 'Stars UI',
        description:
          'Create a file rating component. [Demo](https://c0d3.com/challenges/stars.html)  \n**Hint** If you notice the selected stars growing larger than the other stars, it is simply an effect of adding a 3px border so that when you apply a color you can still see the stars clearly. Css:\n```\n    -webkit-text-stroke-width: 3px;\n    -webkit-text-stroke-color: black;\n```\n\n* You need to add a free, open-source, font library called [font-awesome](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css). Add the css file from their cdn (content delivery network) or use [this stylesheet ](https://use.fontawesome.com/releases/v5.2.0/css/all.css) you should be able to create basic star icons with `<i class="far fa-star"></i>` and stuffed star icons with `<i class="fas fa-star"></i>`\n\n* **Acceptance Criteria** All stars mentioned here is an example. Please do not hardcode.\n  - Hover over the 4th star. Go straight down out of the div (so that all 4 stars are still selected). Go straight up on the 2nd star, then go straight down. Only stars 1 and 2 should be selected.\n  - Click on the 4th star. When you hover over the other stars (without leaving the div), the current selection should not change.\n  - Click on the 4th star. Then click on the 2nd star. Only stars 1 and 2 should be selected.\n  - Click on the 4th star. When you move mouse out of the stars container and move mouse back in, you should be able to resume selection as normal.\n\n* **Steps and Points** \n  - (10 points) Get 5 stars to show up on the HTML. \n  - (20 points) Create a class function for each star, replace 5 stars in step one (html) by creating an array of stars objects.\n  - (35 points) Add hover functionality to highlight the appropriate stars.\n  - (35 points) Solve click functionality and text.',
        order: 2,
        lessonId: 24
      },
      {
        id: 179,
        title: 'Google Fair',
        description:
          "Recreate a Google Doodle of the First World's Fair. [Demo](https://c0d3.com/challenges/fair.html)  \n\n* You are given three images: [Small Image](https://c0d3.com/challenges/assets/fair/small.jpg), [Large Image](https://c0d3.com/challenges/assets/fair/big.jpg), [Scope](https://c0d3.com/challenges/assets/fair/scope.png) to create the experience.\n\n* **Acceptance Criteria** is pretty straightforward.\n  - Recreate the demo experience, make sure the main functionality works.\n  - Image must be centered in the page.\n  - Make sure the area that is magnified is accurate to where the cursor is supposed to be.\n  - Make sure the cursor does not show up in the magnified experience because it creates a bad user experience.\n\n* **Steps and Points** \n  - (35 points) Get the small image to show, and a circular div that moves when the mouse is over the image.\n  - (50 points) Map the position of the mouse to the background position of the div and display magnified div.\n  - (15 points) Add scope image to the div.\n\n* **Hint**\n  - You need the `css` property `pointer-events: none;` on the scope so your mouse events go directly to the small image. Without it, your mouse movement may not be smooth and the scope may only update when your mouse moves out of the scope.",
        order: 3,
        lessonId: 24
      },
      {
        id: 158,
        title: 'Lights Off',
        description:
          'Create a simple game. [Demo](https://c0d3.com/challenges/lightsoff)  \n**Hint** The game starts with one light turned on. When you click on it, it toggles (therefore turning off), and its surrounding lights (up, down, left right) will also toggle. The game ends when all the lights are turned off.\n\n* **Acceptance Criteria**   \n  - You should detect when game is over (all lights are off).  \n  - At the end of the game, user should be able to input a new size for the board and replay the game.  \n\n* **Steps and Points** \n  - (40 points) Create a 2D array of Block objects that displays blocks on the page.\n  - (20 points) When block is clicked, trigger neighbors to toggle (if already lit up, then make it light off; if already lit off, then make it light up) (using the 2D array).\n  - (20 points) Add a check for game to be over.\n  - (20 points) Wrap code into a create game function.',
        order: 4,
        lessonId: 24
      },
      {
        id: 155,
        title: 'Kanban Board',
        description:
          'Create a task board with the following [css specs](https://c0d3.com/challenges/assets/kanban.png).  \n[Demo](https://c0d3.com/challenges/kanban)   \nMake sure to try out the undo functionality on the bottom right of the page.    \n\n* **Acceptance Criteria** This should be a fully functional KanBan board.\n  - Users should be able to add todos, click on each todo to have an option to delete it, and move items between boards.\n  - You should be storing todo list into localStorage so that when your users revisit the board, they will see their items.\n  - You should support an undo button so that users can undo their actions. Undo functionality does not have to persist between sessions. \n\n* **Steps and Points** \n  - (15 points) Create HTML (with sample todo) for the board.\n  - (15 points) Style your html elements to make sure your board is pixel perfect.\n  - (15 points) Convert your html into function objects, so that when submit is clicked todos are added.\n  - (20 points) Implement delete, right / left functionality.\n  - (20 points) Implement localStorage\n  - (15 points) Implement undo.',
        order: 5,
        lessonId: 24
      },
      {
        id: 156,
        title: 'Select or Snake',
        description:
          '* **Build a selection box**   \n![selection box gif](https://c0d3.com/images/selection-box.gif)\n\n* **Acceptance Criteria** \n  - Once you click and drag, area that the mouse covered turn grey, and boxes selected turn blue.\n  - Once you release the mouse, boxes selected stay blue and grey area disappear.\n\n* **Steps and Points (select)** \n  - (20 points) Create a box class and use that to create a 2D array to display a nxn box. (here you can have n=5)\n  - (40 points) Implement the coloring of the boxes as you drag.\n  - (40 points) Implement the grey area (with opacity) as you drag.\n\n**or**\n\n* **Create a simple snake&food game** [Demo](https://c0d3.com/challenges/snake)  \n**Hint** If you think about it, you need an object called block. A food is a block, a snake is made up of a chain of blocks (linkedList) . \n\n* **Acceptance Criteria**   \n  - You should detect when game is over (snake hit a wall or onto itself).  \n  - User should be able to change direction of the snake with arrow keys.  \n  - Use a linked list for efficiency  \n',
        order: 6,
        lessonId: 24
      },
      {
        id: 157,
        title: 'MineSweeper',
        description:
          'Create a game called MineSweeper [Demo](https://c0d3.com/challenges/mine)  \n\n* **Acceptance Criteria**   \n  - Generate a 10x10 board. There should be 10 bombs hidden within the board.  \n  - If user clicks on a bomb, they lose. If not, the box reveals a number. This number represents how many bombs there are in the 8 boxes surrounding it. (Therefore it is not possible to have a number greater than 8)\n  - If the revealed number is 0, reveal all 8 boxes around the 0. If any of the revealed boxes are also 0, reveal all the unrevealed 8 boxes around them and recursively continue.\n  - Users should be able to `ctrl+click` or right click on a box to flag it as a potential bomb, but they can still click on it  \n  - Game ends when all the non-bomb boxes are revealed.  \n  - At the end of the game, user should be able to replay the game.  \n\n* **Steps and Points** \n  - (15 points) Create a box class and use that to create a 2D array to display a nxn box.\n  - (15 points) Write a function that randomly makes n boxes with a bomb inside, and add logic to end the game once a bomb is clicked.\n  - (15 points) Write a function that returns the array of neighbors when you click on a non-bomb box, then display the number of bombs around that box.\n  - (25 points) Recursively call surrounding boxes when its count is 0.\n  - (15 points) Write function to check if user has won (number of revealed boxes + bombs) should equal nxn.\n  - (15 points) Polish (like control-click to label).',
        order: 7,
        lessonId: 24
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js4-endtoend'
  },
  {
    id: 3,
    title: 'End To End',
    description:
      'These exercises will help you build a strong understanding of how the web works.',
    docUrl:
      'https://www.notion.so/JS-5-System-Design-Theory-67e7ee647a1c429d8e60e82f13a8d286',
    githubUrl: '',
    videoUrl: '',
    order: 5,
    challenges: [
      {
        id: 73,
        title: 'IP Geolocation',
        description:
          '[Demo Link](https://js5.c0d3.com/location)\n\n1. Create a route `/visitors` that displays the google map of where your visitors are and a list of the cities and the count of visits to this page.\n2. Create a route `/api/visitors` that sends back a JSON of all the visitors that have visited your site. \n3. Make sure to use `x-forwarded-for` headers!\n\nUse the following API to get an estimate of where the user is coming from:  \n`https://js5.c0d3.com/location/api/ip/<Replace with an IP address you want to look up> `\n\nTo send a request from your server, you need to use a fetch library like [node-fetch](https://www.npmjs.com/package/node-fetch)\n\nIf you do not want to spend money creating your own Google Maps API key, use ours! Right the source code of the demo site and then copy the script from the code into your own project:\n\n```\n<script src="https://maps.googleapis.com....></script>\n```',
        order: 1,
        lessonId: 3
      },
      {
        id: 72,
        title: 'Commands',
        description:
          "[Demo Link](https://js5.c0d3.com/command.html)\n\n1. Create a route `/commands` that takes in an input box that lets you execute commands directly on your server. \n2. You must be able to see the response on the page. \n3. Use `exec` function from Node's [child_process library](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback). \n4. To protect your code from malicious users, you should only allow these commands: `ls`, `cat`, `pwd`. ",
        order: 2,
        lessonId: 3
      },
      {
        id: 71,
        title: 'Meme Gen',
        description:
          "[Demo Link](https://js5.c0d3.com/imggen)\n\nCreate a url `/memegen/api/write some text here` that generates an image meme.   \nUse the [jimp library](https://www.npmjs.com/package/jimp) to help you draw text into the image.  \nAllow users to specify the following in the URL parameters:\n\n* blur - (Optional). Amount of pixels to blur by.\n* src - (Optional). URL for the meme image. If no url is provided, use https://placeimg.com/640/480/any\n* black - (Optional). If true, draws the text in the image in black. Otherwise, black.\n\nCache the last 10 images searched in memory so your server will return the images faster if it has been loaded before.\n\nExample:\n\n* https://js5.c0d3.com/imggen/api/great%20job?blur=4&black=true&src=https://boygeniusreport.files.wordpress.com/2015/06/funny-cat.jpg\n\nUsing Jimp:\n\n* `Jimp.loadFont(....)` takes in a font variable and returns a promise. \n    * For font, you can use a built in font like `Jimp.FONT_SANS_32_WHITE` or ...BLACK. \n    * When the promise resolves, you get a `font` object.\n* `Jimp.read(...)` takes in a url and returns a promise \n    * When the promise resolves, you get a `image` object.\n* Using your image object you can run these functions:\n    * `image.print` takes in a font object, starting x position, starting y position, and the text you want to write.\n    * `image.getBuffer` takes in a fileType and returns a promise.\n        * For fileType, you can use the built in type `Jimp.MIME_JPEG`.\n        * When the promise resolves, you get a `buffer` object. You can turn the buffer into a string and call `fs.writeFile` to create a meme file, but we don't want to create unnecessary files. We can simply send the buffer back as a response with `res.send(buffer)`\n\nMake sure to set the response `content-type` header to `image/jpeg` before sending back the response!",
        order: 3,
        lessonId: 3
      },
      {
        id: 70,
        title: 'Asset Creation',
        description:
          '[Demo Link](https://js5.c0d3.com/assetExercise/simple/)\n\nBuild APIs for powering the text editing site. Acceptance criteria:\n\n1. Listen to incoming `POST` requests to `/api/files` to create a file.\n2. Listen to incoming `GET` requests to `/api/files` to get the an array containing all the files.\n3. Listen to incoming `GET` requests to `/api/files/file-name` to get the content of file-name.\n\nNote: `fs.readdir` takes in an argument (the path of folder) and a function. The function will be called with 2 arguments (error, data) when computer finishes.\n\nTo prevent your server from getting filled up with junk files, your server must automatically delete files after a 5 minute mark for each file. ',
        order: 4,
        lessonId: 3
      },
      {
        id: 69,
        title: 'Chatroom using JWT Auth',
        description:
          '[Demo Link](https://js5.c0d3.com/chatroom)\n\nFirst, you will use the same API that you used in JS5 Todo exercise section to check if user is logged in, signup a user, and get information about the user with this API:\n\n[https://js5.c0d3.com/auth/api/session](https://js5.c0d3.com/auth/api/session)\n\nPlease review the Todo exercise if you need to understand how it works and what API requests you must send.\n\nWhen the user goes to the site, send the request to your server with the `Authorization` header in the request. Your server sends the request to [the auth api](https://js5.c0d3.com/auth/api/session) to get information about your user. \n\nSample header\n```\nAuthorization: "Bearer a-jwt-token"\n```\n\nProvide the following APIs. Respond with a 403 status code if user is not not logged in.  \n\n* GET `/api/session` - sends back the user information. The front end uses this to determine whether to render the login page or enter room page.\n* POST `/api/:room/messages` - Creates a new message in the room.\n* GET `/api/:room/messages` - Gets the messages in the room.\n\nNote: You should be using a middleware to set the user into the request object. \n\nIn this example, you are using a 3rd party user signup / login service to store your user\'s login credentials. In the industry, some companies choose not to implement their own signup / login services and use a third party service.',
        order: 5,
        lessonId: 3
      },
      {
        id: 125,
        title: 'Authentication',
        description:
          "[Demo](https://js5.c0d3.com/auth)\n\nBuild your own backend for authentication the same way that the authentication backend for chatroom works. It must support:\n\n* POST `/api/users` to create a new user\n    * `password` field cannot be blank and must be > 5 letters\n    * `username` field cannot be blank, only contain letters and numbers (alphanumeric), is unique\n    * `email` field must contain @ symbol and must be unique\n    * Users should be able to pass in any additional key/value data pairs in the body.\n* POST `/api/sessions` to create a new session (aka login a user)\n    * `username` field can be either username or password\n    * `password` field must match the password for the user.\n* GET `/api/sessions` to get the currently logged in user. You must accept a json web token in the header field.\n\nTo generate a `jwt` token, use [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) library. \n\n* `jwt.sign( {userId: 1234 }, 'secret password' )` - will return a secure jwt token.\n* `jwt.decode( token )` - will return the data in the token, which would be `{userId: 1234, iat: ...}` if encoded like the example above. `iat` field gives you the time (in seconds) when the token has been signed.\n\nMake sure you properly secure user passwords with [bcrypt](https://www.npmjs.com/package/bcrypt)",
        order: 6,
        lessonId: 3
      },
      {
        id: 132,
        title: 'Image Text Extraction',
        description:
          "[Demo](https://js5.c0d3.com/imageAnalysis)\n\n1. For file uploads, use a [library](https://github.com/expressjs/multer) called `multer`.\n2. To use multer, first create an upload object `upload = multer({ dest: 'files/' })`\n3. Next, pass your upload object into your post request as a middleware: `app.post('/files', upload.array('userFiles'), (req, res) => ...`\n3. After the middleware, you can access files in the request object: `req.files`\n\nAfter you can successfully upload the file, you need to pass each file into [Tesseract](https://tesseract.projectnaptha.com/) Library for text analysis. Since this will take time for each image, response status should be `202` and you should create and return a job url that the user can visit to view the status of the job.\n\nYou would need to provide an API `/api/job/:jobid` to lookup the status of each processed file. \n\nSample Tesseract Code\n\n```\nconst Tesseract = require('tesseract.js')\nTesseract.recognize( ..path to image file... , 'eng', { logger: console.log }).then( ... callback ...)\n```\n\n",
        order: 7,
        lessonId: 3
      },
      {
        id: 133,
        title: 'Selfie Queen',
        description:
          "In this challenge, you will be building an application where users can go to your website and [take a picture](https://js5.c0d3.com/examples/webcam).\n\n1. [Get user's webcam](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) by calling `navigator.mediaDevices.getUserMedia({...})`, which returns a promise.\n2. When the promise resolves, you will get the webcam video stream object in your callback. Make sure you have a `video` element to display the video, and set the video element's `srcObject` property to the video stream so users can see their video.\n3. When users click on the snap button, you need to draw the video into your canvas element to get an image of the video. To do this, first get the context (think of context as a paintbrush): `const context = canvas.getContext('2d')`. \n4. Then, draw the video by passing the video element into the drawImage function: `context.drawImage(video, 0, 0)`\n5. Next, you want to get the image data from context using `canvas.toDataURL()`\n5. The data returned looks like the following format: `data:image/png;base64,ENCODED_IMAGE_DATA`. Since we only want the ENCODED_IMAGE_DATA, we can delete the the metadata.\n6. Send the data to your server.\n6. When your server receives the data, you can simply write the image data into your server. Since the image is encoded as base 64, make sure you specify it: `fs.writefile(filePath, imgData, 'base64', () => {})`\n2. On your client page, make sure you request to the server for a list of images so users can see all he pictures that was every taken by the site.",
        order: 8,
        lessonId: 3
      },
      {
        id: 67,
        title: 'Create a MemeChat',
        description:
          "**Final Project**: Complete a chatroom\n\n1. When the user first goes to your site, send them to a simple login page that asks for a username (make sure to set a cookie!).\n2. After getting in, user should see his video and input box. When user types something and hits enter, his image and text will be sent to server.\n3. When server receives image data, it needs to decode the base64 image data to Buffer so the image can be manipulated: `const imageData = Buffer.from(req.body.data, 'base64');`\n4. Next, use `gm` to draw the text onto the image and write it to file as username.png: `gm(imageData).fontSize(70).stroke('#ffffff').drawText(0, 200, req.body.message).write(username.png)`\n3. When the user types into the input box and hits enter again, the meme will be saved as `username.png`. Every user should always only have 1 image.\n4. When another person joins the room, she should see memes of everybody in the chatroom that updates in realtime. \n5. When you get this far, you will notice that images do not change event though the files have changed. This is because of browser caching. To bust the cache, you can add a date query params to the end of the image request: `username.png?${Date.now}`.\n6. If you bust the cache this way, you will see that images are now always flickering. Flickering is happening because it takes the browser awhile to retrieve the image. To get around this problem, you should render all the images into an invisible div. When all the images are loaded, then show the invisible div, then hide the current div. This way, users will see a smooth instantaneous update of the images.",
        order: 9,
        lessonId: 3
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js6-reactgqlsocketio'
  },
  {
    id: 29,
    title: 'React, GraphQL, SocketIO',
    description: 'React and GraphQL Lessons',
    docUrl: '',
    githubUrl: '',
    videoUrl: '',
    order: 6,
    challenges: [
      {
        id: 192,
        title: 'GraphQL Intro',
        description:
          "Create server side graphql endpoint that manages lessons, challenges, and pokemons!\n\n1. Install Apollo's graphql middleware so your server has the playground. [Follow the documentation](https://www.apollographql.com/docs/apollo-server/integrations/middleware/).\n2. Create typedefs for lessons and pokeman provided by [lessons api](https://c0d3.com/api/lessons) and [pokemon api](https://pokeapi.co/). Typedefs are the documentation for inputs and outputs of your app. Sample typedef provided below. Must match functionality of [existing documentation](https://js5.c0d3.com/js6c1/graphql)\n3. Create your resolver, which are functions that will run when a graphql request is received. Since your resolver will be asynchronous (you need to send request to other services), make sure it returns a promise!\n\nSample Typedef:\n\n```\nconst server = new ApolloServer({\n  typeDefs: gql(`\n    type User {\n      name: String\n    }\n    type Query {\n      users: [User]\n    }\n  `),\n   resolvers: {\n     Query: {\n       users: () => {\n         return [{name: 'Terman Hong'}, {name: Kahul, Ralra}]\n       }\n     }\n   }\n});\n```\n\nPlease test your graphql endpoints against the [example of how your queries would be used](https://js5.c0d3.com/js6/pokemonSearch.html) and change the following:\n\n1. `debounce` function argument to `300`ms. If you don't know what debounce is, ask in chatroom!\n2. Change the graphql url to your own server's url.\n\nDo not include the example front end code.",
        order: 1,
        lessonId: 29
      },
      {
        id: 193,
        title: 'GraphQL 2',
        description:
          'Continue from previous problem (make sure its approved and merged in first). Use the UI from [this example](https://js5.c0d3.com/js6/addLessons.html) to allow user to login as a pokemon and enroll in classes. Look at [this example playground](https://js5.c0d3.com/js6c2/graphql) to determine what resolves you need to support.\n\n1. You need to store user sessions. You can use [express-session](https://github.com/expressjs/session) middleware.\n2. To pass the request into your resolver, you need to pass in a `context` function when initializing ApolloServer. This function takes in an object with `req`, and `res` keys. Whatever your function returns will be passed into all your resolvers as the 3rd argument. [Documentation](https://www.apollographql.com/docs/apollo-server/api/apollo-server/)\n3. Query is reserved for retrieving data. To create or update data, we should use a mutation. Sample code below.\n\nSample codes:\n\n```\n// Setting up Apollo Server with request in the context:\nconst server = new ApolloServer({\n  ...\n  context: ({ req }) => {\n    return { req } \n  })\n})\n\n// Creating a mutation: first define the mutation typeDef, then create a Mutation resolver, almost exactly like your Query resolver\ntype Mutation {\n  addMessage(value: String): Message\n}\n... {\n  Query: ...,\n  Mutation: {\n    addMessage: (_, args, context) => {\n      // The second parameter (args), will contain the user input.\n      // Context is a variable you can setup yourself when creating the server. Example below.\n    }\n  }\n}\n```\n',
        order: 2,
        lessonId: 29
      },
      {
        id: 194,
        title: 'React',
        description:
          'Part 1 - Add React JavaScript library and turn Stars UI into a react component called `Stars`\n\nFirst, you want to add react libraries into your html file.\n\n```\n<script src="https://unpkg.com/react@16/umd/react.development.js"></script>\n<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>\n```\n\nReact\'s `<component>` tags are not JavaScript, they are merely syntax extension to JavaScript that needs to be compiled into JavaScript that browser understands (ie `document.createElement...`). To do this compilation, we need to add Babel:\n\n```\n<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>\n```\n\nWith these 3 scripts, you can now write JSX and include it as a babel template (for babel to parse / compile it). Make sure to label your script with the `type` attribute!\n\n```\n<script type="text/babel" src="/app.js"></script>\n```\n\nTo render a component into the DOM:\n\n```\nReactDOM.render( \n  <h1>Hello World</h1>,\n  document.getElementById(\'root\')\n);\n```\n\nExample of a simple react component:\n\n```\nconst AddCount = (props) => {\n  const arr = useState(props.start)\n  const countVal = arr[0]\n  const setCountVal = arr[1]\n  const clickFn = () => {\n    setCountVal( countVal + 1 )\n  }\n  return (\n    <div>\n      <h1> Count {countVal} </h1>\n      <button onClick={ clickFn }> Increase </button>\n    </div>\n  )\n}\n\n```\n\nPart 2: Refactor the [Pokemon Lesson Enrollment example](https://js5.c0d3.com/js6/addLessons.html) to use React',
        order: 3,
        lessonId: 29
      },
      {
        id: 199,
        title: 'Webpack',
        description:
          "Continue from previous problem (make sure its approved and merged in first). Refactor previous lesson (stars) by removing all the libraries you included in your HTML file and use webpack to build a file that contains all the JavaScript you need to run. All the functionalities should stay the same.\n\nIn production, you don't want the browser to be always be using Bable to render your React code into JavaScript that browser understands. Instead, you want to compile it first, then add the output JavaScript to your HTML. `Webpack` helps you with the compilation. Your goal in this challenge is to setup webpack to build your previous challenge (and future challenges) into JavaScript that your browser can understand. With Webpack, you can now use any npm modules in your application!\n\n1. First, you want to create a webpack config. The file must be named `webpack.config.js`. \n2. To compile your code, run `webpack --watch`. We include the watch option so that whenever our file changes, webpack compiles the file automatically.\n3. Change your html file to use the compiled file.\n\nSample Webpack File:\n\n\n```\nconst path = require('path');\n\nmodule.exports = {\n  entry: './src/app.js', // The first file to look into. Move your JavaScript here!\n  mode: 'production',\n  output: {\n    path: path.resolve(__dirname, 'public/dist'), // We will put the compiled file into public/dist\n  },\n  module: {\n    rules: [\n      { // This section tells Webpack to use Babel to translate your React into JavaScript\n        test: /\\.js$/, // Regex for all JavaScript file\n        exclude: /node_modules/,\n        loader: 'babel-loader',\n        options: {\n          'presets': ['@babel/preset-react'],\n        },\n      },\n    ],\n  },\n};\n```\n",
        order: 4,
        lessonId: 29
      },
      {
        id: 196,
        title: 'React KanbanBoard',
        description:
          "Rebuild Kanban Board in react (no need for undo functionality). When users go to `/kanban`, display Kanban Board. When users go to `/stars`, display stars.\n\nOn the client code, you can get the url path like this: `window.location.pathname`\n\n*Note* The web pack configuration might load slowly. If you don't see your changes reflect, make sure to check your web pack build to make sure that it is done.",
        order: 5,
        lessonId: 29
      },
      {
        id: 195,
        title: 'Star Files',
        description:
          'File Rater - Ability for users to rate each file on his server. You must use the Stars component to give each file a rating. When users go to `/files`, they should see a list of files and stars below each file.\n\n1. First, use GraphQL to send back dummy data so you can focus on the front end. Make sure that you are sending mutation requests whenever user clicks on the file component. \n2. Store file ratings into an object. ',
        order: 6,
        lessonId: 29
      },
      {
        id: 197,
        title: 'Apollo',
        description:
          "Add [React-Apollo](https://www.apollographql.com/docs/react/essentials/get-started.html) into your project, refactor File Rater to use Apollo Client's `Query` and `Mutation` components. Apollo helps you send requests to your graphql server so you don't have to do it manually.\n\n1. To integrate with apollo, first you need to create a client object that specifies your graphql API\n```\nconst client = new ApolloClient({\n  uri: \"https://example.c0d3.com/myGraphql\"\n});\n```\n2. wrap your app within an apollo provider and pass client in as a prop: \n```\n<ApolloProvider client={client}>\n  <App />\n</ApolloProvider>\n```\n3. If your component needs data, you can wrap the query component (with query string passed in) around your component:\n```\n<Query query={FILES_QUERY}>\n{({loading, error, data}) => {\n        if (loading) return <h3>Loading...</h3>;\n        if (error) return <h3>Error</h3>;\n        return <App data={data} />;\n}}\n</Query>\n```\n4. If you wrap your component around a Mutation component, you can use the first parameter into your function to trigger a mutation call:\n```\n  <Mutation mutation={RATE_QUERY}>\n    {(rateFile) => {\n      const trigger = () => {\n        rateFile({variables: {name: 'data1', value: 'data2'}})\n      };\n      return (\n        <div>\n          <button onClick={trigger}>Trigger</button>;\n        </div>\n      );\n    }}\n</Mutation>\n```",
        order: 7,
        lessonId: 29
      },
      {
        id: 198,
        title: 'SocketIo',
        description:
          "Create realtime chatroom, without using setTimeout. Chatroom should show users currently logged into the chatroom as well as realtime chat information\n\n1. First, design the UI. Should include list of online users on the left, chat messages / inputbox on the right.\n2. Add socket to your server. Instead of `app.listen`, you need to use `http.listen`\n```\nconst http = require('http').Server(app);\nconst io = require('socket.io')(http);\nio.on('connection', (socket) => {\n  console.log('socket.id', socket.id)\n});\n```\n3. On the front end add the socketio javascript library that your `http` server provides:\n`<script src=\"/socket.io/socket.io.js\"></script>`\n4. Then, you should be able to connect to the server socket. You should see logs from both the server and the client. The socket on the server side refers to the browser that is connected to the server. If 2 users goes to your website, you should see 2 socket ids being logged. Every socket corresponds to a user.\n```\nconst socket = io();\nsocket.on('connect', () => {\n  console.log('connected');\n});\n```\n5. To send data from server to client, `socket.emit('eventName', data)` sends to one user, `io.emit('eventName', data)`  sends to every user connected, and `socket.broadcast.emit('eventName', data)` sends to every user except the socket user.\n6. Client sends data to the server the same way, by using `socket.emit`. \n7. To listen to events, simply bind an event listener to the socket: `socket.on('eventName', (data) => ....)`\n8. There is system default events as well. On the server, you can listen to disconnect events to know when a socket (aka user) has been disconnected: `socket.on('disconnect', () => {...})`\n",
        order: 8,
        lessonId: 29
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js7-javascriptalg'
  },
  {
    id: 28,
    title: 'JavaScript Algorithms',
    description:
      'Problems that are commonly asked to test your JavaScript knowledge',
    docUrl:
      'https://docs.google.com/document/d/1ekuu6VbN7qqypm71cVHT-BkdxYSwY0BBHLK8xGXSN1U/edit',
    githubUrl: '',
    videoUrl: '',
    order: 7,
    challenges: [
      {
        id: 180,
        title: 'ClearAllTimeouts',
        description:
          'Write a function that clears all existing timeouts on a page. Since this is overwriting system `setTimeout` function, you need to restart the test every time you change the file.',
        order: 1,
        lessonId: 28
      },
      {
        id: 181,
        title: 'Debounce',
        description:
          'Given an function (f1) and a time, return a debounced function that executes after the given time. Debounce is most commonly used for window resize events so page doesn\'t rerender hundreds of times per second. \n\n***Example 1:***\n```\nconst func = debounce( () => console.log(\'hi\'), 200);\nwindow.onresize = func;\n// "hi" will be printed out once, 200ms after you finish resizing the window.\n```\n\n***Example 2:***\n```\nbouncedLog = debounce(console.log, 1000); // We are planning to debounce console.log\nsetInterval( () => bouncedLog("Hello"), 200);\n// "Hello" will be never be called.\n```\n\n***Example 3:***\n```\nbouncedLog = debounce(console.log, 1000); // We are planning to debounce console.log\nbouncedLog("Hey!");\nbouncedLog("Hello");\nbouncedLog("Hello World");\n// "Hello World" will be called once, after 1000ms\n```',
        order: 2,
        lessonId: 28
      },
      {
        id: 182,
        title: 'Throttle',
        description:
          'Given an function (f1) and a time, return a throttled function that executes once during the given time. Throttle is most commonly used during mouse drag events to make UI fluid but also prevent rendering from firing hundreds of times per second (30-60 times per second is good enough, hence 60 frames per second)\n\n***Example 1***\n```\nconst func = throttle( () => console.log("hi"), 500);\ndocument.body.onmousemove = func;\n// "hi" will be printed out every 500 ms as the mouse moves over the document body\n```\n\n***Example 2***\n```\nthrottleLog = throttle(console.log, 1000); // We are planning to throttle console.log\nthrottleLog("Hey!");\nthrottleLog("Hello");\nthrottleLog("Hello World");\n// "Hello World" will be called once, after 1000ms\n```\n\n***Example 3***\n```\nthrottleLog = throttle(console.log, 1000); // We are planning to throttle console.log\nsetInterval( () => throttleLog("Hello"), 200);\n// "Hello" will be called once, after every 1000ms\n```',
        order: 3,
        lessonId: 28
      },
      {
        id: 183,
        title: 'Serialize',
        description:
          'Given an function (f1) and a time, return a serialized function that executes consecutively with the given wait time between each function call. For example:\n\n```\nconst func = serialize( (v) => console.log(v), 5000);\nfunc(\'hi1\');\nfunc(\'hi2\');\nfunc(\'hi3\');\n// "hi1" will be printed after 5 seconds\n// "hi2" will be printed out 5 seconds after hi1 is printed,\n// and after another 5 seconds "hi3" will be printed out\n```',
        order: 4,
        lessonId: 28
      },
      {
        id: 184,
        title: 'Curry',
        description:
          'Given an function (f1) that takes in `n` number of parameters, return a function (b) that will always return a function until `b` has been called with sufficient parameters.\n\nExample 1:\n```\nconst sum = (a, b, c) => a + b + c;\nconst csum = curry(sum);\nconst a = csum(1); // a is a function\nconst b = a(2); // b is a function\nconst c = a(3); // c is 6, because 3 parameters have been passed in.\n```\n\n\nExample 2:\n```\nconst sum = (a, b, c) => a + b + c;\nconst csum = curry(sum);\nconst a = csum(1,2); // a is a function\nconst b = a(3); // b is 6, because 3 parameters have been passed in.\n```',
        order: 5,
        lessonId: 28
      },
      {
        id: 185,
        title: 'Next Prime',
        description:
          'Write the `primeMaker` function that takes a starting number and returns a function that will return the next prime number greater than its previously returned number.\n\n```\nconst getNextPrime = primeMaker(4);\nconst a = getNextPrime(); // a will be 5\nconst b = getNextPrime(); // b will be 7\nconst c = getNextPrime(); // c will be 11\n```',
        order: 6,
        lessonId: 28
      },
      {
        id: 186,
        title: 'sleep sort',
        description:
          'Given an array an a function (f1), call f1 with the sorted array. You are not allowed to use sort, you can only use setTimeout.\n\n```\nsleepSort([9,8,1,5], console.log) // will print out [1,5,8,9]\n```',
        order: 7,
        lessonId: 28
      },
      {
        id: 187,
        title: 'Promised sleep sort',
        description:
          "Given an array, return a promise that resolves with the sorted array. If there are duplicate values, reject, do not resolve.\n\n```\nsleepSort([9,8,1,5]).then(console.log) // will print out [1,5,8,9]\nsleepSort([9,8,1,5,1]).then(console.log) // will never resolve\nsleepSort([9,8,1,5,1]).then(console.log).catch( () => console.log('hi') ) // will console.log 'hi'\n```",
        order: 8,
        lessonId: 28
      },
      {
        id: 188,
        title: 'Promise all',
        description:
          'Write a function `resolveAll` that has the same functionality as Promise.all. Given an array of promises, resolve after all the promises have resolved with the values of all the resolved promises. You can assume that every element in the array is a promise object.\n\n***Example:***\n```\nresolveAll([new Promise((s,_) => s(7)), new Promise((s,_) => s(8)), new Promise((s,_) => s(2)])\n  .then(console.log)\n```\nShould log `[7,8,2]`, in the order the promise was inputted.',
        order: 9,
        lessonId: 28
      },
      {
        id: 189,
        title: 'parseJSON',
        description:
          'Given a JSON string of an object, return the parsed object. Ignore arrays and you can assume keys will always be alpha numeric (numbers and letters)',
        order: 10,
        lessonId: 28
      },
      {
        id: 191,
        title: 'Async Reduce',
        description:
          "Write a higher order function so that users can call asyncReduce on an array of promises. \n\n***Example:***\n```\n[Promise1, Promise2....].asyncReduce( (acc, e, i) => {\n  // acc will start with a, then the return of previous reduce functions.\n  // e will be the result for every resolve, in the order of the array.\n  return acc + e;\n, 'a').then( result => {\n  // result would be the final accumulated value.\n});\n```",
        order: 11,
        lessonId: 28
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js8-trees'
  },
  {
    id: 25,
    title: 'Trees',
    description: 'Tree problems with high difficulty',
    docUrl: '',
    githubUrl: '',
    videoUrl: '',
    order: 8,
    challenges: [
      {
        id: 160,
        title: 'Given a binary tree, find the largest value',
        description:
          'Example:\n\n![tree](https://c0d3.com/apis/draw?tree={%22v%22:30,%22children%22:[{%22v%22:50},{%22v%22:40}]})\n \n```\nconst a = {val: 30, right: {val: 40}, left: {val: 50}};\nsolution(a); // should return 50\n```',
        order: 1,
        lessonId: 25
      },
      {
        id: 161,
        title: 'Given a binary tree, find the maximum depth',
        description:
          'Examples: \n\n![tree1](https://c0d3.com/apis/draw?tree={%22v%22:30,%22children%22:[{%22v%22:50},{%22v%22:50,%22children%22:[{%22v%22:10},{%22v%22:10}]}]})\n\n```\nconst a = (above tree);\nsolution(a); // should return 2\n```\n\n\n![tree1](https://c0d3.com/apis/draw?tree={%22v%22:30})\n\n```\nconst a = (above tree);\nsolution(a); // should return 0\n```',
        order: 2,
        lessonId: 25
      },
      {
        id: 162,
        title:
          'Given a binary tree, return the maximum distance between any 2 nodes',
        description:
          'Examples: \n```\nconst a = {\n  val: 30, \n  right: {\n    val: 50,\n    right: { val: 10 },\n    left: { val: 10 },\n  }, \n  left: {val: 50}\n};\nsolution(a); // should return 3\n```\n\n```\nconst a = {\n  val: 30,\n  left: { val: 1},\n  right: {val: 2}\n};\nsolution(a); // should return 2\n```',
        order: 3,
        lessonId: 25
      },
      {
        id: 163,
        title: 'Biggest subtree value',
        description:
          'Given a binary tree, return the sum of the values of the biggest subtree',
        order: 4,
        lessonId: 25
      },
      {
        id: 164,
        title:
          'Given a binary tree and a node, find the distance to that node.',
        description:
          'Given a binary tree and a node, find the distance to that node.\n\nExample 1:\n```\nconst a = {};\nsolution(a, a) // should return 0\n```\n\nExample 2:\n```\nconst a = {};\nconst b = {};\na.left = b;\nsolution(a, b) // should return 1\n```\n',
        order: 5,
        lessonId: 25
      },
      {
        id: 165,
        title: 'Max Fun',
        description:
          'Given a hierarchy of employee (tree) and the following conditions:\n* Each employee has a fun value. ie `{val: 10}`\n* Each employee has an array of employees or empty array (manager)\n* If an employee goes to a party, his direct manager will not go to party.\n* Find the max fun of the party.',
        order: 6,
        lessonId: 25
      },
      {
        id: 166,
        title: 'Edit distance',
        description:
          'Given 2 strings, return the minimum sum of ASCII values of characters that you need to delete in the 2 strings in order to have the same string\n\n```\nsolution("bit", "it"); // returns 98 because \'b\' ascii value is 98\n```\n```\nsolution("dit", "nit"); // returns 210 because \'d\' (100) and \'n\' (110) is deleted\n```\n\n**Hint** To get the sum of ascii value of a string, do `"string".split(\'\').reduce( (acc, c) => acc + c.charCodeAt(0), 0)`',
        order: 7,
        lessonId: 25
      },
      {
        id: 172,
        title: 'Maximum Loot',
        description:
          'Given an array representing a neighborhood where every element is a house with a specific number value of loot inside.\nReturn the maximum loot you can achieve, with the condition that if you steal from the house of index n, you cannot steal\nfrom index n-1, and n+1. \n\n```\nsolution([1000, 2000, 1001]) // returns 2001\nsolution([1000, 5000, 3000]) // returns 5000\n```',
        order: 8,
        lessonId: 25
      },
      {
        id: 173,
        title: 'Longest Increasing Non-Consecutive Sequence',
        description:
          'Given an array of numbers, return the longest length of the sequence that is increasing,\nbut does not have to be consecutive (side by side) with each other.\n\n```\nsolution([1,3,2]) // returns 2\n\nsolution([3, 1, 10, 5, 20]) // returns 3\n```',
        order: 9,
        lessonId: 25
      },
      {
        id: 174,
        title: 'Minimum Coins for Change',
        description:
          'Given an array of coin values and a target number of change to create with any combination of the coin values,\nfind the minimum number of coins to make up the value of change. There will always be an infinite number of 1 cent coin available.\n\n```\nsolution([], 40) // return 40\n\nsolution([4, 5], 8) // return 2\n```',
        order: 10,
        lessonId: 25
      },
      {
        id: 175,
        title: 'Maximum Weight to Carry',
        description:
          'Given an array of weight values to carry, return the largest amount of weight possible to carry.\nNote: you can carry any number of weights for a specific value\n\n```\nsolution([4, 5], 9) // returns 9\nsolution([4], 9) // returns 8\n```',
        order: 11,
        lessonId: 25
      },
      {
        id: 176,
        title: 'Subarray Sum Equals K',
        description:
          'Given an array of integers, and a target value k,\nreturn true or false whether or not any combination of values can sum to the target value.\n\n```\nInput: integers = [5,6,2], k = 8\nOutput: true\nExplanation: 6 and 2 sum to 8\n```\n\n```\nInput: integers = [1, 3, 2, 4, 5], k = 7\nOutput: true\nExplanation: 3 and 4 sum up to 11\n```\n\n```\nInput: integers = [1, 2, 0, 3], k = 6\nOutput: true\nExplanation: 1, 2, 3 sum to 6\n```\n\n```\nInput: integers = [1, -33, 2, 5], k = 6\nOutput: false\nExplanation: no subarray adds up to 6\n```',
        order: 12,
        lessonId: 25
      }
    ],
    chatUrl: 'https://chat.c0d3.com/c0d3/channels/js8-trees'
  },
  {
    id: 27,
    title: 'General Algorithms',
    description: 'General Algorithm from interviews',
    docUrl: '',
    githubUrl: '',
    videoUrl: '',
    order: 9,
    challenges: [
      {
        id: 167,
        title: '2 sum continuous',
        description:
          'Write a function that takes in an array of integers and a target value and returns true / false if there exists a contiguous subarray that sums to the target value',
        order: 1,
        lessonId: 27
      },
      {
        id: 168,
        title: 'Count Islands',
        description:
          'Given a matrix that represents a map,\nreturn the number of isolated islands in the map.\n\nThe map has each value in the matrix representing a tile.\nA tile with a value of 1 is a land tile, and a tile with a value of 0 is a water tile.\n\nA land tile is part of the same island as any land tile that is on the top, bottom, left, or right of the current tile.\n\nLand tiles that are diagonal of each other are isolated islands as long as there is no land tile,\ntop, bottom, left, or right that connects both tiles.\n\n```\nsolution([\n  [1, 0, 0],\n  [0, 1, 1],\n  [0, 1, 0]\n]) // returns 2\n```',
        order: 2,
        lessonId: 27
      },
      {
        id: 169,
        title: 'Except Product',
        description:
          'Given an array, return an array where each element is the product of all numbers except the number at that index in the original array',
        order: 3,
        lessonId: 27
      },
      {
        id: 170,
        title: 'Backwards 0',
        description:
          'Given an array of numbers, move all the zeros to the back of the array in place and return the length of the nonzero part of the array',
        order: 4,
        lessonId: 27
      },
      {
        id: 190,
        title: 'Task Distribution',
        description:
          'Given an array of task durations, find the minimum time it takes for all the tasks to complete if you had 3 machines.\n\n```\nsolution( [1,2,3] ) // should return 3\nsolution( [1,2,3, 4, 5, 6] ) // should return 7\nsolution( [5,4,3,3,3,3,3,3] ) // should return 9\n```',
        order: 5,
        lessonId: 27
      }
    ],
    chatUrl: null
  }
]

export default dummyLessonsData
